import { motion } from "motion/react";
import { Workflow, BarChart3, Users, Zap } from "lucide-react";

interface HeroTimelineProps {
  currentSlide: number;
  totalSlides: number;
}

const stages = [
  { label: "Driver Mode", icon: Zap },
  { label: "Procesos", icon: Workflow },
  { label: "Decisiones", icon: BarChart3 },
  { label: "Equipos", icon: Users },
];

export function HeroTimeline({ currentSlide, totalSlides }: HeroTimelineProps) {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-2xl px-6">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
        
        {/* Active Progress */}
        <motion.div
          className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-[#C7A86A] to-cyan-400 -translate-y-1/2"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Stage Markers */}
        <div className="relative flex justify-between">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index === currentSlide;
            const isPast = index < currentSlide;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Circle Marker */}
                <motion.div
                  className={`
                    w-3 h-3 rounded-full relative
                    ${isActive ? "ring-4 ring-[#C7A86A]/30" : ""}
                  `}
                  animate={{
                    backgroundColor: isActive || isPast ? "#C7A86A" : "rgba(255,255,255,0.2)",
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#C7A86A]"
                      animate={{
                        scale: [1, 1.5, 1],
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
                <motion.div
                  className={`
                    flex items-center gap-1.5 transition-all duration-300
                    ${isActive ? "opacity-100" : "opacity-40"}
                  `}
                  animate={{
                    y: isActive ? -4 : 0,
                  }}
                >
                  <Icon
                    className={`w-3 h-3 ${isActive ? "text-[#C7A86A]" : "text-white/60"}`}
                  />
                  <span
                    className={`text-xs tracking-wide ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    {stage.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
