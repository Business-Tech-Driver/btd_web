import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Show after scrolling a bit
      setIsVisible(scrollTop > 300);
      
      // Check if near footer (within 400px)
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      setIsNearFooter(distanceFromBottom < 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // Aquí puedes cambiar a tu link de WhatsApp
    window.open("https://wa.me/51964232734", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: isNearFooter ? 0 : 1,
            scale: 1,
            y: 0
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative">
            {/* Glow effect - más visible cuando no estás cerca */}
            <motion.div
              className="absolute inset-0 bg-[#C7A86A] rounded-full blur-xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Main button */}
            <motion.div
              className="relative bg-gradient-to-r from-[#C7A86A] to-[#b89960] rounded-full shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Contenido del botón */}
              <div className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4">
                <MessageCircle className="w-5 h-5 text-white" />
                <motion.span
                  className="text-white tracking-wide overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <span className="hidden md:inline whitespace-nowrap">Conversemos</span>
                </motion.span>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Pulse ring - sutil */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#C7A86A]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
