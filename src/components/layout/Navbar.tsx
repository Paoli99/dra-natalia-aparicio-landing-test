import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const navItems = [
  { name: "Dirección", link: "#address" },
  { name: "Contacto", link: "#contact" },
  { name: "Sobre mi ", link: "#aboutme" },
];

const Logo = () => (
 <a
    href="#"
    className="relative z-20 mr-4 flex items-center no-underline"
  >
    <img
      src="/horizontal_logo.png"
      alt="Dra. Natalia Andrade Requena"
      className="h-20 w-auto object-contain"
    />
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
              href="https://agenda.saluta360.com/6565114f-1b71-4e1c-9833-b51b042d30bb"
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
              href="https://agenda.saluta360.com/6565114f-1b71-4e1c-9833-b51b042d30bb"
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
