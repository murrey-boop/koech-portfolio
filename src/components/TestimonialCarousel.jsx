import { testimonials }
from "../data/testimonials";

export default function TestimonialCarousel() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Testimonials
        </h2>

        <div className="grid gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="p-6 border rounded-xl"
            >
              <p>{item.text}</p>

              <h4 className="mt-4 font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}