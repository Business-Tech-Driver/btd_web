import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 px-6 py-4 bg-[#C7A86A] text-white rounded-full shadow-2xl shadow-[#C7A86A]/30 flex items-center gap-2 cursor-pointer group"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.div>
      <span className="tracking-wide">Conversemos</span>
      
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#C7A86A]"
        animate={{
          scale: [1, 1.3],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.button>
  );
}
