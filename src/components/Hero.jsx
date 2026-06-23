import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <section style={{ padding: "clamp(48px,8vw,96px) 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px,6vw,80px)",
          alignItems: "center",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
         

            <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 14px" }}>
              Freelance Content Writer, Editor & Blogger
            </p>

            <h1 style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(2rem,4.5vw,3.4rem)",
              lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 20px",
            }}>
              Content writing and editing
              <span style={{ color: "#a8593f" }}> with a creative spark</span>
            </h1>

            <p style={{
              color: "var(--color-ink-soft)", fontSize: "clamp(1rem,1.5vw,1.1rem)",
              lineHeight: 1.8, maxWidth: "55ch", margin: "0 0 10px",
            }}>
              Elevate your brand with razor-sharp words that captivate your audience, enhance your image, and expand your business,<span style={{ color: "#a8593f" }}>      now and for good.</span>
            </p>
          

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link to="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", borderRadius: 999,
                background: "#c97d60", color: "#fff",
                fontWeight: 600, textDecoration: "none", fontSize: "1rem",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
                onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
              >
                Let's work together →
              </Link>
              <Link to="/portfolio" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", borderRadius: 999,
                border: "1px solid var(--border-color)",
                color: "var(--color-ink)", fontWeight: 600,
                textDecoration: "none", fontSize: "1rem",
                background: "transparent", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c97d60"; e.currentTarget.style.color = "#c97d60"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--color-ink)"; }}
              >
                View my work
              </Link>
            </div>

            {/* Trust stats */}
            <div style={{ display: "flex", gap: 28, marginTop: 36, flexWrap: "wrap" }}>
              {[["15+", "Years experience"], ["100+", "Happy clients"], ["500+", "Projects delivered"]].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "1.5rem", fontWeight: 700, color: "#c97d60", margin: 0 }}>{num}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-ink-soft)", margin: 0, fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <img
          src="/images/hero-image.png"
          alt="Unhinged Words — SEO writer for search, answers & AI"
          style={{
              width: "clamp(260px,38vw,520px)",
              height: "auto",
              mixBlendMode: "multiply",
              opacity: 0.92,
          }}
  />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}