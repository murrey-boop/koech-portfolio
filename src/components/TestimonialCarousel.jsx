import { useState } from "react";
import { testimonials } from "../data/testimonials";

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section style={{ padding: "clamp(64px,8vw,96px) 24px", background: "rgba(244,217,208,0.18)" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 12px" }}>
          Client Love
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", color: "var(--color-ink)", margin: "0 0 48px" }}>
          What clients say
        </h2>

        <div style={{ background: "var(--bg-card)", borderRadius: 20, padding: "clamp(32px,5vw,52px) clamp(24px,5vw,52px)", boxShadow: "0 4px 40px rgba(0,0,0,0.07)", border: "1px solid var(--border-color)", position: "relative" }}>
          {/* Quote mark */}
          <div style={{ fontFamily: "Georgia,serif", fontSize: "5rem", color: "#f4d9d0", lineHeight: 0.8, marginBottom: 16, userSelect: "none" }}>"</div>

          <p style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)", color: "var(--color-ink-soft)", fontStyle: "italic", lineHeight: 1.85, margin: "0 0 32px" }}>
            {t.text}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <img src={t.image} alt={t.name}
              style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: "2px solid #f4d9d0" }}
              onError={e => { e.target.style.display = "none"; }}
            />
            <div style={{ textAlign: "left" }}>
              <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, color: "var(--color-ink)", margin: 0, fontSize: "1.05rem" }}>{t.name}</p>
              <p style={{ color: "#c97d60", fontSize: "0.82rem", margin: 0, fontWeight: 500 }}>{t.role}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Testimonial ${i + 1}`} style={{
              width: i === idx ? 28 : 9, height: 9, borderRadius: 999, border: "none",
              cursor: "pointer", background: i === idx ? "#c97d60" : "#e7c5b8",
              transition: "all 0.3s", padding: 0,
            }} />
          ))}
        </div>

        {/* Prev / Next */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 16 }}>
          <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
            style={{ padding: "8px 20px", borderRadius: 999, border: "1px solid var(--border-color)", background: "transparent", color: "var(--color-ink-soft)", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, fontSize: "0.9rem", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c97d60"; e.currentTarget.style.color = "#c97d60"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--color-ink-soft)"; }}
          >← Prev</button>
          <button onClick={() => setIdx(i => (i + 1) % testimonials.length)}
            style={{ padding: "8px 20px", borderRadius: 999, border: "none", background: "#c97d60", color: "#fff", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, fontSize: "0.9rem", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#a8593f"}
            onMouseLeave={e => e.currentTarget.style.background = "#c97d60"}
          >Next →</button>
        </div>
      </div>
    </section>
  );
}
