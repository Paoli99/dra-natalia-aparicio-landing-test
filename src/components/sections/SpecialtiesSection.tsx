import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "motion/react";
import { useState } from "react";
import treatmentsData from "../../../treatments.json";
import { Button } from "../ui/button";

type TreatmentItem = {
  title: string;
  description: string;
  sections?: {
    title: string;
    items: string[];
  }[];
};

type TreatmentCategory = {
  id: string;
  number: string;
  title: string;
  image: string;
  offset: boolean;
  items: TreatmentItem[];
};

export default function SpecialtiesSection() {
  const treatments = treatmentsData as TreatmentCategory[];

  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = activeCategory?.items[currentIndex];

  return (
    <section id="especialidades" className="py-10 md:mb-20">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <span className="self-end border-b-2 border-[#c1a05f] pb-1 text-[11px] font-bold uppercase tracking-widest text-zinc-900">
            Explorar Servicios
          </span>
        </div>

        <div className="hidden md:flex gap-4 items-start">
          {treatments.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => {
                setActiveCategory(item);
                setCurrentIndex(0);
              }}
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
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover md:grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
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

        <div className="flex flex-col gap-4 md:hidden">
          {treatments.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => {
                setActiveCategory(item);
                setCurrentIndex(0);
              }}
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

      <Dialog open={!!activeCategory} onOpenChange={(open) => !open && setActiveCategory(null)}>
        <DialogContent className="overflow-hidden rounded-2xl border border-zinc-100 p-0 shadow-2xl w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col min-h-[80vh] max-h-[80vh]">
          {activeCategory && currentItem && (
            <>
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <p className="text-[10px] uppercase tracking-widest text-white/70">
                    {activeCategory.number}
                  </p>
                  <h3 className="text-3xl font-extrabold uppercase text-white">
                    {activeCategory.title}
                  </h3>
                </div>
              </div>

              <div key={currentIndex} className="px-8 pt-8 flex-1 overflow-y-auto min-h-0 space-y-6">
                <h4 className="text-xl font-bold">{currentItem.title}</h4>

                <p className="text-zinc-600 font-light">{currentItem.description}</p>

                {currentItem.sections && currentItem.sections.length > 0 && (
                  <div className="space-y-4">
                    {currentItem.sections.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-[#c1a05f] font-bold">
                          {section.title}
                        </p>
                        <ul className="text-sm text-zinc-500 space-y-1">
                          {section.items.map((sectionItem) => (
                            <li key={sectionItem}>• {sectionItem}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="shrink-0 px-8 pb-8 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <button
                    className="text-zinc-400 hover:text-zinc-700 transition-colors text-xl px-2"
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === 0 ? activeCategory.items.length - 1 : prev - 1
                      )
                    }
                  >
                    ←
                  </button>

                  <span className="text-xs text-zinc-400">
                    {currentIndex + 1} / {activeCategory.items.length}
                  </span>

                  <button
                    className="text-zinc-400 hover:text-zinc-700 transition-colors text-xl px-2"
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === activeCategory.items.length - 1 ? 0 : prev + 1
                      )
                    }
                  >
                    →
                  </button>
                </div>

                <Button className="w-full rounded-full bg-[#c1a05f] text-white hover:bg-[#a8874a]">
                  Agendar Consulta
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}