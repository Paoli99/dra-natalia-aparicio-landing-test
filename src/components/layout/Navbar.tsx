import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
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

const Logo = () => (
  <a
    href="#"
    className="relative z-20 mr-4 flex flex-col leading-none no-underline"
  >
    <span className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-[#c1a05f]">
      Dra.
    </span>
    <span className="text-[1.05rem] font-extrabold uppercase tracking-tight text-zinc-900 leading-tight">
      Natalia Andrade Requena
    </span>
  </a>
);

export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <Logo />
          <NavItems
            items={navItems}
            className="[&_a]:text-[11px] [&_a]:font-bold [&_a]:uppercase [&_a]:tracking-[0.3em] [&_a]:text-zinc-500 [&_a:hover]:text-[#c1a05f]"
          />
          <div className="flex items-center">
            <NavbarButton
              href="#contacto"
              variant="primary"
              className="rounded-full bg-[#c1a05f] px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg hover:opacity-90 hover:translate-y-0"
            >
              Agendar Cita
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-700 hover:text-[#c1a05f] transition-colors no-underline"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col pt-2">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full rounded-full bg-[#c1a05f] py-3 text-center text-[11px] font-bold uppercase tracking-widest text-white"
              >
                Agendar Cita
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
