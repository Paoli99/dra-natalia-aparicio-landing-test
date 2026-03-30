import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 py-40 text-center text-white">
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-12">
        <motion.h2
          className="mb-8 text-5xl font-extrabold uppercase tracking-tight leading-none md:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Inicie su <br />
          <span className="font-serif italic font-normal normal-case text-[#c1a05f]">
            transformación
          </span>
        </motion.h2>

        <motion.p
          className="mx-auto mb-14 max-w-2xl text-lg font-light text-zinc-400 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Agende una evaluación personalizada y descubra el tratamiento ideal
          para resaltar su belleza natural.
        </motion.p>

        <motion.a
          href="https://agenda.saluta360.com/6565114f-1b71-4e1c-9833-b51b042d30bb"
          className="inline-block rounded-full border border-[#c1a05f] px-12 py-5 text-xs font-bold uppercase tracking-widest text-[#c1a05f] no-underline transition-all duration-300 hover:bg-[#c1a05f] hover:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          Agenda tu cita
        </motion.a>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(#c1a05f 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      />
    </section>
  );
}
