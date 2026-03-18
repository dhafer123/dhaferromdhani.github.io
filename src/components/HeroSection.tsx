import { useState } from "react";
import { motion } from "framer-motion";
import PixelStars from "./PixelStars";
import pixelAvatar from "@/assets/pixel-avatar.png";

const HeroSection = () => {
  const [started, setStarted] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <PixelStars />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {!started ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="font-pixel text-primary text-[10px] md:text-xs animate-blink">
              — PRESS START —
            </div>
            <button
              onClick={() => setStarted(true)}
              className="pixel-btn text-[10px]"
            >
              [ START ]
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.img
              src={pixelAvatar}
              alt="Dhafer Romdhani pixel avatar"
              className="w-32 h-32 md:w-40 md:h-40 animate-float-pixel image-rendering-pixelated"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              style={{ imageRendering: "pixelated" }}
            />

            <motion.h1
              className="font-pixel text-primary text-sm md:text-lg leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              DHAFER ROMDHANI
            </motion.h1>

            <motion.div
              className="dialogue-box max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-pixel text-[8px] md:text-[10px] text-secondary leading-relaxed">
                LVL 23 — MOBILE ARCHITECT
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Mobile Developer | Game Developer | AI Enthusiast
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="pixel-btn text-[9px]">
                [ VIEW_PROJECTS ]
              </a>
              <a href="#contact" className="pixel-btn-accent text-[9px]">
                [ CONTACT_ME ]
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
