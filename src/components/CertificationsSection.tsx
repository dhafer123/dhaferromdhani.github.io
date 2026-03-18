import { motion } from "framer-motion";

const certs = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    color: "text-accent",
  },
  {
    title: "Transformer-Based NLP Applications",
    issuer: "NVIDIA",
    color: "text-primary",
  },
  {
    title: "Accelerating Data Engineering Pipelines",
    issuer: "NVIDIA",
    color: "text-secondary",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} ACHIEVEMENTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="game-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-pixel text-2xl mb-3">🏆</div>
              <h3 className={`font-pixel text-[8px] ${cert.color} leading-relaxed mb-2`}>
                {cert.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
