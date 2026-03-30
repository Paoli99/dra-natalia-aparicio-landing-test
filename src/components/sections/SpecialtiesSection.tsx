import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import treatmentsData from "../../../treatments.json";

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
  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeCategory = treatments.find((t) => t.id === activeId) ?? null;
  const currentItem = activeCategory?.items[currentIndex];

  function selectCard(item: TreatmentCategory) {
    if (activeId === item.id) {
      setActiveId(null);
      setCurrentIndex(0);
      return;
    }
    setActiveId(item.id);
    setCurrentIndex(0);
    setDirection(0);
  }

  function changePage(dir: number) {
    if (!activeCategory) return;
    const total = activeCategory.items.length;
    setDirection(dir);
    setCurrentIndex((prev) => (prev + dir + total) % total);
  }

  function goToPage(i: number) {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  }

  const pageVariants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

const sections = currentItem?.sections ?? [];
const hasSections = sections.length > 0;
const firstSection = sections[0];
const secondSection = sections[1];
const restSections = sections.slice(2);

  return (
    <section id="especialidades" className="py-10 md:mb-20">
      <div className="mx-auto w-full max-w-[1920px] px-6 md:px-12">
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-[#c1a05f]">
              Tratamientos
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-none text-[#c1a05f] md:text-7xl">
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

        <div className="hidden md:flex gap-4 items-stretch h-[620px]">
          {treatments.map((item) => {
            const isSelected = activeId === item.id;
            const isHidden = activeId !== null && !isSelected;

            return (
              <motion.div
                key={item.id}
                className={`${item.offset ? "mt-8" : "mt-0"} overflow-hidden h-full`}
                animate={{
                  flex: isHidden ? 0 : isSelected ? "0 0 35%" : 1,
                  opacity: isHidden ? 0 : 1,
                }}
                transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div
                  onClick={() => !isSelected && selectCard(item)}
                  className={`group relative h-full overflow-hidden rounded-2xl ${
                    isSelected ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      isSelected
                        ? "scale-105 grayscale-0"
                        : "md:grayscale group-hover:scale-110 group-hover:grayscale-0"
                    }`}
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
            );
          })}

          <AnimatePresence>
            {activeCategory && currentItem && (
              <motion.div
                key={activeCategory.id}
                className="overflow-hidden h-full"
                initial={{ flex: 0, opacity: 0, x: 20 }}
                animate={{ flex: 1, opacity: 1, x: 0 }}
                exit={{ flex: 0, opacity: 0, x: 20 }}
                transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="flex flex-col h-full rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                  <CardContent className="flex flex-col h-full p-0">
                    <div className="shrink-0 flex items-center justify-between border-b border-zinc-100 px-6 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#c1a05f]">
                        {activeCategory.number} — {activeCategory.title}
                      </p>
                      <Button
                        onClick={() => {
                          setActiveId(null);
                          setCurrentIndex(0);
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 text-sm hover:bg-zinc-200 hover:text-zinc-900"
                      >
                        ✕
                      </Button>
                    </div>

                    <div className="relative flex-1 overflow-hidden min-h-0">
                      <AnimatePresence custom={direction} mode="popLayout">
                        <motion.div
                          key={currentIndex}
                          custom={direction}
                          variants={pageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute inset-0 overflow-y-auto px-10 py-10 md:px-14 md:py-12 space-y-8 md:space-y-10 bg-[#fdfbf7]"
                        >
                          <div className="space-y-6">
                            <div className="flex items-start justify-between gap-4">
                              <h4 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[0.95] text-zinc-900">
                                {currentItem.title.split(" ")[0]}{" "}
                                <span className="italic font-normal text-[#c1a05f] lowercase">
                                  {currentItem.title.split(" ").slice(1).join(" ")}
                                </span>
                              </h4>

                              <span className="shrink-0 text-xs text-zinc-400 mt-2">
                                {currentIndex + 1} / {activeCategory.items.length}
                              </span>
                            </div>

                            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                              {currentItem.description}
                            </p>

                            {hasSections && (
                              <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                  {firstSection && (
                                    <div className="space-y-4">
                                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-b pb-2">
                                        {firstSection.title}
                                      </p>
                                      <ul className="space-y-2 text-sm text-zinc-600">
                                        {firstSection.items.map((item) => (
                                          <li key={item} className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-[#c1a05f]" />
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {secondSection && (
                                    <div className="space-y-4">
                                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-b pb-2">
                                        {secondSection.title}
                                      </p>
                                      <ul className="space-y-2 text-sm text-zinc-600">
                                        {secondSection.items.map((item) => (
                                          <li key={item} className="flex items-center gap-2">
                                            <span className="text-[#c1a05f]">✦</span>
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>

                                {restSections.length > 0 && (
                                  <div className="space-y-6">
                                    {restSections.map((section) => (
                                      <div key={section.title} className="space-y-4">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-b pb-2">
                                          {section.title}
                                        </p>
                                        <ul className="space-y-2 text-sm text-zinc-600">
                                          {section.items.map((item) => (
                                            <li key={item} className="flex items-center gap-2">
                                              <span className="text-[#c1a05f]">✦</span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="shrink-0 border-t border-zinc-100 px-6 pb-5 pt-3 space-y-3">
                      <div className="relative flex items-center">
                        {currentIndex > 0 && (
                          <button
                            onClick={() => changePage(-1)}
                            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500"
                          >
                            ← Anterior
                          </button>
                        )}

                       <div className="absolute left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
                          {activeCategory.items.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => goToPage(i)}
                              className="h-1.5 rounded-full transition-all duration-300"
                              style={{
                                width: i === currentIndex ? 18 : 6,
                                background:
                                  i === currentIndex ? "#c1a05f" : "#d4d4d8",
                              }}
                            />
                          ))}
                        </div>
                        <div className="ml-auto">
                          <button
                            onClick={() => changePage(1)}
                            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500"
                          >
                            Siguiente →
                          </button>
                      </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {treatments.map((item, index) => {
            const isSelected = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.08,
                }}
              >
                <Card className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm ">
                  <CardContent className="p-0 ">
                    <div
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden "
                      onClick={() => selectCard(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-all duration-700 md:grayscale group-hover:scale-110 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="mb-1 text-[10px] uppercase tracking-widest text-white/60">
                          {item.number}
                        </p>
                        <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isSelected && currentItem && (
                        <motion.div
                          key="mobile-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.42,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <AnimatePresence custom={direction} mode="popLayout">
                            <motion.div
                              key={currentIndex}
                              custom={direction}
                              variants={pageVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{
                                duration: 0.28,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                              className="px-6 py-6 space-y-6 bg-[#fdfbf7] min-h-[75vh] max-h-[75vh]"
                            >
                              <div className="flex items-start justify-between gap-3 ">
                                <h4 className="text-2xl font-extrabold tracking-tight leading-[0.95] text-zinc-900">
                                  {currentItem.title.split(" ")[0]}{" "}
                                  <span className="italic font-normal text-[#c1a05f] lowercase">
                                    {currentItem.title.split(" ").slice(1).join(" ")}
                                  </span>
                                </h4>

                                <span className="shrink-0 text-xs text-zinc-400 mt-1">
                                  {currentIndex + 1} / {item.items.length}
                                </span>
                              </div>

                              <p className="text-sm text-zinc-600 leading-relaxed">
                                {currentItem.description}
                              </p>

                              {(currentItem.sections ?? []).length > 0 && (
                                <>
                                  <div className="grid grid-cols-1 gap-6">
                                    {(currentItem.sections ?? []).slice(0, 2).map((section) => (
                                      <div key={section.title} className="space-y-3">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-b pb-2">
                                          {section.title}
                                        </p>
                                        <ul className="space-y-2 text-sm text-zinc-600">
                                          {section.items.map((si) => (
                                            <li key={si} className="flex items-center gap-2">
                                              <span className="h-2 w-2 rounded-full bg-[#c1a05f]" />
                                              {si}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>

                                  {(currentItem.sections ?? []).length > 2 && (
                                    <div className="space-y-6">
                                      {(currentItem.sections ?? [])
                                        .slice(2)
                                        .map((section) => (
                                          <div key={section.title} className="space-y-3">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 border-b pb-2">
                                              {section.title}
                                            </p>
                                            <ul className="space-y-2 text-sm text-zinc-600">
                                              {section.items.map((si) => (
                                                <li key={si} className="flex items-center gap-2">
                                                  <span className="text-[#c1a05f]">✦</span>
                                                  {si}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                    </div>
                                  )}
                                </>
                              )}
                            </motion.div>
                          </AnimatePresence>

                          <div className="px-6 pb-5 pt-3 space-y-3 border-t border-zinc-100">
                            <div className="relative flex items-center">
                              {currentIndex > 0 && (
                                <button
                                  onClick={() => changePage(-1)}
                                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500"
                                >
                                  ← Anterior
                                </button>
                              )}

                              <div className="absolute left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
                                {item.items.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={() => goToPage(i)}
                                    className="h-1.5 rounded-full transition-all duration-300"
                                    style={{
                                      width: i === currentIndex ? 18 : 6,
                                      background:
                                        i === currentIndex ? "#c1a05f" : "#d4d4d8",
                                    }}
                                  />
                                ))}
                              </div>

                              <div className="ml-auto">
                                <button
                                  onClick={() => changePage(1)}
                                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500"
                                >
                                  Siguiente →
                                </button>
                              </div>
                            </div>

                            <Button className="w-full py-4 rounded-full bg-[#c1a05f] text-white hover:bg-[#a8874a]">
                              Agenda tu cita
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}