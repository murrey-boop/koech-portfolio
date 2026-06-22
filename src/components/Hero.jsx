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
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 14px", borderRadius: 999,
                background: "#d1fae520", border: "1px solid #6ee7b760",
                color: "#059669", fontSize: "0.8rem", fontWeight: 700,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                Available for projects
              </span>
            </div>

            <p style={{
              color: "#c97d60", fontWeight: 700, fontSize: "0.8rem",
              textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 16px",
            }}>
              Freelance Content Writer, Editor & Blogger
            </p>

            <h1 style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(2rem,4.5vw,3.4rem)",
              lineHeight: 1.15, color: "var(--color-ink)",
              margin: "0 0 20px",
            }}>
              Content writing and editing
              <span style={{ color: "#a8593f" }}> with a creative spark</span>
            </h1>

            <p style={{
              color: "var(--color-ink-soft)", fontSize: "clamp(1rem,1.5vw,1.1rem)",
              lineHeight: 1.8, maxWidth: "55ch", margin: "0 0 32px",
            }}>
              Elevate your brand with razor-sharp words that captivate your audience, enhance your image, and expand your business.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{
              width: "clamp(240px,30vw,360px)", height: "clamp(240px,30vw,360px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#f4d9d0 0%,#fff7f1 100%)",
              border: "8px solid #f4d9d0",
              boxShadow: "0 16px 60px rgba(201,125,96,0.2)",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "clamp(4rem,8vw,6rem)",
            }}>
              <img src="/images/koech.jpeg" alt="Josphat Koech" style={{ width: "90%", height: "90%", borderRadius: "50%", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
