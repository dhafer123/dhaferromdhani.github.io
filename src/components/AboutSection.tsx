import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} ABOUT_ME
        </motion.h2>

        <motion.div
          className="dialogue-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-2 mb-3">
            <span className="font-pixel text-[10px] text-accent">NPC:</span>
            <span className="font-pixel text-[10px] text-primary">DHAFER</span>
          </div>
          <p className="font-body text-[15px] text-foreground leading-relaxed">
            Applied Computer Science Engineering student passionate about mobile development, AI, and computer vision. Focused on building innovative and user-centered applications and exploring new technologies.
          </p>
          <div className="mt-4 font-pixel text-[8px] text-muted-foreground animate-blink">
            ▼
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
