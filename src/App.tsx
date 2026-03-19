import { NavbarDemo } from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "./components/layout/Footer";
import SpecialtiesSection from "./components/sections/SpecialtiesSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarDemo />
      <HeroSection />
      <SpecialtiesSection />
      <Footer />
    </main>
  );
}

export default App;
