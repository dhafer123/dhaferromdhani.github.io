import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    color: "primary",
    skills: [
      { name: "Dart", level: 90 },
      { name: "Java", level: 80 },
      { name: "Python", level: 85 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "FRAMEWORKS",
    color: "secondary",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "React", level: 35 },
      { name: "Angular", level: 20 },
      { name: "Laravel", level: 20 },
      { name: "React Native", level: 75 },
      { name: "Node.js", level: 80 },
      { name: ".NET", level: 50 },
    ],
  },
  {
    title: "AI / ML",
    color: "accent",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "TF Lite", level: 80 },
      { name: "YOLO", level: 70 },
      { name: "Roboflow", level: 65 },
      { name: "Object Detection", level: 75 },
    ],
  },
  {
    title: "DATABASES",
    color: "primary",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 90 },
    ],
  },
  {
    title: "GAME DEV",
    color: "secondary",
    skills: [
      { name: "Godot", level: 70 },
      { name: "Flame", level: 75 },
      { name: "Unity", level: 60 },
      { name: "Unreal Engine", level: 45 },
    ],
  },
  {
    title: "SYSTEMS",
    color: "accent",
    skills: [
      { name: "Linux", level: 80 },
      { name: "TCP/IP", level: 70 },
      { name: "Cisco", level: 65 },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const borderColorMap: Record<string, string> = {
  primary: "pixel-border-cyan",
  secondary: "pixel-border-purple",
  accent: "pixel-border-green",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} SKILL_TREE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className={`bg-card p-5 ${borderColorMap[cat.color]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="font-pixel text-[9px] text-foreground mb-4">
                [ {cat.title} ]
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-body text-xs text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-pixel text-[8px] text-muted-foreground tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="pixel-progress">
                      <motion.div
                        className={`pixel-progress-bar ${colorMap[cat.color]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: catIdx * 0.1 + i * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
