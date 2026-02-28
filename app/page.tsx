export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        position: "relative",
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, #4A1A8A 0%, #2D0A5A 70%)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,180,12,0.15) 0%, transparent 70%)", top: "-100px", left: "-100px", animation: "float1 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(122,43,203,0.3) 0%, transparent 70%)", bottom: "-100px", right: "-100px", animation: "float2 10s ease-in-out infinite" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB40C", background: "rgba(255,180,12,0.1)", border: "1px solid rgba(255,180,12,0.3)", padding: "0.4rem 1.2rem", borderRadius: "100px", marginBottom: "2rem", display: "inline-block", animation: "fadeDown 0.8s ease both" }}>
            SE Louisiana • A.I. Community
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 900, lineHeight: 1.0, marginBottom: "1.5rem", animation: "fadeDown 0.8s 0.1s ease both" }}>
            Bayou<br />
            <span style={{ color: "#FFB40C", fontStyle: "italic", display: "block" }}>Innovation Hub</span>
          </h1>

          <p style={{ fontSize: "1.25rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem", animation: "fadeDown 0.8s 0.2s ease both" }}>
            Where Louisiana meets Artificial Intelligence. A community for builders, thinkers, and curious minds across the Gulf South.
          </p>

          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem", animation: "fadeDown 0.8s 0.3s ease both" }}>
            {[
              { num: "100+", label: "Members" },
              { num: "Monthly", label: "Meetups" },
              { num: "Free", label: "To Join" },
              { num: "NOLA", label: "Based" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", gap: i < 3 ? "2rem" : "0", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: "#FFB40C", lineHeight: 1 }}>{stat.num}</span>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)" }}>{stat.label}</span>
                </div>
                {i < 3 && <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.2)" }} />}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/events" style={{ background: "#FFB40C", color: "#1A0A2E", padding: "14px 32px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>View Events</a>
            <a href="/newsletter" style={{ border: "1px solid rgba(255,180,12,0.4)", color: "white", padding: "14px 32px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>Read Newsletter</a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", animation: "bounce 2s infinite" }}>
          SCROLL
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ background: "linear-gradient(180deg, #2D0A5A 0%, #1A0840 100%)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Our Mission</div>
          <h2 className="section-title">Where the <em>Bayou meets AI</em></h2>
          <p className="section-body" style={{ marginBottom: "3rem" }}>
            Southeast Louisiana has a rich culture of community, creativity, and resilience. We're bringing that same spirit to the AI revolution.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🧠", title: "Learn AI", desc: "Hands-on workshops and talks covering the latest in machine learning, LLMs, and AI tools — no PhD required." },
              { icon: "🤝", title: "Connect", desc: "Meet developers, entrepreneurs, and researchers from across Southeast Louisiana and the Gulf Coast." },
              { icon: "🛠️", title: "Build", desc: "Collaborate on real projects, hackathons, and demos. Turn ideas into reality with the support of a growing community." },
              { icon: "📡", title: "Stay Informed", desc: "Our newsletter cuts through the hype with honest, data-driven insights on what AI actually means for your business." },
            ].map((card) => (
              <div key={card.title} style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(122,43,203,0.05) 100%)", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "16px", padding: "2rem", transition: "transform 0.3s, border-color 0.3s", cursor: "default" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{card.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "white" }}>{card.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INSIGHT (from newsletter) ── */}
      <section style={{ padding: "5rem 2rem", background: "#2D0A5A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label">Latest Insight</div>
          <h2 className="section-title">AI Reality <em>Check</em></h2>

          <div style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.3) 0%, rgba(45,10,90,0.8) 100%)", border: "1px solid rgba(255,180,12,0.2)", borderRadius: "24px", padding: "4rem", marginTop: "2rem", position: "relative", overflow: "hidden" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20rem", color: "rgba(255,180,12,0.04)", position: "absolute", top: "-4rem", left: "1rem", lineHeight: 1, pointerEvents: "none" }}>"</div>
            <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.4, color: "white", marginBottom: "2.5rem", borderLeft: "4px solid #FFB40C", paddingLeft: "1.5rem", position: "relative" }}>
              AI is not failing. Our expectations are. We are in the necessary Trough of Disillusionment — this is recalibration, not collapse.
            </blockquote>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {[
                "95% of AI pilots fail — not because AI doesn't work, but because organizations aren't ready.",
                "The top 5% succeeding have one thing in common: a formal strategy before deployment.",
                "Real ROI takes 18–36 months minimum. Winners plan for a 3–5 year transformation.",
                "AGI is 2030+ at the earliest. Current AI is a powerful tool, not a magic solution.",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFB40C", marginTop: "0.5rem", flexShrink: 0, boxShadow: "0 0 10px rgba(255,180,12,0.5)" }} />
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{point}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <a href="/newsletter" style={{ display: "inline-block", background: "#FFB40C", color: "#1A0A2E", padding: "12px 28px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>Read Full Newsletter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENT CTA ── */}
      <section style={{ background: "#1A0840", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Next Meetup</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1rem" }}>
            Ready to get <em style={{ color: "#FFB40C" }}>involved?</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Join us monthly across Southeast Louisiana. All skill levels welcome — from total beginners to seasoned engineers.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/events" style={{ background: "#FFB40C", color: "#1A0A2E", padding: "14px 32px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>See All Events</a>
            <a href="/contact" style={{ border: "1px solid rgba(255,180,12,0.4)", color: "white", padding: "14px 32px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>Get In Touch</a>
          </div>
        </div>
      </section>

    </main>
  );
}
