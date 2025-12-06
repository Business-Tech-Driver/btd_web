import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TechBackgroundProps {
  slideIndex: number;
}

export function TechBackground({ slideIndex }: TechBackgroundProps) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08152E] via-[#0a1a3a] to-[#08152E]" />

      {/* Specific animation per slide */}
      {slideIndex === 0 && <DriverModeAnimation />}
      {slideIndex === 1 && <ProcessAnimation />}
      {slideIndex === 2 && <DecisionAnimation />}
      {slideIndex === 3 && <PeopleAnimation />}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#08152E]/50" />
    </div>
  );
}

// Slide 1: Driver Mode - Data Flow Animation
function DriverModeAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      {/* Flowing data streams */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 250} 0 Q ${i * 250 + 100} 200 ${i * 250} 400 T ${i * 250} 800`}
            stroke="url(#gradient-flow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)",
          top: "20%",
          left: "10%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

// Slide 2: Process Automation - Gears & Flow
function ProcessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      {/* Animated gears/cogs */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.circle
          cx="20%"
          cy="30%"
          r="80"
          stroke="#06b6d4"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "20%", originY: "30%" }}
        />
        <motion.circle
          cx="80%"
          cy="70%"
          r="60"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8 4"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "80%", originY: "70%" }}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="100"
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
          strokeDasharray="12 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%" }}
        />
      </svg>

      {/* Flow connectors */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 100 100 L 400 300 L 700 200 L 1000 400"
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 200 600 L 500 400 L 800 500"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </svg>

      {/* Process nodes */}
      {[20, 50, 80].map((x, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full"
          style={{ left: `${x}%`, top: `${30 + i * 20}%` }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
}

// Slide 3: Decision Automation - Neural Network / Decision Tree
function DecisionAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      {/* Neural network nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {/* Input layer */}
        {[20, 40, 60, 80].map((y, i) => (
          <motion.circle
            key={`input-${i}`}
            cx="20%"
            cy={`${y}%`}
            r="8"
            fill="#06b6d4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Hidden layer */}
        {[15, 35, 55, 75].map((y, i) => (
          <motion.circle
            key={`hidden-${i}`}
            cx="50%"
            cy={`${y}%`}
            r="10"
            fill="#3b82f6"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5 }}
          />
        ))}

        {/* Output layer */}
        {[30, 50, 70].map((y, i) => (
          <motion.circle
            key={`output-${i}`}
            cx="80%"
            cy={`${y}%`}
            r="8"
            fill="#06b6d4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 1 }}
          />
        ))}

        {/* Connections */}
        {[20, 40, 60, 80].map((y1, i) =>
          [15, 35, 55, 75].map((y2, j) => (
            <motion.line
              key={`conn-${i}-${j}`}
              x1="20%"
              y1={`${y1}%`}
              x2="50%"
              y2={`${y2}%`}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: (i + j) * 0.1,
                repeatType: "reverse",
              }}
            />
          ))
        )}

        <defs>
          <linearGradient id="neural-gradient">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decision tree branches */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 960 100 L 800 300 M 960 100 L 1100 300"
          stroke="#06b6d4"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Pulsing decision points */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 70%)",
          top: "30%",
          right: "15%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}

// Slide 4: People - Collaborative Network
function PeopleAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      {/* Network of people nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {/* People nodes arranged in clusters */}
        {[
          { x: 30, y: 30 },
          { x: 50, y: 25 },
          { x: 70, y: 35 },
          { x: 25, y: 60 },
          { x: 45, y: 55 },
          { x: 65, y: 65 },
          { x: 75, y: 70 },
          { x: 35, y: 80 },
        ].map((pos, i) => (
          <g key={i}>
            <motion.circle
              cx={`${pos.x}%`}
              cy={`${pos.y}%`}
              r="12"
              fill="#C7A86A"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
            <motion.circle
              cx={`${pos.x}%`}
              cy={`${pos.y}%`}
              r="20"
              stroke="#C7A86A"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </g>
        ))}

        {/* Connection lines between people */}
        <motion.path
          d="M 30% 30% L 50% 25% L 70% 35%"
          stroke="#C7A86A"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 50% 25% L 45% 55%"
          stroke="#C7A86A"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.path
          d="M 25% 60% L 45% 55% L 65% 65%"
          stroke="#C7A86A"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </svg>

      {/* Warm collaborative glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(199, 168, 106, 0.15), transparent 70%)",
          top: "40%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Connection particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#C7A86A] rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
}
