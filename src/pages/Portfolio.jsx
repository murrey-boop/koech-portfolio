import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolio } from "../data/portfolio";

const categories = ["All", "SEO Content Writing", "Blog Writing", "Research Writing", "iGaming Content"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolio : portfolio.filter(p => p.category === active);

  return (
    <>
      <Helmet>
        <title>Portfolio — Unhinged Words</title>
        <meta name="description" content="Real writing samples from Unhinged Words across cybersecurity, finance, cryptocurrency, automotive, statistics, and iGaming." />
        <meta property="og:title" content="Portfolio — Unhinged Words" />
        <meta property="og:description" content="Real writing samples across multiple industries, with direct links to the source documents." />
        <meta property="og:image" content="https://www.unhingedwords.com/og-image.png" />
        <meta property="og:url" content="https://www.unhingedwords.com/portfolio" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.unhingedwords.com/portfolio" />
      </Helmet>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,56px)" }}>
          <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>Real Writing Samples</p>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 16px" }}>
            Portfolio
          </h1>
          <p style={{ color: "var(--color-ink-soft)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            I've worked with 100s of clients across different industries. Browse real samples — each card links directly to the Google Doc so you can read the work.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: "8px 20px", borderRadius: 999, border: "1px solid var(--border-color)",
              fontFamily: "inherit", fontSize: "0.88rem", cursor: "pointer",
              fontWeight: active === cat ? 700 : 500,
              background: active === cat ? "#c97d60" : "var(--bg-card)",
              color: active === cat ? "#fff" : "var(--color-ink-soft)",
              transition: "all 0.2s",
            }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 28, marginBottom: "clamp(48px,8vw,80px)" }}>
          {filtered.map(p => <PortfolioCard key={p.title} project={p} />)}
        </div>

        <div style={{ textAlign: "center", padding: "clamp(36px,6vw,52px) 24px", borderRadius: 20, background: "linear-gradient(135deg,#f4d9d0,#fff7f1)", border: "1px solid #f4d9d0" }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,1.8rem)", color: "#271d1e", margin: "0 0 12px" }}>
            Need samples for a specific industry?
          </h2>
          <p style={{ color: "#6b5d5f", marginBottom: 28, maxWidth: 440, margin: "0 auto 28px" }}>
            Get in touch and I'll pull together the most relevant work for your niche.
          </p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "#c97d60", color: "#fff", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
            onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
          >Request samples →</Link>
        </div>
      </div>
    </>
  );
}
