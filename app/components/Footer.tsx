/**
 * components/Footer.tsx — Dark theme minimal footer
 */

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--glass-border)",
        paddingBlock: "2rem",
        backgroundColor: "var(--bg)",
        marginTop: "auto",
      }}
    >
      <div
        className="content-width"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-1)" }}>
          PhishNet © {new Date().getFullYear()}
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--text-3)", maxWidth: "500px" }}>
          This tool uses AI and deterministic rules to analyse content for educational and security awareness purposes.
          It does not guarantee 100% accuracy. Always exercise caution online.
        </p>
      </div>
    </footer>
  );
}
