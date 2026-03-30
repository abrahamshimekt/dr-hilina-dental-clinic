const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    desc: "Comprehensive oral health care covering exams, cleanings, fillings, and preventive treatments to keep your smile healthy.",
    color: "#e8f4f4",
  },
  {
    icon: "👑",
    title: "Dental Crowns",
    desc: "Custom-crafted crowns that restore damaged teeth to their natural shape, strength, and appearance with precision fit.",
    color: "#fdf6ec",
  },
  {
    icon: "✨",
    title: "Teeth Cleaning",
    desc: "Professional deep cleaning to remove plaque, tartar, and stains — leaving your teeth brilliantly clean and fresh.",
    color: "#f0f7ff",
  },
  {
    icon: "🔬",
    title: "Root Canal Treatment",
    desc: "Gentle, effective root canal therapy to eliminate pain and save infected teeth using modern, minimally invasive techniques.",
    color: "#fff0f6",
  },
  {
    icon: "💎",
    title: "Cosmetic Dentistry",
    desc: "Smile transformation treatments including whitening, veneers, and bonding to give you the confidence of a perfect smile.",
    color: "#f3f0ff",
  },
  {
    icon: "🩺",
    title: "Tooth Extraction",
    desc: "Safe and comfortable tooth removal procedures performed with care to minimize discomfort and ensure rapid healing.",
    color: "#f0fff4",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#c9a96e" }}
            >
              Our Services
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
          >
            Comprehensive Dental Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From routine checkups to advanced cosmetic procedures, we provide the full
            spectrum of dental care with gentleness and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group bg-white rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{ border: "1px solid rgba(38,65,76,0.08)" }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 service-icon"
                style={{ background: service.color }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="font-bold text-lg mb-3"
                style={{ color: "#26414c" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>

              {/* Learn more */}
              <div
                className="mt-5 flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
                style={{ color: "#26414c" }}
              >
                Learn more
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ background: "#26414c" }}
          >
            Book a Service
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
