import { Facebook, Instagram } from "lucide-react";
import { TikTokIcon } from "../ui/icons/TiktokIcon";

const navItems = [
  { name: "Dirección", link: "#address" },
  { name: "Contacto", link: "#contact" },
  { name: "Sobre mi", link: "#aboutme" },
];

const SOCIALS = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/dra.nataliaandrader/",
  },
  {
    icon: Facebook,
    url: "https://facebook.com/dra.nataliaandrader",
  },
  {
    icon: TikTokIcon,
    url: "https://tiktok.com/@dra.nataliaandrader",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 bg-zinc-50 px-12 py-20">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-12 md:flex-row md:items-start md:justify-between">
        
        <div className="flex flex-col gap-6">
          <img
            src="/horizontal_logo.png"
            alt="Dra. Natalia Andrade Requena"
            className="h-16 w-auto object-contain object-left"
          />

          <p className="max-w-xs text-sm font-light leading-relaxed text-zinc-500">
            Especialista en medicina estética avanzada, comprometida con resultados armoniosos y seguros.
          </p>

          <div className="flex items-center gap-4">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;

              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-[#c1a05f]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Navegación
          </p>

          <div className="flex flex-col gap-3">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-sm text-zinc-600 transition-colors hover:text-[#c1a05f]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Dra. Natalia Andrade Requena. Todos los derechos reservados.
          </p>

          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c1a05f]">
            Cochabamba · Bolivia
          </span>
        </div>
      </div>
    </footer>
  );
}