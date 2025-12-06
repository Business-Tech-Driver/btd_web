import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const clients = [
  {
    name: "Alicorp",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/Alicorp_logo.png",
  },
  {
    name: "MYG",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/myg-logo.png",
  },
  {
    name: "Cliente 3",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/descarga.png",
  },
  {
    name: "HCI",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/HCI.jpg",
  },
  {
    name: "Vertix",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/vertix-logo.webp",
  },
  {
    name: "MyCal",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/mycal_logo.jpg",
  },
  {
    name: "Cognita",
    logo: "http://businesstechdriver.com/wp-content/uploads/2025/04/cognita_group_logo.jpg",
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#C7A86A] tracking-widest text-sm uppercase">
            Experiencia
          </span>
          <h2 className="text-[#08152E] text-4xl mt-3 mb-8">
            Hemos colaborado con:
          </h2>
        </motion.div>

        {/* Infinite Logo Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-20"
              animate={{
                x: [0, -1680],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <ImageWithFallback
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
