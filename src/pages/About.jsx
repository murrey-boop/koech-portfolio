import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Josphat Koech</title>
        <meta name="description" content="Learn about Josphat Koech — freelance content writer, editor and blogger based in Nairobi, Kenya with 5+ years of experience." />
      </Helmet>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>

        {/* Hero block */}
        <div className="about-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,6vw,64px)", alignItems: "center", marginBottom: "clamp(48px,8vw,96px)" }}>
          <div>
            <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 14px" }}>About Me</p>
            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 20px", lineHeight: 1.2 }}>
              Who in the world am I?
            </h1>
            <p style={{ color: "var(--color-ink-soft)", fontStyle: "italic", marginBottom: 20, lineHeight: 1.8 }}>
              "Ah, that's the great puzzle." — Lewis Carroll
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: 16 }}>
              I've loved words and language for as long as I can remember — the rhythm, the precision, and the way they shape how we see the world and each other.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: 32 }}>
              I'm a content writer who embraces the whole spectrum of what words can do — from SEO articles and blog posts to website copy, editing, and proofreading. What you get when you work with me is someone who genuinely cares about your message.
            </p>
            <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "#c97d60", color: "#fff", fontWeight: 600, textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
              onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
            >Work with me →</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "clamp(200px,28vw,320px)", height: "clamp(240px,32vw,380px)", borderRadius: 24, background: "linear-gradient(135deg,#f4d9d0,#fff7f1)", border: "1px solid #f4d9d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(4rem,8vw,6rem)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>✍️</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 20, marginBottom: "clamp(48px,8vw,96px)" }}>
          {[["50+","Happy Clients"],["200+","Articles Written"],["5+","Years Experience"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center", padding: "clamp(24px,4vw,40px) 16px", borderRadius: 16, border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
              <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#c97d60", margin: "0 0 8px", fontWeight: 700 }}>{num}</p>
              <p style={{ color: "var(--color-ink-soft)", margin: 0, fontWeight: 500, fontSize: "0.95rem" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.6rem,3vw,2rem)", color: "var(--color-ink)", marginBottom: 28, textAlign: "center" }}>How I work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {[
            { icon: "🎯", title: "Clarity first", body: "I cut the clutter and say exactly what needs saying — no jargon, no filler." },
            { icon: "🤝", title: "Collaborative", body: "I treat every project as a partnership. Your voice, your goals, my craft." },
            { icon: "⏱️", title: "Reliable", body: "Deadlines are promises. I deliver on time, every time, without chasing." },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{ padding: "clamp(20px,3vw,32px)", borderRadius: 16, background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.15rem", color: "var(--color-ink)", margin: "0 0 10px" }}>{title}</h3>
              <p style={{ color: "var(--color-ink-soft)", margin: 0, lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-hero { grid-template-columns: 1fr !important; }
          .about-hero > div:last-child { display: none !important; }
        }
      `}</style>
    </>
  );
}
