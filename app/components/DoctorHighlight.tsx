const specialties = [
  "General & Preventive Dentistry",
  "Cosmetic & Aesthetic Procedures",
  "Root Canal & Endodontics",
  "Dental Crowns & Restorations",
  "Patient-Centered Gentle Care",
];

export default function DoctorHighlight() {
  return (
    <section
      className="py-24"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
              <span
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: "#c9a96e" }}
              >
                Meet Your Dentist
              </span>
            </div>

            <h2
              className="text-4xl font-bold mb-2 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
            >
              Dr. Hilina
            </h2>
            <p
              className="text-lg mb-6"
              style={{ color: "#c9a96e", fontFamily: "'Playfair Display', serif" }}
            >
              Specialty Dental Physician
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Hilina is a highly dedicated dental professional committed to transforming
              the way patients experience dental care. With deep expertise and a compassionate
              approach, she has built a reputation for delivering truly pain-free, high-quality
              dental treatments.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Her philosophy centers on treating each patient as an individual — taking the time
              to listen, explain, and create a comfortable, anxiety-free environment. Patients
              consistently describe their experience as transformative, often overcoming years
              of dental fear through Dr. Hilina&apos;s gentle and patient-centered approach.
            </p>

            {/* Specialties */}
            <div className="mb-8">
              <h4 className="font-semibold text-sm mb-4" style={{ color: "#26414c" }}>
                Areas of Expertise
              </h4>
              <div className="flex flex-col gap-2">
                {specialties.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                      style={{ background: "#26414c" }}
                    >
                      ✓
                    </div>
                    <span className="text-gray-600 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 shadow-lg text-sm"
              style={{ background: "#26414c" }}
            >
              Book with Dr. Hilina
              <span>→</span>
            </a>
          </div>

          {/* Doctor visual card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main portrait card */}
              <div
                className="w-72 h-80 rounded-3xl flex flex-col items-center justify-center overflow-hidden relative shadow-2xl"
                style={{
                  background: "linear-gradient(145deg, #26414c 0%, #3a5f6f 60%, #4a7a8a 100%)",
                }}
              >
                {/* Decorative circles */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                  style={{ background: "#c9a96e", transform: "translate(30%, -30%)" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-20"
                  style={{ background: "#c9a96e", transform: "translate(-20%, 20%)" }}
                />

                {/* Portrait placeholder */}
                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-3">👩‍⚕️</div>
                  <div
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Dr. Hilina
                  </div>
                  <div
                    className="text-xs px-3 py-1 rounded-full text-white/80"
                    style={{ background: "rgba(201,169,110,0.3)" }}
                  >
                    Dental Specialist
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl text-white"
                style={{ background: "#c9a96e" }}
              >
                <div className="font-bold text-lg leading-none">⭐</div>
                <div className="font-bold text-sm leading-none">4.9</div>
                <div className="text-xs leading-none opacity-80">Rating</div>
              </div>

              {/* Quote card */}
              <div
                className="absolute -left-12 bottom-8 bg-white rounded-2xl p-4 shadow-xl max-w-44"
                style={{ border: "1px solid rgba(38,65,76,0.08)" }}
              >
                <div
                  className="text-2xl mb-1 opacity-30"
                  style={{ color: "#26414c" }}
                >
                  &ldquo;
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  Your comfort is always my priority.
                </p>
                <p
                  className="text-xs font-semibold mt-2"
                  style={{ color: "#26414c" }}
                >
                  — Dr. Hilina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
