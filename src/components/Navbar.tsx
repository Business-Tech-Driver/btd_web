import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/25e57b26889bb9c12400e5b5f722a69f298f4e2f.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "INICIO", href: "#inicio" },
    { label: "DRIVER MODE", href: "#driver-mode" },
    { label: "EXPERIENCIAS", href: "#experiencias" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08152E]/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img 
              src={logo} 
              alt="BTD Logo" 
              className="h-8 w-auto object-contain object-left"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </motion.div>

          {/* Nav Items */}
          <div className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-white/80 hover:text-cyan-400 transition-colors text-xs tracking-wide cursor-pointer"
              >
                {item.label}
              </motion.a>
            ))}

            {/* LinkedIn Icon - Minimal Button with Golden Border */}
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-2 border border-[#C7A86A]/40 rounded-lg text-white/80 hover:text-[#C7A86A] hover:border-[#C7A86A] hover:bg-[#C7A86A]/5 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}