import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio — Josphat Koech</title>
        <meta name="description" content="Selected writing work by Josphat Koech — SEO content, blog posts, website copy and more across multiple industries." />
      </Helmet>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
          <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>Selected Work</p>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 16px" }}>Portfolio</h1>
          <p style={{ color: "var(--color-ink-soft)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            A sample of projects across industries — each one shaped around the client's voice and goals.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, marginBottom: "clamp(48px,8vw,80px)" }}>
          {portfolio.map(p => <PortfolioCard key={p.title} project={p} />)}
        </div>

        <div style={{ textAlign: "center", padding: "clamp(36px,6vw,56px) 24px", borderRadius: 20, background: "linear-gradient(135deg,#f4d9d0,#fff7f1)", border: "1px solid #f4d9d0" }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,1.8rem)", color: "#271d1e", margin: "0 0 12px" }}>Want to see more?</h2>
          <p style={{ color: "#6b5d5f", marginBottom: 28 }}>Get in touch and I'll share relevant samples for your industry.</p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "#c97d60", color: "#fff", fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
            onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
          >Request samples →</Link>
        </div>
      </div>
    </>
  );
}
