import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";
import { services } from "../data/services";
import { portfolio } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Josphat Koech — Freelance Writer & Editor</title>
        <meta name="description" content="Professional content writing, SEO articles, blog posts and copywriting by Josphat Koech. Based in Nairobi, available worldwide." />
        <meta property="og:title" content="Josphat Koech — Freelance Writer & Editor" />
        <meta property="og:description" content="Content writing and editing with a creative spark." />
        <meta property="og:image" content="https://josphat-koechwords.vercel.app/og-image.png" />
        <meta property="og:url" content="https://josphat-koechwords.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />

      {/* Services */}
      <section style={{ padding: "clamp(48px,8vw,96px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,56px)" }}>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "var(--color-ink)", margin: "0 0 12px" }}>
              Bring in hands-on help for your words
            </h2>
            <p style={{ color: "var(--color-ink-soft)", maxWidth: 520, margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>
              From day-to-day writing to bigger-picture planning, my job is to make content one less thing to worry about.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ padding: "clamp(48px,8vw,96px) 24px", background: "rgba(244,217,208,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,56px)" }}>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "var(--color-ink)", margin: "0 0 12px" }}>
              Featured Work
            </h2>
            <p style={{ color: "var(--color-ink-soft)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
              A sample of projects across industries — each shaped around the client's voice and goals.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {portfolio.map(p => <PortfolioCard key={p.title} project={p} />)}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <CTA />
    </>
  );
}
