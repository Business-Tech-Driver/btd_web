import { useState, useEffect } from "react";
import { Linkedin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/25e57b26889bb9c12400e5b5f722a69f298f4e2f.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export function NavbarWithDropdown() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "INICIO", href: "/" },
    { 
      label: "SERVICIOS", 
      dropdown: [
        { label: "Process Driver Mode", href: "/process-driver-mode" },
        { label: "Decision Driver Mode", href: "/decision-driver-mode" },
        { label: "People Driver Mode", href: "/people-driver-mode" },
      ]
    },
    { 
      label: "NOSOTROS", 
      dropdown: [
        { label: "Driver Mode", href: "/driver-mode" },
        { label: "Acerca de Nosotros", href: "/about-us" },
      ]
    },
    { label: "CONTACTO", href: "/contact" },
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
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img 
              src={logo} 
              alt="BTD Logo" 
              className="h-8 w-auto object-contain object-left"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </motion.a>

          {/* Nav Items */}
          <div className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className="text-white/80 hover:text-cyan-400 transition-colors text-xs tracking-wide cursor-pointer flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-white/80 hover:text-cyan-400 transition-colors text-xs tracking-wide cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-[#08152E]/98 backdrop-blur-md border border-white/10 rounded-lg shadow-xl shadow-cyan-500/10 overflow-hidden"
                    >
                      {item.dropdown.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-white/70 hover:text-cyan-400 hover:bg-white/5 transition-all text-xs tracking-wide border-b border-white/5 last:border-b-0"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* LinkedIn Icon */}
            <motion.a
              href="https://pe.linkedin.com/company/business-tech-driver"
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