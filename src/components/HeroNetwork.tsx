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
    <div className="absolute inset-x-0 bottom-10 px-6 z-20">
      <div className="relative max-w-5xl mx-auto h-64 md:h-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(199,168,106,0.08),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:38px_38px] opacity-30" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C7A86A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C7A86A" stopOpacity="0.8" />
            </linearGradient>
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
                strokeWidth="0.8"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: index * 0.08, duration: 0.8 }}
              />
            );
          })}

          <motion.circle
            cx={nodes[currentSlide].x}
            cy={nodes[currentSlide].y}
            r={5}
            fill="transparent"
            stroke="#C7A86A"
            strokeWidth="0.35"
            animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.25, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
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
                className="relative px-4 py-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
              >
                <motion.div
                  className={`flex items-center gap-2 text-sm tracking-wide ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                  animate={{
                    opacity: isActive ? 1 : isPast ? 0.9 : 0.6,
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                      isActive
                        ? "border-[#C7A86A]/60 bg-[#C7A86A]/10 text-[#C7A86A]"
                        : "border-white/20 bg-white/5 text-white/60"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="font-semibold whitespace-nowrap">{node.label}</span>
                </motion.div>

                {isActive && (
                  <motion.div
                    className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#C7A86A]/20 via-cyan-400/15 to-[#C7A86A]/20 blur-xl"
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
