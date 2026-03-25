import { NavbarDemo } from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "./components/layout/Footer";
import AboutSection from "./components/sections/AboutMeSection";
import ContactSection from "./components/sections/ContactSection";
import CtaSection from "./components/sections/CtaSection";
import ExclusiveProductsSection from "./components/sections/ExclusiveProductsSection";
import FAQSection from "./components/sections/FAQSection";
import FollowUsSection from "./components/sections/FollowUsSection";
import OurSpaceSection from "./components/sections/OurSpaceSection";
import SpecialtiesSection from "./components/sections/SpecialtiesSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarDemo />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <OurSpaceSection />
      <ExclusiveProductsSection />
      <FollowUsSection />
      <ContactSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

export default App;
