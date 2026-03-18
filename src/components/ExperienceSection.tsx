import { motion } from "framer-motion";

const experiences = [
  {
    title: "Turing Mind Engineering",
    role: "Software Engineering Intern",
    description: "Worked on a travel recommendation platform.",
    tasks: [
      "Geolocation features",
      "Replace mock data with real user data",
      "API integration",
    ],
    level: "LVL 2",
  },
  {
    title: "Tunisie Telecom",
    role: "Network Engineering Intern",
    description: "Learned about fiber optic networking.",
    tasks: [
      "Network mapping",
      "Fiber splicing",
      "Cable installation",
      "Loss measurement",
      "Maintenance",
    ],
    level: "LVL 1",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} QUEST_LOG
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-2 w-4 h-4 bg-primary" />

                <div className="game-card">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-pixel text-[9px] text-primary">
                      {exp.title}
                    </h3>
                    <span className="font-pixel text-[8px] text-accent">
                      {exp.level}
                    </span>
                  </div>
                  <p className="font-pixel text-[8px] text-secondary mb-2">
                    {exp.role}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.tasks.map((task) => (
                      <li
                        key={task}
                        className="font-body text-xs text-foreground"
                      >
                        ▸ {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
