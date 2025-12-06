import { motion } from "motion/react";
import { Workflow, BarChart3, Users, Zap } from "lucide-react";

interface HeroPillarsProps {
  currentSlide: number;
  onSlideChange?: (index: number) => void;
}

const pillars = [
  { label: "Driver Mode", icon: Zap },
  { label: "Procesos", icon: Workflow },
  { label: "Decisiones", icon: BarChart3 },
  { label: "Equipos", icon: Users },
];

export function HeroPillars({ currentSlide, onSlideChange }: HeroPillarsProps) {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-3xl px-6">
      <div className="relative">
        {/* Pillars Navigation - sin línea de progreso */}
        <div className="relative flex justify-center items-center gap-8 md:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = index === currentSlide;

            return (
              <motion.button
                key={index}
                onClick={() => onSlideChange?.(index)}
                className="flex flex-col items-center gap-2 group cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Circle Marker con icono */}
                <motion.div
                  className={`
                    relative flex items-center justify-center
                    w-12 h-12 rounded-full backdrop-blur-sm
                    transition-all duration-300
                    ${isActive 
                      ? "bg-[#C7A86A]/20 border-2 border-[#C7A86A]" 
                      : "bg-white/5 border border-white/20 group-hover:border-white/40"
                    }
                  `}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-[#C7A86A]" : "text-white/60 group-hover:text-white/80"
                    }`}
                  />
                  
                  {/* Pulso sutil solo en activo */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#C7A86A]"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.span
                  className={`text-xs tracking-wide transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/50 group-hover:text-white/70"
                  }`}
                >
                  {pillar.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
