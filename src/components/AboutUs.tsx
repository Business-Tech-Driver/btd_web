import { motion } from "motion/react";
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutUs() {
  const features = [
    {
      title: "Entendemos rápido",
      description: "Vamos directo a la raíz de tus procesos.",
    },
    {
      title: "Hablamos simple",
      description: "Sin tecnicismos innecesarios.",
    },
    {
      title: "Metodologías World-Class",
      description: "No improvisamos, escalamos.",
    },
    {
      title: "Tecnología con propósito",
      description: "Herramientas que sirven al negocio.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[#C7A86A] tracking-widest text-sm uppercase">
            Quiénes Somos
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[#08152E] text-5xl mb-6">
              Activamos el{" "}
              <span className="text-[#C7A86A]">Driver Mode</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              En{" "}
              <span className="font-semibold text-[#08152E]">
                Business Tech Driver (BTD)
              </span>
              , activamos el Driver Mode cuando unimos tecnología de vanguardia,
              pensamiento estratégico y una profunda comprensión de procesos.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Es nuestro enfoque para diseñar soluciones ágiles, integrales y
              escalables, pensadas para crecer junto a cada organización.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C7A86A]/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-[#C7A86A]" />
                  </div>
                  <div>
                    <h3 className="text-[#08152E] mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="BTD Team Working"
                className="w-full h-auto"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C7A86A] rounded-lg -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
