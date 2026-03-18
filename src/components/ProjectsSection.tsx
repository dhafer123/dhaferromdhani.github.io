import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Plant Disease Detection",
    rarity: "LEGENDARY",
    description: "Mobile app that detects plant diseases using camera images with real-time inference.",
    tech: ["Flutter", "TensorFlow Lite"],
    features: ["Real-time detection", "Mobile inference", "Image processing"],
    color: "text-accent",
  },
  {
    title: "E-Components System",
    rarity: "EPIC",
    description: "Web application that allows engineering students to borrow electronic components.",
    tech: ["ReactJS", "Node.js", "Tailwind"],
    features: ["Component catalog", "Borrow system", "Real-time tracking"],
    color: "text-secondary",
  },
  {
    title: "Vehicle Detection AI",
    rarity: "RARE",
    description: "AI system that detects vehicles from video streams in real-time.",
    tech: ["YOLO", "Python", "OpenCV", "Roboflow"],
    features: ["Video stream analysis", "Real-time detection", "Multi-class classification"],
    color: "text-primary",
  },
  {
  title: "Pixel Adventure",
  rarity: "LEGENDARY",
  description: "Retro-style 2D platformer game where the player explores pixel worlds, avoids enemies, and reaches checkpoints.",
  tech: ["Flutter", "Flame Engine", "Tiled"],
  features: ["Retro pixel-art gameplay", "Tile-based level design", "Enemy AI and checkpoints"],
  color: "text-accent",
},
{
  title: "NeoQuest",
  rarity: "RARE",
  description: "AI-driven RPG game where NPCs dynamically adapt to the player's actions and interact through natural language using a Large Language Model.",
  tech: ["Godot", "Python", "LLM Integration"],
  features: ["Adaptive NPC behavior", "Natural language interaction", "Dynamic storytelling"],
  color: "text-primary",
},
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} INVENTORY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="game-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-muted flex items-center justify-center font-pixel text-[8px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-pixel text-[9px] text-foreground leading-relaxed">
                    {project.title}
                  </h3>
                  <span className={`font-pixel text-[7px] ${project.color}`}>
                    {project.rarity}
                  </span>
                </div>
              </div>
              <p className="font-body text-xs text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[7px] bg-muted text-primary px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="dialogue-box max-w-lg w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-pixel text-[10px] text-primary">
                    {projects[selected].title}
                  </h3>
                  <button
                    onClick={() => setSelected(null)}
                    className="font-pixel text-[10px] text-destructive hover:text-foreground"
                  >
                    [X]
                  </button>
                </div>
                <span className={`font-pixel text-[8px] ${projects[selected].color}`}>
                  ★ {projects[selected].rarity}
                </span>
                <p className="font-body text-sm text-foreground mt-3 leading-relaxed">
                  {projects[selected].description}
                </p>
                <div className="mt-4">
                  <span className="font-pixel text-[8px] text-muted-foreground">FEATURES:</span>
                  <ul className="mt-2 space-y-1">
                    {projects[selected].features.map((f) => (
                      <li key={f} className="font-body text-xs text-muted-foreground">
                        {">"} {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {projects[selected].tech.map((t) => (
                    <span
                      key={t}
                      className="font-pixel text-[7px] bg-muted text-primary px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
