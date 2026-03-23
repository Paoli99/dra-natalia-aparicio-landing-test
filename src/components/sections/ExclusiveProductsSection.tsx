import { motion } from "motion/react";

const products = [
  {
    name: "Suero Bio-Ident",
    category: "Rejuvenecimiento Celular",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
  },
  {
    name: "Elixir Gold Lift",
    category: "Firmeza Inmediata",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  },
  {
    name: "Complex HA Ultra",
    category: "Hidratación Profunda",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
  },
];

export default function ExclusiveProductsSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1920px] px-12">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-headline uppercase tracking-tighter text-[#c1a05f] mb-4">
            PRODUCTOS EXCLUSIVOS
          </h2>
          <p className="text-lg text-zinc-500 font-light max-w-xl">
            Líneas dermatológicas de grado médico seleccionadas para potenciar y mantener sus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-white mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>

              <h3 className="text-xl font-headline uppercase tracking-widest mb-2">
                {product.name}
              </h3>

              <p className="text-zinc-500 text-sm font-light uppercase tracking-widest">
                {product.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}