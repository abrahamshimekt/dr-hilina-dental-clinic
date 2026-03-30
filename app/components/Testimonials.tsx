const testimonials = [
  {
    name: "Bekala Yusuf",
    initials: "BY",
    rating: 5,
    date: "March 2026",
    text: "Thank you for the considerate and pain-free treatment. I was skeptical at first, but the experience exceeded my expectations. The staff made me feel comfortable from the moment I walked in.",
  },
  {
    name: "Aregahegn Bekele",
    initials: "AB",
    rating: 5,
    date: "February 2026",
    text: "Dr. Hilina is incredibly gentle and professional. She makes you feel completely at ease. I've never felt so relaxed at a dental visit — truly remarkable care.",
  },
  {
    name: "Ebrima Sowe",
    initials: "ES",
    rating: 5,
    date: "January 2026",
    text: "An exceptional dentist — highly competent, professional, and polite. The clinic is spotlessly clean and the whole team is kind and welcoming. I highly recommend.",
  },
  {
    name: "Hana Tesfaye",
    initials: "HT",
    rating: 5,
    date: "December 2025",
    text: "Best dental experience I've had in Addis. Modern equipment, gentle hands, and genuine concern for patient wellbeing. I won't go anywhere else.",
  },
  {
    name: "Dawit Girma",
    initials: "DG",
    rating: 5,
    date: "November 2025",
    text: "The root canal treatment was completely pain-free — I couldn't believe it! Dr. Hilina explained every step and kept me calm throughout. Outstanding professional.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#c9a96e" }}
            >
              Patient Reviews
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
          >
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="font-bold text-xl" style={{ color: "#26414c" }}>4.9</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">62 verified reviews</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.name}
              className="rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: "#f8fafc",
                border: "1px solid rgba(38,65,76,0.08)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-serif leading-none mb-4 opacity-30"
                style={{ color: "#26414c" }}
              >
                &ldquo;
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "#26414c" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#26414c" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">{t.date}</div>
                </div>
                <div className="ml-auto text-yellow-400 text-sm">
                  {"⭐".repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom two reviews */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((t) => (
            <div
              key={t.name}
              className="rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: "#f8fafc",
                border: "1px solid rgba(38,65,76,0.08)",
              }}
            >
              <div
                className="text-4xl font-serif leading-none mb-4 opacity-30"
                style={{ color: "#26414c" }}
              >
                &ldquo;
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "#26414c" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#26414c" }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">{t.date}</div>
                </div>
                <div className="ml-auto text-yellow-400 text-sm">
                  {"⭐".repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
            Read all 62+ reviews on Google Maps
          </p>
        </div>
      </div>
    </section>
  );
}
