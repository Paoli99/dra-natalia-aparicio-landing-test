import portada from "@/assets/images/portada.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import SplitText from "../ui/SplitText";
gsap.registerPlugin(ScrollToPlugin);

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
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">

      <div className="absolute inset-0 z-0">
       <img
          src={portada}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-[70%_center] md:object-right"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-[1]" />

      <div className="relative z-10 w-full px-6 md:px-16 max-w-5xl">

        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] uppercase tracking-[-0.02em] mb-12 flex flex-wrap gap-x-2">

          

          <SplitText
            text="Resultados naturales"
            tag="span"
            className="text-[#c1a05f] uppercase"
          />

          <SplitText
            text="que realzan tu belleza"
            tag="span"
          />

        </h1>

        <a
          ref={ctaRef}
          onClick={(e) => {
            e.preventDefault();

            gsap.to(window, {
              scrollTo: {
                y: "#especialidades",
                offsetY: 120,
              },
              duration: 1.4,
              ease: "power4.inOut",
            });
          }}
          className="inline-flex items-center gap-3 text-white hover:text-[#c1a05f] transition-colors duration-100 cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
            Descubrir tratamientos
          </span>

          <span className="text-[#c1a05f]">↓</span>
        </a>

      </div>

    </section>
  );
}