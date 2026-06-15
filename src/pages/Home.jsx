import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CTA from "../components/CTA";

import { services } from "../data/services";
import { portfolio } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project) => (
              <PortfolioCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <CTA />
    </>
  );
}