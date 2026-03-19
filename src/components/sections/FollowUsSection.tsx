import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import placeholder from "@/assets/images/placeholder-5.png";

const INSTAGRAM_URL = "https://www.instagram.com/dra.nataliaandrader/";

const posts = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

export default function InstagramSection() {
  return (
    <section className="bg-white py-8 md:py-32">
      <div className="mx-auto w-full max-w-[1920px] px-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-[#c1a05f]">
            Lifestyle &amp; Clínica
          </p>
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-zinc-900 md:text-5xl">
            Síguenos en{" "}
            <span className="font-serif italic font-normal normal-case text-[#c1a05f]">
              Instagram
            </span>
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500 no-underline transition-colors hover:text-[#c1a05f]"
          >
            <Instagram className="h-4 w-4" />
            @dra.nataliaandrader
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-zinc-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.07,
              }}
            >
              <img
                src={placeholder}
                alt={`Post ${post.id}`}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                <Instagram className="h-8 w-8 text-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#c1a05f] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-[#c1a05f] no-underline transition-all duration-200 hover:bg-[#c1a05f] hover:text-white"
          >
            <Instagram className="h-4 w-4" />
            Ver perfil completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
