export default function About() {
  const highlights = [
    {
      icon: "👩‍⚕️",
      title: "Highly Skilled Dentist",
      desc: "Years of expertise delivering exceptional dental outcomes with precision and care.",
    },
    {
      icon: "💊",
      title: "Gentle & Pain-Free",
      desc: "Advanced techniques ensure every procedure is as comfortable as possible.",
    },
    {
      icon: "💛",
      title: "Personalized Care",
      desc: "Every treatment plan is tailored specifically to each patient's unique needs.",
    },
    {
      icon: "🏡",
      title: "Warm Environment",
      desc: "A welcoming, calming clinic atmosphere that puts patients at complete ease.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative">
            <div
              className="w-full h-96 rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #26414c 0%, #3a5f6f 100%)",
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
                style={{ background: "#c9a96e", transform: "translate(30%, -30%)" }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-20"
                style={{ background: "#c9a96e", transform: "translate(-20%, 20%)" }}
              />

              <div className="relative z-10 text-center px-8">
                <div className="text-7xl mb-4">🏥</div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Dr. Hilina Specialty
                </h3>
                <p className="text-white/70 text-sm">Dental Clinic</p>
                <div className="mt-4 flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-white text-sm">4.9 · 62 Reviews</span>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border"
              style={{ borderColor: "rgba(38,65,76,0.1)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(38,65,76,0.08)" }}
                >
                  🦷
                </div>
                <div>
                  <div className="font-bold text-lg" style={{ color: "#26414c" }}>
                    Bole Atlas
                  </div>
                  <div className="text-xs text-gray-500">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div
                className="w-8 h-0.5 rounded-full"
                style={{ background: "#c9a96e" }}
              />
              <span
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: "#c9a96e" }}
              >
                About Us
              </span>
            </div>

            <h2
              className="text-4xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#26414c",
              }}
            >
              About Dr. Hilina Specialty Dental Clinic
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Hilina Specialty Dental Clinic is known for providing exceptional dental care
              with a strong focus on patient comfort and satisfaction. Patients trust the clinic
              for its gentle approach, professionalism, and high standards of treatment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Located in the heart of Bole, Addis Ababa, the clinic serves patients seeking
              expert dental care in a warm, modern environment where every detail is considered
              for the ultimate patient experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-2xl transition-all duration-200 hover:shadow-md"
                  style={{ background: "#f8fafc", border: "1px solid rgba(38,65,76,0.08)" }}
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: "#26414c" }}>
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
