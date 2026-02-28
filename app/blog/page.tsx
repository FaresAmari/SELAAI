export default function Blog() {
  const posts = [
    { slug: "#", title: "Why 95% of AI Pilots Fail (And How to Be in the 5%)", date: "Feb 20, 2026", tag: "Strategy", desc: "The data is clear — most organizations are approaching AI backwards. Here's the framework that separates winners from the rest." },
    { slug: "#", title: "Top 5 AI Tools for Louisiana Small Businesses in 2026", date: "Feb 10, 2026", tag: "Tools", desc: "From content creation to customer service automation, these are the tools actually delivering ROI for local businesses right now." },
    { slug: "#", title: "Recap: Our First SE Louisiana AI Meetup", date: "Feb 22, 2026", tag: "Community", desc: "We kicked off our first meetup with 30+ attendees, live demos, and great conversation. Here's what we covered and what's next." },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, #4A1A8A 0%, #2D0A5A 70%)", padding: "80px 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,180,12,0.1) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB40C", background: "rgba(255,180,12,0.1)", border: "1px solid rgba(255,180,12,0.3)", padding: "0.4rem 1.2rem", borderRadius: "100px", marginBottom: "1.5rem", display: "inline-block" }}>✍️ Insights & Updates</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, marginBottom: "1rem" }}>The <em style={{ color: "#FFB40C", fontStyle: "italic" }}>Blog</em></h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>AI insights, meetup recaps, and practical guides for the Gulf South community.</p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ background: "#1A0840", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          {posts.map((post) => (
            <a key={post.title} href={post.slug} style={{ display: "block", background: "linear-gradient(135deg, rgba(122,43,203,0.2) 0%, rgba(122,43,203,0.05) 100%)", border: "1px solid rgba(122,43,203,0.4)", borderRadius: "16px", padding: "2rem 2.5rem", textDecoration: "none", transition: "border-color 0.3s, transform 0.3s" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ background: "rgba(255,180,12,0.1)", color: "#FFB40C", padding: "4px 12px", borderRadius: "999px", fontSize: "0.7rem", fontFamily: "'Space Mono', monospace", letterSpacing: "0.05em" }}>{post.tag}</span>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace" }}>{post.date}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "16px" }}>{post.desc}</p>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#FFB40C", letterSpacing: "0.1em" }}>READ MORE →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
