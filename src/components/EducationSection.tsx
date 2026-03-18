import { motion } from "framer-motion";
import graduationHat from "@/assets/graduation_hat.png";
import bookStack from "@/assets/book_stack.png";
import schoolImage from "@/assets/school-.png";

const education = [
  {
    school: "ENISo — Sousse",
    degree: "Applied Computer Science Engineering",
    period: "2023 – Present",
    image: graduationHat,
    imageAlt: "Graduation hat",
  },
  {
    school: "IPEIM — Monastir",
    degree: "Preparatory: Physics & Chemistry",
    period: "2021 – 2023",
    image: bookStack,
    imageAlt: "Stack of books",
  },
  {
    school: "Salem High School",
    degree: "Baccalaureate in Mathematics (Honors : 15.78)",
    period: "2021",
    image: schoolImage,
    imageAlt: "School building",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} SAVE_FILES
        </motion.h2>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="game-card flex items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 overflow-hidden border border-border bg-muted shrink-0">
                <img
                  src={edu.image}
                  alt={edu.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-pixel text-[9px] text-primary">
                  {edu.school}
                </h3>
                <p className="font-body text-sm text-foreground mt-1">
                  {edu.degree}
                </p>
              </div>
              <span className="font-pixel text-[7px] text-muted-foreground shrink-0">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
