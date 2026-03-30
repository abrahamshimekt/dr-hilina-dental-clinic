"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #26414c 0%, #1a2e36 50%, #0f1e23 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-white/90 text-sm font-medium">
                4.9 rating · 62 reviews
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gentle, Professional
              <span
                className="block"
                style={{ color: "#c9a96e" }}
              >
                Dental Care
              </span>
              You Can Trust
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
              Experience high-quality, pain-free dental treatment with expert care in Addis Ababa.
              Your smile deserves the best.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-lg"
                style={{ background: "#c9a96e" }}
              >
                <span>📅</span>
                Book Appointment
              </a>
              <a
                href="tel:0910151739"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-white/40 text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60"
              >
                <span>📞</span>
                Call Now
              </a>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "Pain-Free Treatment",
                "Expert Care",
                "Welcoming Environment",
              ].map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#c9a96e" }}
                  />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Right side — visual card */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="relative">
              {/* Main card */}
              <div
                className="w-80 h-96 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-2xl animate-float"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="text-8xl mb-4">🦷</div>
                <div
                  className="text-6xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
                >
                  😊
                </div>
                <p
                  className="text-white/80 text-sm text-center px-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "Your comfort is our priority"
                </p>
              </div>

              {/* Floating stats cards */}
              <div
                className="absolute -left-12 top-8 bg-white rounded-2xl px-4 py-3 shadow-xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl font-bold" style={{ color: "#26414c" }}>4.9</div>
                <div className="text-xs text-gray-500">Patient Rating</div>
                <div className="text-yellow-400 text-xs mt-0.5">⭐⭐⭐⭐⭐</div>
              </div>

              <div
                className="absolute -right-10 bottom-16 bg-white rounded-2xl px-4 py-3 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-2xl font-bold" style={{ color: "#26414c" }}>62+</div>
                <div className="text-xs text-gray-500">Happy Patients</div>
              </div>

              <div
                className="absolute -left-8 bottom-12 rounded-2xl px-4 py-3 shadow-xl animate-float"
                style={{
                  animationDelay: "1.5s",
                  background: "#c9a96e",
                }}
              >
                <div className="text-white text-xs font-semibold">Pain-Free</div>
                <div className="text-white/80 text-xs">Treatment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
