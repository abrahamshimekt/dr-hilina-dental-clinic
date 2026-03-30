const reasons = [
  {
    icon: "⭐",
    stat: "4.9",
    label: "Patient Rating",
    desc: "Consistently rated 4.9 stars by 62+ patients who trust and recommend us.",
  },
  {
    icon: "💊",
    stat: "100%",
    label: "Pain-Free Approach",
    desc: "Every treatment is performed with advanced techniques designed to minimize discomfort.",
  },
  {
    icon: "👩‍⚕️",
    stat: "#1",
    label: "Skilled Professional",
    desc: "Dr. Hilina brings years of specialized dental expertise to every patient interaction.",
  },
  {
    icon: "🤝",
    stat: "62+",
    label: "Happy Patients",
    desc: "A growing family of satisfied patients who return and refer friends and family.",
  },
  {
    icon: "🏥",
    stat: "100%",
    label: "Clean & Comfortable",
    desc: "Pristine clinic environment maintained to the highest hygiene and safety standards.",
  },
  {
    icon: "⏰",
    stat: "Same",
    label: "Day Appointments",
    desc: "Flexible scheduling to fit your busy lifestyle — we value your time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #26414c 0%, #1a2e36 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
            transform: "translate(40%, -40%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
            transform: "translate(-40%, 40%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#c9a96e" }}
            >
              Why Choose Us
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
          </div>
          <h2
            className="text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Clinic Patients Trust Most
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            We combine clinical excellence with genuine compassion to deliver
            an unmatched dental experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(201,169,110,0.2)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-2xl font-bold mb-0.5"
                    style={{ color: "#c9a96e" }}
                  >
                    {item.stat}
                  </div>
                  <div className="font-semibold text-white text-sm mb-2">
                    {item.label}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
