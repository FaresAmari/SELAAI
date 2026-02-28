"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (res.ok) { setStatus("✅ Message sent! We'll be in touch soon."); form.reset(); }
    else { setStatus("❌ Something went wrong. Please try again."); }
  }

  const inputStyle = { padding: "12px 16px", fontSize: "0.95rem", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "8px", outline: "none", color: "white", background: "rgba(255,255,255,0.05)", fontFamily: "'DM Sans', sans-serif", width: "100%" };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, #4A1A8A 0%, #2D0A5A 70%)", padding: "80px 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,180,12,0.1) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB40C", background: "rgba(255,180,12,0.1)", border: "1px solid rgba(255,180,12,0.3)", padding: "0.4rem 1.2rem", borderRadius: "100px", marginBottom: "1.5rem", display: "inline-block" }}>📬 Get In Touch</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, marginBottom: "1rem" }}>Contact <em style={{ color: "#FFB40C", fontStyle: "italic" }}>Us</em></h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>Questions, sponsorships, speaking opportunities — we'd love to hear from you.</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#1A0840", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* Left */}
          <div>
            <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "32px", border: "1px solid rgba(255,180,12,0.2)", boxShadow: "0 4px 40px rgba(122,43,203,0.3)" }}>
              <img src="/logo.png" alt="Bayou Innovation Hub" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(45,10,90,0.8) 100%)", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "16px", padding: "28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "20px" }}>Fares Amari</h3>
              {[
                { icon: "📧", label: "Email", value: "SE_LA_AI@Outlook.com", href: "mailto:SE_LA_AI@Outlook.com" },
                { icon: "📞", label: "Phone", value: "(504) 656-6332", href: "tel:5046566332" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{item.label}</p>
                    <a href={item.href} style={{ color: "white", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>{item.value}</a>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>Follow Us</p>
                <a href="https://www.tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#010101", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "10px 20px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>🎵 TikTok</a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(45,10,90,0.8) 100%)", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "16px", padding: "36px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 800, marginBottom: "8px" }}>Send a Message</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "28px" }}>We'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
              <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
              <textarea name="message" placeholder="Your Message" required rows={5} style={{ ...inputStyle, resize: "vertical" }} />
              <button type="submit" style={{ padding: "14px", fontSize: "1rem", background: "#FFB40C", color: "#1A0A2E", border: "none", borderRadius: "8px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.01em" }}>Send Message</button>
            </form>
            {status && <p style={{ marginTop: "16px", fontWeight: 600, color: status.startsWith("✅") ? "#68D391" : "#FC8181", fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif" }}>{status}</p>}
          </div>

        </div>
      </section>
    </main>
  );
}
