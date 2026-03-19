import { NavbarDemo } from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "./components/layout/Footer";
import SpecialtiesSection from "./components/sections/SpecialtiesSection";
import FollowUsSection from "./components/sections/FollowUsSection";
import ContactSection from "./components/sections/ContactSection";
import CtaSection from "./components/sections/CtaSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarDemo />
      <HeroSection />
      <SpecialtiesSection />
      <FollowUsSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

export default App;
