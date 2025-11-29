import { motion } from "motion/react";
import { Layers, BarChart3, Users, Home } from "lucide-react";

interface HeroIconMenuProps {
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const menuItems = [
  { icon: Home, label: "Driver Mode", index: 0 },
  { icon: Layers, label: "Procesos", index: 1 },
  { icon: BarChart3, label: "Decisiones", index: 2 },
  { icon: Users, label: "Equipos", index: 3 },
];

export function HeroIconMenu({ currentSlide, onSlideChange }: HeroIconMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="inline-block"
    >
      <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSlide === item.index;

          return (
            <motion.button
              key={item.index}
              onClick={() => onSlideChange(item.index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative group rounded-full transition-all duration-300 px-3 py-2
                ${
                  isActive
                    ? "bg-[#C7A86A]"
                    : "hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-center gap-1.5">
                {/* Icon */}
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/60"}`} />
                
                {/* Label - only show on active */}
                {isActive && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="text-white text-xs whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeMenuItem"
                  className="absolute inset-0 bg-[#C7A86A] rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
