import { services } from "../data/services";

export default function Services() {
  return (
    <section className="container">
      <h1>Services</h1>

      {services.map((service) => (
        <div key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}