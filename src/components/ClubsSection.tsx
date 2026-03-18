import { motion } from "framer-motion";
import pixelAvatar from "@/assets/pixel-avatar.png";

const activities = [
  { title: "Head of Mobile Dev", org: "Orange Tech Club", image: pixelAvatar },
  { title: "Event Organizer", org: "Forum ENISO Entreprises", image: pixelAvatar },
  { title: "Media Responsible", org: "ENISO IoT Challenge", image: pixelAvatar },
  { title: "Member", org: "ACM ENISO Club", image: pixelAvatar },
  { title: "Member", org: "ENISO Team Club", image: pixelAvatar },
];

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} PARTY_MEMBERS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((act, i) => (
            <motion.div
              key={act.title + act.org}
              className="game-card flex items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="h-12 w-12 overflow-hidden border border-border bg-muted shrink-0">
                <img
                  src={act.image}
                  alt={act.org}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-pixel text-[8px] text-primary leading-relaxed">
                  {act.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  {act.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
