import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FlowingBackground } from "./FlowingBackground";
import { MessageCircle, Zap, Workflow, BarChart3, Users, ArrowRight } from "lucide-react";

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

  // Dynamic CTA text based on active slide
  const getSecondaryCTAText = () => {
    const texts = [
      "Más sobre el estado",
      "Más sobre Procesos",
      "Más sobre Decisiones",
      "Más sobre Equipos"
    ];
    return texts[currentSlide];
  };

  return (
    <div id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Flowing Background */}
      <FlowingBackground slideIndex={currentSlide} />

      {/* Content - Full Width Layout */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20 -mt-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            
            {/* Main Content - Full Width */}
            <div className="w-full max-w-4xl">
              
              {/* Mini-Menú Fijo - NO animado con el contenido */}
              <div className="relative mb-6 md:mb-8 mt-24 md:mt-32">
                {/* Connection Line - Horizontal, más suave */}
                <div className="absolute top-[38%] left-0 w-full max-w-[210px] h-[0.5px] bg-white/15 -translate-y-1/2 hidden md:block" />
                
                <div className="flex items-center justify-start gap-3 md:gap-4 relative z-10">
                  {[
                    { label: "Driver Mode", icon: Zap, index: 0 },
                    { label: "Procesos", icon: Workflow, index: 1 },
                    { label: "Decisiones", icon: BarChart3, index: 2 },
                    { label: "Equipos", icon: Users, index: 3 },
                  ].map((pillar) => {
                    const isActive = pillar.index === currentSlide;
                    const isDriverMode = pillar.index === 0;
                    const Icon = pillar.icon;
                    
                    return (
                      <button
                        key={pillar.index}
                        onClick={() => setCurrentSlide(pillar.index)}
                        className="group flex flex-col items-center gap-1.5"
                      >
                        {/* Circle - Slightly larger for better visibility */}
                        <div 
                          className={`
                            rounded-full flex items-center justify-center backdrop-blur-sm
                            transition-all duration-300
                            ${isDriverMode ? 'w-[22px] h-[22px] md:w-6 md:h-6' : 'w-5 h-5 md:w-[22px] md:h-[22px]'}
                            ${isActive 
                              ? 'bg-[#C7A86A]/15 border border-[#C7A86A]/70 shadow-md shadow-[#C7A86A]/10' 
                              : 'bg-white/3 border border-white/10 hover:border-white/25'
                            }
                          `}
                        >
                          <Icon 
                            className={`
                              transition-colors
                              ${isDriverMode ? 'w-[12px] h-[12px] md:w-[13px] md:h-[13px]' : 'w-[11px] h-[11px] md:w-[12px] md:h-[12px]'}
                              ${isActive ? 'text-[#C7A86A]/90' : 'text-white/35 group-hover:text-white/55'}
                            `} 
                          />
                        </div>
                        
                        {/* Label - Slightly larger text */}
                        <span className={`
                          text-[8px] md:text-[9px] tracking-wide transition-colors text-center font-light
                          ${isActive ? 'text-white/75' : 'text-white/25 group-hover:text-white/45'}
                        `}>
                          {pillar.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-5"
                >
                  {/* Title - appears second */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="space-y-1"
                  >
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
                      {slides[currentSlide].title}
                    </h1>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] via-cyan-400 to-[#C7A86A] text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] animate-gradient">
                      {slides[currentSlide].titleHighlight}
                    </h1>
                  </motion.div>

                  {/* Subtitle - appears third */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  {/* CTAs - Horizontal Layout */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2"
                  >
                    {/* Primary CTA - Activa tu Driver Mode */}
                    <a
                      href="https://wa.me/56912345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#C7A86A] rounded-lg bg-transparent text-white hover:bg-[#C7A86A]/10 hover:shadow-lg hover:shadow-[#C7A86A]/20 transition-all duration-300 group w-fit"
                    >
                      <span className="tracking-wide">Activa tu Driver Mode</span>
                      <MessageCircle className="w-5 h-5 text-[#C7A86A] group-hover:scale-110 transition-transform" />
                    </a>

                    {/* Secondary CTA - Dynamic Text */}
                    <a
                      href="#driver-mode"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#driver-mode')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                      className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white/20 rounded-lg bg-transparent text-white/70 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 hover:border-white/30 transition-all duration-300 group w-fit"
                    >
                      <span className="tracking-wide">{getSecondaryCTAText()}</span>
                      <ArrowRight className="w-4 h-4 text-white/60 group-hover:scale-110 transition-transform" />
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}