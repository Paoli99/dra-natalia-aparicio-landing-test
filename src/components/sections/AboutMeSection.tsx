import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="aboutme" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <Card className="overflow-hidden border-none shadow-2xl rounded-none">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-zinc-200">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="md:col-span-7 space-y-16">

            <motion.h2
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-zinc-900 uppercase tracking-tighter leading-none"
            >
              DRA. NATALIA <br /> ANDRADE REQUENA
            </motion.h2>

            <div className="space-y-16">

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c1a05f] mb-4">
                  SOBRE LA DOCTORA
                </p>
                <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
                  La Dra. Natalia Andrade es médica especializada en medicina estética, reconocida por su enfoque preciso, resultados naturales y una atención centrada en cada paciente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c1a05f] mb-4">
                  FORMACIÓN
                </p>
                <div className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl space-y-4">
                  <p>
                    Especialización en Hospital de Rehabilitación Manuel Rocca (UBA). Formación en la Universidad del Valle (UNIVALLE).
                  </p>
                  <p>
                    Su sólida formación académica incluye estudios en la Universidad de Buenos Aires (UBA) y la Universidad del Valle (UNIVALLE), fusionando rigor científico con sensibilidad estética.
                  </p>
                </div>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c1a05f] mb-4">
                  PRÁCTICA MÉDICA
                </p>
                <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
                  Su práctica se centra en la armonización y el respeto por la identidad del paciente, priorizando resultados naturales, seguros y duraderos.
                </p>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c1a05f] mb-4">
                  FILOSOFÍA DE TRABAJO
                </p>
                <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
                  La medicina estética busca la restauración, mantenimiento y promoción de la estética, la salud y el bienestar mediante técnicas de mínima invasión.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}