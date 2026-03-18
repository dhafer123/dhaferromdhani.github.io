import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CERTS", href: "#certifications" },
  { label: "CLUBS", href: "#clubs" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-pixel text-primary text-[10px]">
          {">"} DHAFER.DEV
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-pixel text-[8px] text-muted-foreground hover:text-primary px-3 py-2 hover:bg-card transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden font-pixel text-primary text-xs"
        >
          {isOpen ? "[X]" : "[=]"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-b-2 border-border overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block font-pixel text-[9px] text-muted-foreground hover:text-primary px-6 py-3 hover:bg-muted/50 border-b border-border"
              >
                {">"} {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
