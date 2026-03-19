import { motion } from "motion/react";
import { MapPin, Smartphone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-white py-8 md:py-32">
      <div className="mx-auto w-full max-w-[1920px] px-12">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:gap-20">
          <motion.div
            className="flex flex-1 flex-col gap-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-zinc-900">
                <span className="text-[#c1a05f]">Consultorio</span>
                <br />
                <span className="text-[#c1a05f]">&amp; </span>
                <span className=" font-normal normal-case text-[#c1a05f]">
                  contacto
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#c1a05f]" />
                <p className="text-md md:text-xl font-light text-zinc-700">
                  Av. Heroínas esq. Pasteur,
                  <br />
                  Cochabamba, Bolivia
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Smartphone className="h-5 w-5 shrink-0 text-[#c1a05f]" />
                <p className="text-md md:text-xl font-light text-zinc-700">
                  +591 700 00000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-[#c1a05f]" />
                <p className="text-md md:text-xl font-light text-zinc-700">
                  contacto@dranataliaandrade.com
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-zinc-100 pt-10">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Horarios
                </p>
                <p className="text-sm font-medium text-zinc-700">
                  Lun - Vie: 09:00 - 19:00
                </p>
                <p className="text-sm font-medium text-zinc-700">
                  Sábados: 09:00 - 13:00
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-[55%] overflow-hidden border border-zinc-100 shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7!2d-66.1572!3d-17.3935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37192!2sAv.+Hero%C3%ADnas+esq.+Pasteur%2C+Cochabamba!5e0!3m2!1ses!2sbo!4v1"
              className="h-[500px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Consultorio Dra. Natalia Andrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
