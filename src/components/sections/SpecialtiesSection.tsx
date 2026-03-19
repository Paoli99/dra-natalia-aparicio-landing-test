import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const specialties = [
  {
    number: "01",
    title: "Faciales",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    offset: false,
  },
  {
    number: "02",
    title: "Corporales",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    offset: true,
  },
  {
    number: "03",
    title: "Capilares",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    offset: false,
  },
  {
    number: "04",
    title: "Nutrición",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    offset: true,
  },
];

export default function SpecialtiesSection() {
  const [active, setActive] = useState<(typeof specialties)[0] | null>(null);

  return (
    <section id="especialidades" className="bg-zinc-50 py-32">
      <div className="mx-auto w-full max-w-[1920px] px-12">
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-[#c1a05f]">
              Tratamientos
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-[#c1a05f] md:text-7xl">
              Especialidades
            </h2>
            <p className="mt-4 max-w-xl text-lg font-light text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <span className="self-end border-b-2 border-[#c1a05f] pb-1 text-[11px] font-bold uppercase tracking-widest text-zinc-900">
            Explorar Servicios
          </span>
        </div>

        <div className="hidden md:flex gap-4 items-start">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              onClick={() => setActive(item)}
              className={`group relative flex-1 cursor-pointer overflow-hidden ${item.offset ? "mt-16" : "mt-0"}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.12,
              }}
            >
              <div className="relative aspect-[3/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover md:grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-white/60">
                    {item.number}
                  </p>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-transparent transition-all duration-500 group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              onClick={() => setActive(item)}
              className="group relative cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-white/60">
                    {item.number}
                  </p>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="overflow-hidden rounded-2xl border border-zinc-100 p-0 shadow-2xl max-w-xl">
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          {active && (
            <>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <p className="text-[10px] uppercase tracking-widest text-white/70">
                    {active.number}
                  </p>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                    {active.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-base font-light leading-relaxed text-zinc-600">
                  {active.longDescription}
                </p>
                <button
                  className="mt-8 rounded-full bg-[#c1a05f] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-200 hover:scale-95 hover:opacity-90"
                  onClick={() => setActive(null)}
                >
                  Agendar Consulta
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
