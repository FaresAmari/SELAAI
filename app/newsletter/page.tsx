export default function Newsletter() {
  return (
    <main>
      {/* Hero */}
      <section style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "4rem 2rem", background: "radial-gradient(ellipse 80% 60% at 50% 40%, #4A1A8A 0%, #2D0A5A 70%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,180,12,0.15) 0%, transparent 70%)", top: "-100px", left: "-100px", animation: "float1 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(122,43,203,0.3) 0%, transparent 70%)", bottom: "-100px", right: "-100px", animation: "float2 10s ease-in-out infinite" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB40C", background: "rgba(255,180,12,0.1)", border: "1px solid rgba(255,180,12,0.3)", padding: "0.4rem 1.2rem", borderRadius: "100px", marginBottom: "2rem", display: "inline-block" }}>AI Reality Check • February 2026</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 1.0, marginBottom: "1.5rem" }}>
            Why A.I.<br /><span style={{ color: "#FFB40C", fontStyle: "italic" }}>Is Failing</span>
          </h1>
          <p style={{ fontSize: "1.2rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>And why the most important thing you can do right now is have patience. A deep dive into the gap between hype and reality.</p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ num: "95%", label: "Pilots Fail" }, { num: "56%", label: "Zero ROI" }, { num: "5%", label: "Succeed" }, { num: "2030+", label: "AGI Timeline" }].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: "#FFB40C", lineHeight: 1 }}>{s.num}</span>
                  <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
                </div>
                {i < 3 && <div style={{ width: "1px", height: "50px", background: "rgba(255,255,255,0.2)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section style={{ background: "linear-gradient(180deg, #2D0A5A 0%, #1A0840 100%)", padding: "5rem 2rem" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.3) 0%, rgba(45,10,90,0.8) 100%)", border: "1px solid rgba(255,180,12,0.2)", borderRadius: "24px", padding: "4rem", maxWidth: "1100px", margin: "0 auto", position: "relative", overflow: "hidden" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20rem", color: "rgba(255,180,12,0.04)", position: "absolute", top: "-4rem", left: "1rem", lineHeight: 1, pointerEvents: "none" }}>"</div>
          <div className="section-label">Executive Summary</div>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.4, color: "white", marginBottom: "2.5rem", borderLeft: "4px solid #FFB40C", paddingLeft: "1.5rem" }}>
            We are not witnessing AI failure. We are witnessing the collision between exponential technology and linear human organizational change.
          </blockquote>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              "AI adoption is at an inflection point — 78% of organizations now use AI in at least one function, up from 55% just two years ago.",
              "Despite widespread adoption, only 5% of companies achieve significant, scaled AI value. The gap between pilots and production is vast.",
              "The Trough of Disillusionment is real and necessary. Every transformative technology has passed through this valley before the Plateau of Productivity.",
              "The organizations succeeding share three traits: formal strategy, executive commitment, and patience for 18-36 month ROI timelines.",
            ].map((pt, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFB40C", marginTop: "0.5rem", flexShrink: 0, boxShadow: "0 0 10px rgba(255,180,12,0.5)" }} />
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "linear-gradient(180deg, #1A0840 0%, #2D0A5A 100%)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto 3rem" }}>
          <div className="section-label">By The Numbers</div>
          <h2 className="section-title">The State of <em>AI Adoption</em></h2>
        </div>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
          {[
            { num: "95%", label: "Pilot Failure Rate", desc: "Of AI proof-of-concepts never reach production scale", type: "danger" },
            { num: "56%", label: "Zero ROI", desc: "Of CEOs report seeing no return on AI investments", type: "danger" },
            { num: "78%", label: "Adoption Rate", desc: "Of organizations now using AI in at least one function", type: "warn" },
            { num: "30–50%", label: "Budget Waste", desc: "Spent on data quality issues before models can run", type: "warn" },
            { num: "80%", label: "Strategy Success", desc: "Companies with formal AI strategy vs 37% without one", type: "success" },
            { num: "40%", label: "Productivity Boost", desc: "Additional productivity unlocked through upskilling programs", type: "success" },
          ].map((s) => {
            const colors: Record<string, { text: string; border: string; top: string }> = {
              danger: { text: "#FC8181", border: "rgba(229,62,62,0.4)", top: "linear-gradient(90deg, #E53E3E, #FC8181)" },
              warn: { text: "#FFB40C", border: "rgba(122,43,203,0.4)", top: "linear-gradient(90deg, #7A2BCB, #FFB40C)" },
              success: { text: "#68D391", border: "rgba(56,161,105,0.4)", top: "linear-gradient(90deg, #38A169, #68D391)" },
            };
            const c = colors[s.type];
            return (
              <div key={s.label} style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(122,43,203,0.05) 100%)", border: `1px solid ${c.border}`, borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: c.top }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.5rem", color: c.text }}>{s.num}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", color: "white", marginBottom: "0.5rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Myths vs Reality */}
      <section style={{ background: "#2D0A5A", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto 2.5rem" }}>
          <div className="section-label">Debunking</div>
          <h2 className="section-title">AI Myths <em>vs Reality</em></h2>
          <p className="section-body">The narratives driving poor investment decisions.</p>
        </div>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { myth: '"AGI is 2–3 years away"', reality: 'Consensus now sits at 2030–2033 minimum, possibly decades. Scaling limits are real and physical.' },
            { myth: '"AI will solve everything"', reality: '95% of pilots fail. Success requires strategy, process redesign, patience, and organizational readiness.' },
            { myth: '"Quick ROI is guaranteed"', reality: '56% of CEOs see zero ROI. Real returns take 18–36 months minimum, with full transformation at 3–5 years.' },
            { myth: '"AI will replace all workers"', reality: 'The augmentation model dominates. Only 17% use AI gains for headcount reduction.' },
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ padding: "1.5rem 2rem", background: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.2)", borderRadius: "12px 0 0 12px" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FC8181", marginBottom: "0.5rem" }}>✗ MYTH</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontStyle: "italic", color: "white" }}>{row.myth}</div>
              </div>
              <div style={{ padding: "1.5rem 2rem", background: "rgba(56,161,105,0.07)", border: "1px solid rgba(56,161,105,0.2)", borderRadius: "0 12px 12px 0" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#68D391", marginBottom: "0.5rem" }}>✓ REALITY</div>
                <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{row.reality}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "1100px", margin: "1.5rem auto 0", background: "rgba(255,180,12,0.07)", border: "1px solid rgba(255,180,12,0.25)", borderRadius: "12px", padding: "1.5rem 2rem" }}>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}><strong style={{ color: "#FFB40C" }}>Key Insight:</strong> AI isn't failing due to technical capability — it's failing due to unrealistic expectations, poor infrastructure, and lack of organizational readiness. Fix the org, then deploy the tech.</p>
        </div>
      </section>

      {/* Conclusion */}
      <section style={{ background: "linear-gradient(135deg, #5A1A9A 0%, #2D0A5A 100%)", padding: "6rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(255,180,12,0.08) 0%, transparent 60%)", top: "-200px", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
          <div className="section-label" style={{ textAlign: "center", marginBottom: "1.5rem" }}>The Bottom Line</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1.5rem" }}>
            AI is not failing.<br /><span style={{ color: "#FFB40C", fontStyle: "italic" }}>Our expectations are.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "3rem" }}>
            We are in the necessary Trough of Disillusionment — this is recalibration, not collapse. The technology is real. The opportunity is real.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left", marginBottom: "3rem" }}>
            {[
              "We're in the Trough of Disillusionment — a necessary recalibration, not failure. Every transformative technology has passed through this valley.",
              "Success requires patience: 18–36 months for ROI, 3–5 years for real transformation.",
              "The technology is powerful but narrow. AGI is 2030+ at the earliest.",
              "Winners invest in strategy, talent, and infrastructure — not just tools.",
            ].map((pt, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "1.25rem 1.5rem", borderLeft: "3px solid #FFB40C" }}>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{pt}</p>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontStyle: "italic", color: "#FFB40C", paddingTop: "2rem", borderTop: "1px solid rgba(255,180,12,0.2)" }}>
            The race isn't to deploy fastest. It's to deploy smartest.
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section style={{ background: "#1A0840", padding: "5rem 2rem", textAlign: "center" }}>
        <div className="section-label" style={{ textAlign: "center" }}>Stay Informed</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>Get the next issue <em style={{ color: "#FFB40C" }}>delivered</em></h2>
        <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>No hype. Just honest, data-driven AI insights for the Southeast Louisiana community.</p>
        <a href="/contact" style={{ background: "#FFB40C", color: "#1A0A2E", padding: "14px 36px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none" }}>Subscribe Free</a>
      </section>
    </main>
  );
}
