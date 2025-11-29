import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FlowingBackground } from "./FlowingBackground";
import { HeroNetwork } from "./HeroNetwork";

const slides = [
  {
    id: 1,
    badge: "Driver Mode",
    title: "Activamos el",
    titleHighlight: "Driver Mode",
    subtitle: "Llevamos empresas de modelos tradicionales a operaciones digitales ágiles, donde procesos, decisiones y equipos trabajan como un sistema.",
  },
  {
    id: 2,
    badge: "Process Driver Mode",
    title: "Procesos que",
    titleHighlight: "fluyen",
    subtitle: "Diseñamos y automatizamos procesos digitales que eliminan fricción, reducen errores y hacen que tu operación avance con claridad.",
  },
  {
    id: 3,
    badge: "Decision Driver Mode",
    title: "Decisiones",
    titleHighlight: "inteligentes",
    subtitle: "Convertimos datos en decisiones accionables mediante analítica, reglas inteligentes y modelos que impulsan resultados reales.",
  },
  {
    id: 4,
    badge: "People Driver Mode",
    title: "Equipos",
    titleHighlight: "preparados",
    subtitle: "Construimos una cultura digital con criterio, autonomía y dominio tecnológico para que el cambio sea sostenible.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Flowing Background */}
      <FlowingBackground slideIndex={currentSlide} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Badge - appears first */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full bg-[#C7A86A]/5 backdrop-blur-sm">
                  {slides[currentSlide].badge}
                </span>
              </motion.div>

              {/* Title - appears second */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-2"
              >
                <h1 className="text-white text-5xl md:text-7xl tracking-tight">
                  {slides[currentSlide].title}
                </h1>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] via-cyan-400 to-[#C7A86A] text-5xl md:text-7xl tracking-tight animate-gradient">
                  {slides[currentSlide].titleHighlight}
                </h1>
              </motion.div>

              {/* Subtitle - appears third */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* CTA - appears last, subtle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-[#C7A86A] transition-colors group"
                >
                  <span className="text-sm tracking-wide">Conversemos</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Network Progress Indicator */}
      <HeroNetwork currentSlide={currentSlide} />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </div>
  );
}
