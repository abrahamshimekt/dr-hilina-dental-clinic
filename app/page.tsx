import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import DoctorHighlight from "./components/DoctorHighlight";
import Location from "./components/Location";
import BookAppointment from "./components/BookAppointment";
import Footer from "./components/Footer";
import StickyCallButton from "./components/StickyCallButton";

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <DoctorHighlight />
      <Location />
      <BookAppointment />
      <Footer />
      <StickyCallButton />
    </main>
  );
}
