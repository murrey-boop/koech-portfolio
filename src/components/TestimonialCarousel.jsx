import { useState } from "react";
import { testimonials } from "../data/testimonials";

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section style={{padding:"80px 24px", background:"#f4d9d0"}}>
      <div style={{maxWidth:700, margin:"0 auto", textAlign:"center"}}>
        <h2 style={{fontFamily:"'Playfair Display',Georgia,serif", fontSize:"clamp(1.8rem,3vw,2.8rem)", marginBottom:48, color:"#271d1e"}}>
          What clients say
        </h2>

        <div style={{background:"#fffdf9", borderRadius:20, padding:"48px 40px", boxShadow:"0 4px 32px rgba(0,0,0,0.07)"}}>
          <p style={{fontSize:"1.15rem", color:"#46373a", fontStyle:"italic", lineHeight:1.8, marginBottom:28}}>
            "{t.text}"
          </p>
          <p style={{fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#271d1e", fontSize:"1.1rem"}}>
            — {t.name}
          </p>
        </div>

        <div style={{display:"flex", justifyContent:"center", gap:10, marginTop:28}}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 28 : 10, height:10,
              borderRadius:999, border:"none", cursor:"pointer",
              background: i === idx ? "#c97d60" : "#e7c5b8",
              transition:"all 0.3s"
            }} />
          ))}
        </div>

        <div style={{display:"flex", justifyContent:"center", gap:12, marginTop:16}}>
          <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
            style={{padding:"8px 20px", borderRadius:999, border:"1px solid #c97d60", background:"transparent", color:"#a8593f", cursor:"pointer", fontWeight:600}}>
            ← Prev
          </button>
          <button onClick={() => setIdx(i => (i + 1) % testimonials.length)}
            style={{padding:"8px 20px", borderRadius:999, border:"none", background:"#c97d60", color:"#fff", cursor:"pointer", fontWeight:600}}>
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
