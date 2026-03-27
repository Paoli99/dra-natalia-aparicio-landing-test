import { motion } from "motion/react";
import placeholder from "../../../public/placeholder-5.png";

const images = [
  {
    src: placeholder,
    span: "md:col-span-8",
  },
  {
   src: placeholder,
    span: "md:col-span-4",
  },
  {
    src: placeholder,
    span: "md:col-span-4",
  },
  {
    src: placeholder,
    span: "md:col-span-8",
  },
];

export default function OurSpaceSection() {
  return (
    <section className="mb-32">
      <div className="mx-auto max-w-[1920px] px-12">
        <div className="text-center mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c1a05f] mb-4">
            Ambiente & Profesionalismo
          </p>

          <h2 className="text-5xl md:text-7xl font-headline uppercase tracking-tighter text-[#c1a05f]">
            NUESTRO ESPACIO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`${img.span} overflow-hidden group`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}
            >
              <img
                src={img.src}
                alt="Espacio"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}