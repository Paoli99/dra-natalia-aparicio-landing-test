import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavBody,
} from "@/components/ui/resizable-navbar";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { name: "Dirección", link: "#address" },
  { name: "Contacto", link: "#contact" },
  { name: "Sobre mi ", link: "#aboutme" },
];

const Logo = () => (
  <a href="#" className="relative z-20 mr-4 flex items-center no-underline">
    <img
      src="/horizontal_logo.png"
      alt="Dra. Natalia Andrade Requena"
      className="h-20 w-auto object-contain"
    />
  </a>
);

export function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (target: string) => {
    const el = document.querySelector(target);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.25;

    gsap.to(window, {
      scrollTo: { y },
      duration: 1.8,
      ease: "expo.inOut",
    });
  };

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <Logo />

          <div className="flex gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.link);
                }}
                className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-[#c1a05f]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <NavbarButton
              href="https://agenda.saluta360.com/6565114f-1b71-4e1c-9833-b51b042d30bb"
              variant="primary"
              className="rounded-full bg-[#c1a05f] px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg hover:opacity-90"
            >
              Agenda tu cita
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

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    handleScroll(item.link);
                  }}
                  className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-700 hover:text-[#c1a05f]"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex w-full flex-col pt-4">
              <NavbarButton
                href="https://agenda.saluta360.com/6565114f-1b71-4e1c-9833-b51b042d30bb"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full rounded-full bg-[#c1a05f] py-3 text-center text-[11px] font-bold uppercase tracking-widest text-white"
              >
                Agenda tu cita
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}