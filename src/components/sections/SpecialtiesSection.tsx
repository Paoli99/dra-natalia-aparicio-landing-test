import { useEffect, useRef, useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    number: "01",
    title: "Faciales",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    number: "02",
    title: "Corporales",
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
  },
];

export default function SpecialtiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [active, setActive] = useState<(typeof specialties)[0] | null>(null);
  const id = useId();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { opacity: 0, y: 80, scale: 0.95 });
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="especialidades" ref={sectionRef} className="bg-zinc-50 py-32">
      <div className="mx-auto w-full md:max-w-[1920px] px-12">
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-[#c1a05f]">
              Tratamientos
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-zinc-900 md:text-7xl">
              <span className="text-[#c1a05f]">Especialidades</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg font-light text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-[#c1a05f] pb-1 self-end">
            Explorar Servicios
          </span>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              layoutId={`card-${item.title}-${id}`}
              onClick={() => setActive(item)}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer overflow-hidden rounded-none"
              style={{
                flexBasis: "calc(25% - 1.5rem)",
                minWidth: "200px",
                flexGrow: 1,
              }}
            >
              <div className="relative aspect-[3/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-white/70">
                    {item.number}
                  </p>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/0 transition-all duration-500 group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
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
                <Button
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 h-8 w-8 rounded-full border-none bg-white/20 p-0 text-white shadow-none backdrop-blur-sm hover:bg-white/40"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-8">
                <p className="text-base font-light leading-relaxed text-zinc-600">
                  {active.longDescription}
                </p>
                <Button
                  className="mt-8 rounded-full bg-[#c1a05f] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-200 hover:scale-95 hover:opacity-90"
                  onClick={() => setActive(null)}
                >
                  Agendar Consulta
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
