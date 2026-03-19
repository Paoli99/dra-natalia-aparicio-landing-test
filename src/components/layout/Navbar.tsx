import { useState } from "react";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Especialidades", link: "#especialidades" },
  { name: "Filosofía", link: "#filosofia" },
  { name: "Contacto", link: "#contacto" },
];

export default function AppNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="!top-0 !sticky">
      {/* Desktop */}
      <NavBody className="!rounded-none !max-w-none !w-full !min-w-0 !px-12 !py-5 border-b border-zinc-100">
        <a href="#" className="relative z-20 flex flex-col leading-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c1a05f]">
            Dra.
          </span>
          <span className="text-xl font-extrabold uppercase tracking-tighter text-zinc-900 leading-tight">
            Natalia Andrade Requena
          </span>
        </a>

        <div className="flex items-center gap-10">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-200 ${
                idx === 0
                  ? "text-zinc-900 border-b border-[#c1a05f] pb-0.5"
                  : "text-zinc-500 hover:text-[#c1a05f]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="relative z-20 rounded-full bg-[#c1a05f] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-200 hover:scale-95 hover:opacity-90"
        >
          Agendar Cita
        </a>
      </NavBody>

      {/* Mobile */}
      <MobileNav
        visible={isMobileMenuOpen}
        className="!rounded-none !w-full !max-w-none !px-6 !py-4 border-b border-zinc-100"
      >
        <MobileNavHeader>
          <a href="#" className="flex flex-col leading-none">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c1a05f]">
              Dra.
            </span>
            <span className="text-base font-extrabold uppercase tracking-tighter text-zinc-900">
              Natalia Andrade
            </span>
          </a>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-800 hover:text-[#c1a05f] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 w-full rounded-full bg-[#c1a05f] px-7 py-3 text-center text-[11px] font-bold uppercase tracking-widest text-white"
          >
            Agendar Cita
          </a>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
