import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WriterIllustration() {
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "clamp(220px,28vw,320px)", height: "clamp(220px,28vw,320px)" }}>

      {/* Outer ring */}
      <circle cx="160" cy="160" r="148" fill="#f4d9d0" opacity="0.4"/>
      <circle cx="160" cy="160" r="130" fill="#f4d9d0" opacity="0.6"/>

      {/* Main document card */}
      <rect x="72" y="60" width="130" height="165" rx="12" fill="#fffdf9" stroke="#e4c5b5" strokeWidth="1.5"/>

      {/* Document header bar */}
      <rect x="72" y="60" width="130" height="32" rx="12" fill="#c97d60" opacity="0.15"/>
      <rect x="72" y="80" width="130" height="12" fill="#c97d60" opacity="0.15"/>

      {/* Headline line — terracotta */}
      <rect x="88" y="70" width="72" height="7" rx="3.5" fill="#c97d60"/>

      {/* Body text lines */}
      <rect x="88" y="106" width="98" height="5" rx="2.5" fill="#d4a090" opacity="0.8"/>
      <rect x="88" y="118" width="82" height="5" rx="2.5" fill="#d4a090" opacity="0.7"/>
      <rect x="88" y="130" width="90" height="5" rx="2.5" fill="#d4a090" opacity="0.65"/>
      <rect x="88" y="142" width="66" height="5" rx="2.5" fill="#d4a090" opacity="0.55"/>

      {/* Divider */}
      <line x1="88" y1="158" x2="186" y2="158" stroke="#e4c5b5" strokeWidth="1"/>

      {/* Second paragraph */}
      <rect x="88" y="168" width="94" height="5" rx="2.5" fill="#d4a090" opacity="0.5"/>
      <rect x="88" y="180" width="76" height="5" rx="2.5" fill="#d4a090" opacity="0.45"/>
      <rect x="88" y="192" width="86" height="5" rx="2.5" fill="#d4a090" opacity="0.4"/>

      {/* Pen tool — overlaid bottom-right of doc */}
      <g transform="translate(178, 185) rotate(-40)">
        {/* Pen barrel */}
        <rect x="-6" y="-44" width="12" height="52" rx="5" fill="#a8593f"/>
        {/* Pen tip */}
        <polygon points="-6,8 6,8 0,24" fill="#7a3d2a"/>
        {/* Pen clip / top */}
        <rect x="-6" y="-52" width="12" height="10" rx="3" fill="#c97d60"/>
        {/* Nib highlight */}
        <line x1="0" y1="8" x2="0" y2="20" stroke="#f4d9d0" strokeWidth="1.5" opacity="0.6"/>
      </g>

      {/* Floating tag — SEO */}
      <g transform="translate(54, 96)">
        <rect x="0" y="0" width="52" height="22" rx="11" fill="#c97d60" opacity="0.12" stroke="#c97d60" strokeWidth="1" strokeOpacity="0.4"/>
        <text x="26" y="15" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#a8593f" letterSpacing="0.05em">SEO</text>
      </g>

      {/* Floating tag — COPY */}
      <g transform="translate(194, 130)">
        <rect x="0" y="0" width="56" height="22" rx="11" fill="#c97d60" opacity="0.12" stroke="#c97d60" strokeWidth="1" strokeOpacity="0.4"/>
        <text x="28" y="15" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#a8593f" letterSpacing="0.05em">COPY</text>
      </g>

      {/* Floating tag — BLOG */}
      <g transform="translate(190, 80)">
        <rect x="0" y="0" width="52" height="22" rx="11" fill="#c97d60" opacity="0.12" stroke="#c97d60" strokeWidth="1" strokeOpacity="0.4"/>
        <text x="26" y="15" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#a8593f" letterSpacing="0.05em">BLOG</text>
      </g>

      {/* Sparkle top-right */}
      <g transform="translate(248, 68)">
        <line x1="0" y1="-11" x2="0" y2="11" stroke="#c97d60" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="-11" y1="0" x2="11" y2="0" stroke="#c97d60" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="-7" y1="-7" x2="7" y2="7" stroke="#c97d60" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="7" y1="-7" x2="-7" y2="7" stroke="#c97d60" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </g>

      {/* Small sparkle bottom-left */}
      <g transform="translate(68, 222)">
        <line x1="0" y1="-7" x2="0" y2="7" stroke="#c97d60" strokeWidth="2" strokeLinecap="round"/>
        <line x1="-7" y1="0" x2="7" y2="0" stroke="#c97d60" strokeWidth="2" strokeLinecap="round"/>
      </g>

      {/* Dot accent — bottom right */}
      <circle cx="248" cy="220" r="5" fill="#c97d60" opacity="0.35"/>
      <circle cx="262" cy="220" r="3" fill="#c97d60" opacity="0.2"/>
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