import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Unhinged Words</title>
        <meta name="description" content="Get in touch with Unhinged Words for SEO content writing, blog writing, website copywriting, editing, and proofreading projects." />
        <meta property="og:title" content="Contact — Unhinged Words" />
        <meta property="og:description" content="Get in touch with Unhinged Words for your next content project." />
        <meta property="og:image" content="https://www.unhingedwords.com/og-image.png" />
        <meta property="og:url" content="https://www.unhingedwords.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.unhingedwords.com/contact" />
      </Helmet>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(48px,8vw,80px) 24px" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,6vw,80px)", alignItems: "start" }}>

          <div>
            <p style={{ color: "#c97d60", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 16px" }}>Get in Touch</p>
            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "var(--color-ink)", margin: "0 0 20px", lineHeight: 1.2 }}>
              Let's work together
            </h1>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: 40, fontSize: "1rem" }}>
              Whether you need SEO content, blog posts, website copy, or a full editing pass, send the brief and I'll respond within 24 hours.
            </p>

            {[
              { icon: "📧", label: "Email", value: "josphat@koechwords.com" },
              { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
              { icon: "⏰", label: "Response time", value: "Within 24 hours" },
              { icon: "🌍", label: "Availability", value: "Remote projects worldwide" },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f4d9d0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--color-ink-soft)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                  <p style={{ margin: 0, color: "var(--color-ink)", fontWeight: 500 }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: 20, padding: "clamp(24px,4vw,40px)" }}>
            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
