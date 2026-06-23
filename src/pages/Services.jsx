import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const extras = [
  { icon: "📰", title: "Newsletter Writing", description: "Engaging email newsletters that keep your audience coming back every week with valuable insights." },
  { icon: "📱", title: "Social Media Copy", description: "Punchy, on-brand captions and posts for LinkedIn, Instagram, Twitter and more." },
  { icon: "📄", title: "Case Studies", description: "Compelling client success stories that build trust and close deals with proof." },
  { icon: "🎯", title: "Ad Copy & Landing Pages", description: "Conversion-focused copy for ads, landing pages, and product descriptions that spark genuine sales calls." },
  { icon: "🎙️", title: "Video & Podcast Scripts", description: "Engaging scripts for video content, YouTube, and podcasts — written to be heard, not read." },
  { icon: "📊", title: "White Papers & Reports", description: "In-depth, authoritative long-form content that establishes your brand as a thought leader." },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Josphat Koech</title>
        <meta name="description" content="SEO content writing, blog writing, website copywriting, editing, proofreading, AI SEO, GEO, LLM SEO and more — by Josphat Koech." />
      </Helmet>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
          <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>What I Do</p>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 16px" }}>
            Enlist hands-on help for  your words
          </h1>
          <p style={{ color: "var(--color-ink-soft)", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Got a nifty start-up website and some lovable headshots… but no words? Here are some ways I can help.
          </p>
        </div>

        {/* Core 4 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, marginBottom: "clamp(48px,8vw,72px)" }}>
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>

        {/* Also available */}
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,1.8rem)", color: "var(--color-ink)", marginBottom: 10, textAlign: "center" }}>
          Also available
        </h2>
        <p style={{ color: "var(--color-ink-soft)", textAlign: "center", maxWidth: 480, margin: "0 auto clamp(28px,4vw,40px)", lineHeight: 1.7 }}>
          You name the media — I've probably done it. Here's a broader look at the full scope.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20, marginBottom: "clamp(48px,8vw,72px)" }}>
          {extras.map(({ icon, title, description }) => (
            <div key={title} style={{ padding: "clamp(20px,3vw,28px)", borderRadius: 14, background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
              <div style={{ fontSize: "1.7rem", marginBottom: 12 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.05rem", color: "var(--color-ink)", margin: "0 0 8px" }}>{title}</h3>
              <p style={{ color: "var(--color-ink-soft)", margin: 0, lineHeight: 1.7, fontSize: "0.88rem" }}>{description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ textAlign: "center", padding: "clamp(36px,6vw,56px) clamp(24px,4vw,40px)", borderRadius: 20, background: "linear-gradient(135deg,#f4d9d0,#fff7f1)", border: "1px solid #f4d9d0" }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,2rem)", color: "#271d1e", margin: "0 0 12px" }}>
            Not sure what you need?
          </h2>
          <p style={{ color: "#6b5d5f", marginBottom: 28, maxWidth: 420, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Let's talk it through — no pressure, no jargon. If you want to remove your creative blocks and outshine your competitors, I'm here.
          </p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "#c97d60", color: "#fff", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
            onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
          >Get in touch →</Link>
        </div>
      </div>
    </>
  );
}
