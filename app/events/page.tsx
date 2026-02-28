export default function Events() {
  const upcoming = [
    { id: 1, title: "Intro to Large Language Models", date: "March 15, 2026", time: "6:30 PM – 9:00 PM", location: "New Orleans, LA", desc: "A beginner-friendly deep dive into how LLMs like ChatGPT and Claude work under the hood.", speaker: "TBA", tags: ["Beginner", "LLMs"], url: "#" },
    { id: 2, title: "AI Tools for Small Business", date: "April 10, 2026", time: "6:30 PM – 9:00 PM", location: "Metairie, LA", desc: "Practical walkthrough of AI tools that local business owners can use today — no coding required.", speaker: "TBA", tags: ["Business", "Tools"], url: "#" },
  ];

  const past = [
    { id: 3, title: "Kickoff Meetup — Getting to Know Each Other", date: "February 20, 2026", location: "New Orleans, LA", recap: "Our first ever meetup brought together AI enthusiasts from across the region. We covered the group's mission, did live demos, and connected over great conversation.", speaker: "Fares Amari" },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, #4A1A8A 0%, #2D0A5A 70%)", padding: "80px 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,180,12,0.1) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB40C", background: "rgba(255,180,12,0.1)", border: "1px solid rgba(255,180,12,0.3)", padding: "0.4rem 1.2rem", borderRadius: "100px", marginBottom: "1.5rem", display: "inline-block" }}>📅 Meetups & Events</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, marginBottom: "1rem" }}>Join Us <em style={{ color: "#FFB40C", fontStyle: "italic" }}>In Person</em></h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>All skill levels welcome across Southeast Louisiana.</p>
        </div>
      </section>

      {/* Upcoming */}
      <section style={{ padding: "64px 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="section-label">Coming Up</div>
        <h2 className="section-title">Upcoming <em>Events</em></h2>
        <p className="section-body" style={{ marginBottom: "40px" }}>Reserve your spot — space is limited.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {upcoming.map((e) => (
            <div key={e.id} style={{ background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(122,43,203,0.05) 100%)", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "16px", padding: "32px", display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  {e.tags.map((t) => <span key={t} style={{ background: "rgba(255,180,12,0.1)", color: "#FFB40C", padding: "4px 12px", borderRadius: "999px", fontSize: "0.7rem", fontFamily: "'Space Mono', monospace", letterSpacing: "0.05em" }}>{t}</span>)}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "12px" }}>{e.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "4px" }}>📅 {e.date} · {e.time}</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "4px" }}>📍 {e.location}</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "16px" }}>🎤 {e.speaker}</p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>{e.desc}</p>
              </div>
              <a href={e.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#FFB40C", color: "#1A0A2E", padding: "12px 22px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem", whiteSpace: "nowrap" }}>RSVP on Eventbrite</a>
            </div>
          ))}
        </div>
      </section>

      {/* Past */}
      <section style={{ padding: "0 2rem 64px", maxWidth: "1000px", margin: "0 auto" }}>
        <div className="section-label">History</div>
        <h2 className="section-title">Past <em>Events</em></h2>
        <p className="section-body" style={{ marginBottom: "40px" }}>Missed one? Here's what we covered.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {past.map((e) => (
            <div key={e.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: "4px solid #FFB40C", borderRadius: "0 16px 16px 0", padding: "28px 32px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "8px" }}>{e.title}</h3>
              <div style={{ display: "flex", gap: "20px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace" }}>📅 {e.date}</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace" }}>📍 {e.location}</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace" }}>🎤 {e.speaker}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>{e.recap}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1A0840", borderTop: "1px solid rgba(255,180,12,0.1)", padding: "64px 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 800, marginBottom: "12px" }}>Want to speak at a future event?</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "32px" }}>We're always looking for speakers, sponsors, and venue partners.</p>
        <a href="/contact" style={{ background: "#FFB40C", color: "#1A0A2E", padding: "14px 36px", borderRadius: "8px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none" }}>Get in Touch</a>
      </section>
    </main>
  );
}
