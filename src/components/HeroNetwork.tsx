import { motion } from "motion/react";
import { Workflow, BarChart3, Users, Zap } from "lucide-react";

interface HeroNetworkProps {
  currentSlide: number;
}

const nodes = [
  { id: "driver", label: "Driver Mode", icon: Zap, x: 12, y: 55 },
  { id: "process", label: "Procesos", icon: Workflow, x: 35, y: 32 },
  { id: "decision", label: "Decisiones", icon: BarChart3, x: 62, y: 38 },
  { id: "people", label: "Equipos", icon: Users, x: 82, y: 60 },
];

const connections: Array<[string, string]> = [
  ["driver", "process"],
  ["process", "decision"],
  ["decision", "people"],
  ["driver", "decision"],
  ["process", "people"],
];

export function HeroNetwork({ currentSlide }: HeroNetworkProps) {
  return (
    <div className="absolute inset-x-0 bottom-10 md:bottom-12 px-6 z-20">
      <div className="relative max-w-6xl w-full mx-auto h-72 md:h-[26rem] rounded-[28px] border border-white/15 bg-[#060a14]/80 backdrop-blur-2xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.55)] ring-1 ring-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(199,168,106,0.12),transparent_36%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,0.16),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C7A86A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#C7A86A" stopOpacity="0.95" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connections.map(([from, to], index) => {
            const start = nodes.find((node) => node.id === from)!;
            const end = nodes.find((node) => node.id === to)!;

            return (
              <motion.line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#lineGradient)"
                strokeWidth="1.1"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.95 }}
                transition={{ delay: index * 0.08, duration: 1.2, ease: "easeInOut" }}
                style={{ filter: "url(#glow)" }}
              />
            );
          })}

          <motion.circle
            cx={nodes[currentSlide].x}
            cy={nodes[currentSlide].y}
            r={6.5}
            fill="transparent"
            stroke="#C7A86A"
            strokeWidth="0.45"
            animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.3, 0.55] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = index === currentSlide;
          const isPast = index < currentSlide;

          return (
            <div
              key={node.id}
              className="absolute"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <motion.div
                className="relative px-4 py-3 md:px-5 md:py-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.7, ease: "easeOut" }}
              >
                <motion.div
                  className={`flex items-center gap-3 text-sm md:text-base tracking-wide ${
                    isActive ? "text-white" : "text-white/80"
                  }`}
                  animate={{
                    opacity: isActive ? 1 : isPast ? 0.9 : 0.7,
                    scale: isActive ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full border shadow-inner ${
                      isActive
                        ? "border-[#C7A86A]/60 bg-[#C7A86A]/15 text-[#C7A86A] shadow-[0_0_20px_rgba(199,168,106,0.45)]"
                        : "border-white/25 bg-black/40 text-white/70"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-semibold whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                    {node.label}
                  </span>
                </motion.div>

                {isActive && (
                  <motion.div
                    className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#C7A86A]/20 via-cyan-400/20 to-[#C7A86A]/20 blur-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
