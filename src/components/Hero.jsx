import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WriterIllustration() {
  return (
    <svg
      viewBox="0 0 680 680"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "clamp(260px,32vw,420px)", height: "clamp(260px,32vw,420px)" }}
    >
      <circle cx="340" cy="340" r="300" fill="#f4d9d0" opacity="0.35"/>
      <circle cx="340" cy="340" r="240" fill="#f4d9d0" opacity="0.45"/>

      <rect x="160" y="210" width="360" height="260" rx="18" fill="#fffdf9" stroke="#e4c5b5" strokeWidth="2"/>
      <rect x="160" y="210" width="360" height="44" rx="18" fill="#c97d60" opacity="0.18"/>
      <rect x="160" y="240" width="360" height="14" fill="#c97d60" opacity="0.18"/>

      <circle cx="192" cy="232" r="7" fill="#c97d60" opacity="0.5"/>
      <circle cx="214" cy="232" r="7" fill="#d4a090" opacity="0.4"/>
      <circle cx="236" cy="232" r="7" fill="#e4c5b5" opacity="0.5"/>

      <rect x="190" y="278" width="130" height="8" rx="4" fill="#c97d60" opacity="0.9"/>

      <rect x="190" y="306" width="280" height="6" rx="3" fill="#d4a090" opacity="0.7"/>
      <rect x="190" y="320" width="240" height="6" rx="3" fill="#d4a090" opacity="0.6"/>
      <rect x="190" y="334" width="260" height="6" rx="3" fill="#d4a090" opacity="0.55"/>
      <rect x="190" y="348" width="200" height="6" rx="3" fill="#d4a090" opacity="0.45"/>

      <line x1="190" y1="368" x2="470" y2="368" stroke="#e4c5b5" strokeWidth="1.5"/>

      <rect x="190" y="382" width="260" height="6" rx="3" fill="#d4a090" opacity="0.4"/>
      <rect x="190" y="396" width="220" height="6" rx="3" fill="#d4a090" opacity="0.35"/>
      <rect x="190" y="410" width="240" height="6" rx="3" fill="#d4a090" opacity="0.3"/>
      <rect x="190" y="424" width="180" height="6" rx="3" fill="#d4a090" opacity="0.25"/>

      <g transform="translate(448 408) rotate(-38)">
        <rect x="-8" y="-56" width="16" height="64" rx="6" fill="#a8593f"/>
        <polygon points="-8,8 8,8 0,28" fill="#7a3d2a"/>
        <rect x="-8" y="-66" width="16" height="12" rx="4" fill="#c97d60"/>
        <rect x="-3" y="-56" width="6" height="64" rx="3" fill="#c97d60" opacity="0.25"/>
        <line x1="0" y1="8" x2="0" y2="24" stroke="#f4d9d0" strokeWidth="2" opacity="0.5"/>
      </g>

      <g transform="translate(108 290)">
        <rect x="0" y="0" width="68" height="26" rx="13" fill="#c97d60" opacity="0.15" stroke="#c97d60" strokeWidth="1.2" strokeOpacity="0.5"/>
        <text x="34" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#a8593f" letterSpacing="1">SEO</text>
      </g>

      <g transform="translate(502 260)">
        <rect x="0" y="0" width="76" height="26" rx="13" fill="#c97d60" opacity="0.15" stroke="#c97d60" strokeWidth="1.2" strokeOpacity="0.5"/>
        <text x="38" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#a8593f" letterSpacing="1">COPY</text>
      </g>

      <g transform="translate(510 360)">
        <rect x="0" y="0" width="76" height="26" rx="13" fill="#c97d60" opacity="0.15" stroke="#c97d60" strokeWidth="1.2" strokeOpacity="0.5"/>
        <text x="38" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#a8593f" letterSpacing="1">BLOG</text>
      </g>

      <g transform="translate(96 390)">
        <rect x="0" y="0" width="84" height="26" rx="13" fill="#c97d60" opacity="0.15" stroke="#c97d60" strokeWidth="1.2" strokeOpacity="0.5"/>
        <text x="42" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#a8593f" letterSpacing="1">EDIT</text>
      </g>

      <g transform="translate(116 480)">
        <rect x="0" y="0" width="96" height="26" rx="13" fill="#c97d60" opacity="0.12" stroke="#c97d60" strokeWidth="1.2" strokeOpacity="0.4"/>
        <text x="48" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#a8593f" letterSpacing="1">STRATEGY</text>
      </g>

      <g transform="translate(490 460)">
        <rect x="0" y="0" width="80" height="26" rx="13" fill="#c97d60" opacity="0.12" stroke="#c97d60" strokeWidth="1.2" strokeOpacity="0.4"/>
        <text x="40" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#a8593f" letterSpacing="1">AEO</text>
      </g>

      <g transform="translate(530 168)">
        <line x1="0" y1="-13" x2="0" y2="13" stroke="#c97d60" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-13" y1="0" x2="13" y2="0" stroke="#c97d60" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-8" y1="-8" x2="8" y2="8" stroke="#c97d60" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
        <line x1="8" y1="-8" x2="-8" y2="8" stroke="#c97d60" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      </g>

      <g transform="translate(150 178)">
        <line x1="0" y1="-9" x2="0" y2="9" stroke="#c97d60" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="-9" y1="0" x2="9" y2="0" stroke="#c97d60" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      <g transform="translate(148 530)">
        <line x1="0" y1="-7" x2="0" y2="7" stroke="#c97d60" strokeWidth="2" strokeLinecap="round"/>
        <line x1="-7" y1="0" x2="7" y2="0" stroke="#c97d60" strokeWidth="2" strokeLinecap="round"/>
      </g>

      <circle cx="534" cy="524" r="7" fill="#c97d60" opacity="0.3"/>
      <circle cx="552" cy="524" r="4.5" fill="#c97d60" opacity="0.18"/>
      <circle cx="563" cy="524" r="2.5" fill="#c97d60" opacity="0.12"/>
      <circle cx="118" cy="222" r="5" fill="#c97d60" opacity="0.25"/>
      <circle cx="530" cy="576" r="4" fill="#c97d60" opacity="0.2"/>
      <circle cx="160" cy="600" r="3" fill="#c97d60" opacity="0.15"/>
    </svg>
  );
}

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
              Elevate your brand with razor-sharp words that captivate your audience, enhance your image, and expand your business,<span style={{ color: "#a8593f" }}>now and for good.</span>
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
            <WriterIllustration />
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