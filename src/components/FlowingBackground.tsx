import { motion } from "motion/react";

interface FlowingBackgroundProps {
  slideIndex: number;
}

export function FlowingBackground({ slideIndex }: FlowingBackgroundProps) {
  // Color themes for each slide
  const themes = [
    { primary: "rgba(199, 168, 106, 0.15)", secondary: "rgba(6, 182, 212, 0.1)" },
    { primary: "rgba(6, 182, 212, 0.15)", secondary: "rgba(59, 130, 246, 0.1)" },
    { primary: "rgba(59, 130, 246, 0.15)", secondary: "rgba(139, 92, 246, 0.1)" },
    { primary: "rgba(139, 92, 246, 0.15)", secondary: "rgba(199, 168, 106, 0.1)" },
  ];

  const currentTheme = themes[slideIndex];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#08152E] via-[#0a1a3a] to-[#08152E]"
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flowing Orbs - Moved to the left behind content */}
      <motion.div
        className="absolute top-1/4 left-[15%] w-96 h-96 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          backgroundColor: [currentTheme.primary, currentTheme.secondary, currentTheme.primary],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          backgroundColor: [currentTheme.secondary, currentTheme.primary, currentTheme.secondary],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-[20%] w-64 h-64 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ backgroundColor: currentTheme.primary }}
      />

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          animate={{
            y1: ["30%", "35%", "30%"],
            y2: ["30%", "25%", "30%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#gradient2)"
          strokeWidth="2"
          animate={{
            y1: ["70%", "65%", "70%"],
            y2: ["70%", "75%", "70%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C7A86A" stopOpacity="0" />
            <stop offset="50%" stopColor="#C7A86A" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#C7A86A" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#08152E]/50" />
    </div>
  );
}
