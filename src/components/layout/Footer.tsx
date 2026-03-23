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
            Especialista en medicina estética avanzada, comprometida con
            resultados armoniosos y seguros.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Navegación
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            <a
              href="#"
              className="text-sm text-zinc-600 no-underline transition-colors hover:text-[#c1a05f]"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-zinc-600 no-underline transition-colors hover:text-[#c1a05f]"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-zinc-600 no-underline transition-colors hover:text-[#c1a05f]"
            >
              WhatsApp
            </a>
            <a
              href="#"
              className="text-sm text-zinc-600 no-underline transition-colors hover:text-[#c1a05f]"
            >
              Privacidad
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Dra. Natalia Andrade Requena. Todos los
            derechos reservados.
          </p>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c1a05f]">
            Cochabamba · Bolivia
          </span>
        </div>
      </div>
    </footer>
  );
}
