/**
 * lib/validation.ts
 *
 * Server-side input validation for POST /api/analyze.
 *
 * Rules:
 *  - Request body must exist and be parseable JSON
 *  - `content` must be a non-empty trimmed string
 *  - `content` must not exceed MAX_CONTENT_LENGTH characters
 *  - `type` must be "text" or "url"
 *  - When type is "url", content must contain a URL-like pattern
 *
 * IMPORTANT: This module must never expose internal stack traces.
 * All errors returned here are safe to send to the client.
 */

import type { AnalysisType, AnalyzeRequest } from "./types";

// ─── Constants ────────────────────────────────────────────────────────────────

export const MAX_CONTENT_LENGTH = 12_000;
export const MIN_CONTENT_LENGTH = 3;

/** Allowed analysis type values */
const VALID_TYPES: ReadonlySet<string> = new Set(["text", "url"]);

/**
 * Loose URL pattern — detects that the input looks vaguely like a URL.
 * We do NOT validate full RFC-3986 compliance here; the deterministic
 * engine handles deeper URL parsing.
 */
const URL_PATTERN = /https?:\/\/[^\s]{4,}|www\.[^\s]{4,}/i;

// ─── Types ────────────────────────────────────────────────────────────────────

export type ValidationResult =
  | { ok: true; data: AnalyzeRequest }
  | { ok: false; error: string; status: 400 };

// ─── Validator ────────────────────────────────────────────────────────────────

/**
 * Validates the raw request body from POST /api/analyze.
 *
 * @param body - The parsed JSON body (unknown because we cannot trust it)
 * @returns ValidationResult — either success with typed data or a client-safe error
 */
export function validateRequest(body: unknown): ValidationResult {
  // Must be an object
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return failure("Please provide a valid request body.");
  }

  const raw = body as Record<string, unknown>;

  // ── content field ──────────────────────────────────────────────────────────
  if (!("content" in raw)) {
    return failure("Please provide content to analyze.");
  }

  if (typeof raw.content !== "string") {
    return failure("Content must be a text string.");
  }

  const content = raw.content.trim();

  if (content.length < MIN_CONTENT_LENGTH) {
    return failure("Please paste some content before starting the analysis.");
  }

  if (content.length > MAX_CONTENT_LENGTH) {
    return failure(
      `The submitted content is too long. Keep it under ${MAX_CONTENT_LENGTH.toLocaleString()} characters.`
    );
  }

  // ── type field ─────────────────────────────────────────────────────────────
  if (!("type" in raw)) {
    return failure("Please specify the content type (text or url).");
  }

  if (typeof raw.type !== "string" || !VALID_TYPES.has(raw.type)) {
    return failure("Content type must be either 'text' or 'url'.");
  }

  const type = raw.type as AnalysisType;

  // ── URL-mode extra check ───────────────────────────────────────────────────
  if (type === "url" && !URL_PATTERN.test(content)) {
    return failure(
      "Enter a complete URL, including the domain (e.g. https://example.com)."
    );
  }

  // ── Reject unexpected extra fields ────────────────────────────────────────
  // We silently ignore them rather than rejecting — this is a hackathon API
  // and strict field rejection would be unnecessary friction.

  return { ok: true, data: { content, type } };
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function failure(error: string): { ok: false; error: string; status: 400 } {
  return { ok: false, error, status: 400 };
}
