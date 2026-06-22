import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const extras = [
  { icon: "📰", title: "Newsletter Writing", description: "Email campaigns and newsletters that keep readers engaged and coming back." },
  { icon: "📱", title: "Social Media Copy", description: "Short-form copy for campaigns, announcements, and brand moments." },
  { icon: "📄", title: "Case Studies", description: "Success stories that demonstrate value and build trust with prospects." },
  { icon: "🔄", title: "Content Strategy", description: "Messaging and structure that align content with your audience and goals." },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Unhinged Words</title>
        <meta name="description" content="SEO content writing, blog writing, website copywriting, editing, proofreading, newsletters, case studies, and content strategy from Unhinged Words." />
      </Helmet>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,64px)" }}>
          <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>What I Do</p>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-ink)", margin: "0 0 16px" }}>Services</h1>
          <p style={{ color: "var(--color-ink-soft)", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            The core offer is SEO content writing, blog writing, website copywriting, and editing and proofreading.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, marginBottom: "clamp(48px,8vw,80px)" }}>
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>

        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,1.8rem)", color: "var(--color-ink)", marginBottom: 28, textAlign: "center" }}>Also available</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20, marginBottom: "clamp(48px,8vw,80px)" }}>
          {extras.map(({ icon, title, description }) => (
            <div key={title} style={{ padding: "clamp(20px,3vw,28px)", borderRadius: 14, background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.05rem", color: "var(--color-ink)", margin: "0 0 8px" }}>{title}</h3>
              <p style={{ color: "var(--color-ink-soft)", margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", padding: "clamp(36px,6vw,56px) clamp(24px,4vw,40px)", borderRadius: 20, background: "linear-gradient(135deg,#f4d9d0,#fff7f1)", border: "1px solid #f4d9d0" }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,2rem)", color: "#271d1e", margin: "0 0 12px" }}>Need the right format?</h2>
          <p style={{ color: "#6b5d5f", marginBottom: 28 }}>Share what you're building and I'll help shape the content around it.</p>
          <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "#c97d60", color: "#fff", fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
            onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
          >Get in touch →</Link>
        </div>
      </div>
    </>
  );
}
