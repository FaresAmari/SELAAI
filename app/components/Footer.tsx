import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "rgba(0,0,0,0.5)",
      borderTop: "1px solid rgba(255,180,12,0.1)",
      padding: "48px 2rem 24px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "40px" }}>

        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Bayou Innovation Hub" style={{ height: "48px", width: "auto", marginBottom: "16px" }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "220px" }}>
            A community for AI enthusiasts and builders across the Gulf South.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFB40C", marginBottom: "16px" }}>Navigate</h4>
          {[
            { label: "Home", href: "/" },
            { label: "Events", href: "/events" },
            { label: "Blog", href: "/blog" },
            { label: "Newsletter", href: "/newsletter" },
            { label: "Sponsors", href: "/sponsors" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ display: "block", color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", marginBottom: "10px" }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Community */}
        <div>
          <h4 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFB40C", marginBottom: "16px" }}>Community</h4>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
            Based in Southeast Louisiana 🦐<br />
            Open to all skill levels.<br />
            Join us at the next meetup!
          </p>
          <a href="https://www.tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#010101", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "8px 16px", borderRadius: "7px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", marginTop: "16px" }}>🎵 TikTok</a>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,180,12,0.1)", paddingTop: "24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          © 2026 Bayou Innovation Hub • Louisiana A.I. Network • SE Louisiana A.I. Meet Up
        </p>
      </div>
    </footer>
  );
}
