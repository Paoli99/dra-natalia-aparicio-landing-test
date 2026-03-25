import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import SplitText from "../ui/SplitText";

export default function HeroSection() {

const ctaRef = useRef(null);

useGSAP(() => {
  gsap.to(ctaRef.current, {
    y: 6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 1,
  });
}, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center bg-zinc-950 text-white overflow-hidden py-32">

      <div className="absolute inset-0 z-0 opacity-20 grayscale">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7e6f5a7b9b"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-zinc-950 z-[1]" />

      <div
        className="absolute inset-0 opacity-10 z-[2]"
        style={{
          backgroundImage:
            "radial-gradient(#c1a05f 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 text-center">

        <div className="mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#c1a05f] mb-4">
            Excelencia Clínica & Arte Estético
          </p>
          <div className="w-16 h-[1px] bg-[#c1a05f] mx-auto" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] uppercase tracking-[-0.02em] mb-12 flex flex-wrap justify-center gap-x-2">

          <SplitText text="La" tag="span" />

          <SplitText
            text="medicina estética"
            tag="span"
            className="text-[#c1a05f] uppercase"
          />

          <SplitText
            text="es una rama de la medicina"
            tag="span"
          />

        </h1>

        <div className="space-y-8 max-w-3xl mx-auto">

         <SplitText
          text="La medicina estética es una rama de la medicina orientada a mejorar la calidad de la piel, tratar diferentes preocupaciones estéticas y mantener la armonía natural del rostro y del cuerpo."
          className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto"
          splitType="words"
          delay={20}
          duration={1}
        />

        <SplitText
          text="A través de tratamientos mínimamente invasivos y una valoración médica personalizada, es posible lograr resultados seguros, naturales y adaptados a cada paciente."
          className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto"
          splitType="words"
          delay={20}
          duration={1}
        />

        </div>

        <div className="mt-16 flex justify-center items-center gap-6">

          <div className="h-px w-12 bg-white" />

          <a
            ref={ctaRef}
            href="#especialidades"
            className="flex items-center gap-3 text-white hover:text-[#c1a05f] transition-colors duration-100"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              Descubrir Tratamientos
            </span>

            <span className="text-[#c1a05f]">↓</span>
          </a>

          <div className="h-px w-12 bg-white" />

        </div>

      </div>
    </section>
  );
}