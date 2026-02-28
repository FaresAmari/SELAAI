import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      background: "rgba(45,10,90,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,180,12,0.15)",
      padding: "0 2rem",
      position: "sticky",
      top: 0,
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "68px",
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
        <img src="/logo.png" alt="Bayou Innovation Hub" style={{ height: "40px", width: "auto", display: "block" }} />
        <span style={{ color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.02em" }}>
          Bayou <span style={{ color: "#FFB40C" }}>Innovation Hub</span>
        </span>
      </Link>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Blog", href: "/blog" },
          { label: "Newsletter", href: "/newsletter" },
          { label: "Sponsors", href: "/sponsors" },
        ].map((link) => (
          <Link key={link.href} href={link.href} style={{
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.9rem",
            padding: "6px 12px",
            borderRadius: "6px",
            transition: "color 0.2s",
          }}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" style={{
          background: "var(--gold, #FFB40C)",
          color: "#1A0A2E",
          textDecoration: "none",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          padding: "8px 18px",
          borderRadius: "7px",
          marginLeft: "8px",
        }}>
          Join Us
        </Link>
      </nav>
    </header>
  );
}
