/**
 * components/Footer.tsx
 * Minimal site footer.
 */

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "auto",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="content-width">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            PhishNet
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-secondary)",
            }}
          >
            AI-powered phishing detection. Know before you click.
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              lineHeight: 1.6,
              marginTop: "0.25rem",
            }}
          >
            <strong>Disclaimer:</strong> PhishNet is an educational and assistive
            tool. Results indicate risk levels and should not be used as the sole
            basis for security decisions. No content is stored.
          </p>
        </div>
      </div>
    </footer>
  );
}
