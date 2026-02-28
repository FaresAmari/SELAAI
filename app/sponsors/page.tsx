export default function Sponsors() {
  const tiers = [
    { name: "Community Sponsor", price: "$100–250", per: "per event", color: "#9B4EE8", border: "rgba(122,43,203,0.4)", perks: ["Logo on website", "Mentioned at event", "Social media shoutout", "Link in newsletter"] },
    { name: "Gold Sponsor", price: "$500", per: "per event", color: "#FFB40C", border: "rgba(255,180,12,0.5)", perks: ["Everything in Community", "2-minute speaking slot", "Featured in email blast", "Logo on event materials", "Table/display at venue"] },
    { name: "Presenting Sponsor", price: "$1,000+", per: "per event", color: "#68D391", border: "rgba(56,161,105,0.5)", perks: ["Everything in Gold", "Branded event naming rights", "Full email feature", "Banner at venue", "Dedicated blog post", "Quarterly partnership review"] },
  ];

  const targets = ["IT Staffing & Recruiting Firms", "Local SaaS Companies", "AWS / Azure / GCP Regional Reps", "Coding Bootcamps & Universities", "Law & Accounting Firms Using AI", "Healthcare Technology Companies", "Financial Services & Fintech", "Local Startups & Accelerators"];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, #4A1A8A 0%, #2D0A5A 70%)", padding: "80px 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,180,12,0.1) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB40C", background: "rgba(255,180,12,0.1)", border: "1px solid rgba(255,180,12,0.3)", padding: "0.4rem 1.2rem", borderRadius: "100px", marginBottom: "1.5rem", display: "inline-block" }}>🤝 Partnerships</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, marginBottom: "1rem" }}>Become a <em style={{ color: "#FFB40C", fontStyle: "italic" }}>Sponsor</em></h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto" }}>Get your brand in front of AI-focused professionals, developers, and business leaders across Southeast Louisiana.</p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section style={{ background: "#1A0840", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Why Partner With Us</div>
          <h2 className="section-title">Reach the <em>Right Audience</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              { num: "100+", label: "Active Members", desc: "And growing every month across the Gulf South region." },
              { num: "Monthly", label: "Events", desc: "Regular in-person touchpoints with your target audience." },
              { num: "Multi", label: "Channel Reach", desc: "Website, email newsletter, TikTok, and in-person." },
              { num: "Niche", label: "AI-Focused", desc: "Decision makers and early adopters in one room." },
            ].map((s) => (
              <div key={s.label} style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(122,43,203,0.05) 100%)", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #7A2BCB, #FFB40C)" }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: "#FFB40C", lineHeight: 1, marginBottom: "0.5rem" }}>{s.num}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white", marginBottom: "0.5rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section style={{ background: "#2D0A5A", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Sponsorship Packages</div>
          <h2 className="section-title">Choose Your <em>Tier</em></h2>
          <p className="section-body" style={{ marginBottom: "3rem" }}>Flexible options for businesses of every size. All packages include logo placement on the website.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {tiers.map((tier) => (
              <div key={tier.name} style={{ background: "linear-gradient(135deg, rgba(45,10,90,0.8) 0%, rgba(26,8,64,0.9) 100%)", border: `1px solid ${tier.border}`, borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: tier.color, marginBottom: "0.75rem" }}>{tier.name}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: tier.color, lineHeight: 1 }}>{tier.price}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>{tier.per}</div>
                </div>
                <div style={{ width: "40px", height: "2px", background: tier.color, opacity: 0.6 }} />
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {tier.perks.map((perk) => (
                    <li key={perk} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                      <span style={{ color: tier.color, flexShrink: 0, marginTop: "1px" }}>✓</span>{perk}
                    </li>
                  ))}
                </ul>
                <a href="/contact" style={{ display: "block", textAlign: "center", background: tier.color === "#FFB40C" ? "#FFB40C" : "transparent", color: tier.color === "#FFB40C" ? "#1A0A2E" : tier.color, border: `1px solid ${tier.border}`, padding: "12px 24px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", marginTop: "auto" }}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Companies */}
      <section style={{ background: "#1A0840", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Ideal Partners</div>
          <h2 className="section-title">Who Should <em>Sponsor?</em></h2>
          <p className="section-body" style={{ marginBottom: "2.5rem" }}>If your customers are tech-forward professionals in Louisiana, this is your audience.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {targets.map((t) => (
              <div key={t} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.25rem 1.5rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "#FFB40C" }}>›</span>{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #5A1A9A 0%, #2D0A5A 100%)", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>Ready to partner <em style={{ color: "#FFB40C" }}>with us?</em></h2>
        <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>Reach out and we'll build a custom package that fits your goals and budget.</p>
        <a href="/contact" style={{ background: "#FFB40C", color: "#1A0A2E", padding: "14px 36px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none" }}>Contact Us About Sponsorship</a>
      </section>
    </main>
  );
}
