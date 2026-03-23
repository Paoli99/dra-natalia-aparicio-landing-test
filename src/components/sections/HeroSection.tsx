import doctorPlaceholder from "@/assets/images/doctorPlaceholder.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section id="aboutme" className="relative flex min-h-screen items-center ">
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-1 flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#c1a05f]"
          >
            Medicina Estética &amp; Antiage
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase tracking-tight leading-[0.9] text-zinc-900"
          >
            EL ARTE DE LA <br />
            <span className="font-serif italic font-normal normal-case text-[#c1a05f]">
              Dra. Natalia
            </span>{" "}
            <br />
            Andrade Requena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-lg text-base font-light leading-relaxed text-zinc-500"
          >
            Redescubra su esencia a través de la armonización facial y el
            rejuvenecimiento natural con precisión médica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-5"
          >
            <Button
              render={<a href="#contacto" />}
              className="h-auto rounded-full border-none bg-[#c1a05f] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-200 hover:scale-95 hover:opacity-90"
            >
              Agendar Cita
            </Button>

{/*             <button className="group flex items-center gap-3 border-none bg-transparent p-0 cursor-pointer">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c1a05f] text-[#c1a05f] transition-all duration-300 group-hover:bg-[#c1a05f] group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-700">
                Ver Filosofía
              </span>
            </button> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative shrink-0"
        >
          <Card className="w-[280px] md:w-[420px] aspect-[3/4] overflow-hidden rounded-none border-none shadow-2xl">
            <CardContent className="h-full p-0">
              <img
                src={doctorPlaceholder}
                alt="Dra. Natalia Andrade Requena"
                className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              />
            </CardContent>
          </Card>
          <div className="absolute -bottom-8 -left-8 h-36 w-36 border-[16px] border-[#f5f0e6] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
