import placeholder from "@/assets/images/placeholder-5.png";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { TikTokIcon } from "../ui/icons/TiktokIcon";

const SOCIALS = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/dra.nataliaandrader",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/dra.nataliaandrader/",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    url: "https://www.tiktok.com/@dra.nataliaandrader",
  },
];

export default function FollowUsSection() {
  return (
    <section className="bg-white py-8 md:py-32">
      <div className="mx-auto w-full max-w-[1920px] px-12">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.5em] text-[#c1a05f]">
            Lifestyle & Clínica
          </p>

          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-zinc-900 md:text-5xl">
            Síguenos en{" "}
            <span className="font-serif uppercase text-[#c1a05f]">
              redes sociales
            </span>
          </h2>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-6">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;

              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-[#c1a05f]"
                >
                  <Icon className="h-4 w-4" />
                  {social.name}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Grid (solo 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIALS.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-zinc-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <img
                  src={placeholder}
                  alt={social.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <Icon className="h-8 w-8 text-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  <span className="mt-2 text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100">
                    Ver en {social.name}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}