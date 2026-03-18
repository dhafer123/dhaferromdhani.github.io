import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [lines, setLines] = useState<string[]>([
    "> CONTACT_TERMINAL v1.0",
    "> Ready for input...",
  ]);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    setLines((prev) => [...prev, `> Sending message from ${form.name}...`]);

    setTimeout(() => {
      setLines((prev) => [...prev, "> Message Received."]);
      setTimeout(() => {
        setLines((prev) => [...prev, `> Thank you, ${form.name}.`]);
        setSending(false);
        setForm({ name: "", email: "", message: "" });
      }, 800);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {">"} TERMINAL
        </motion.h2>

        <motion.div
          className="terminal-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Terminal output */}
          <div className="mb-4 space-y-1 min-h-[60px]">
            {lines.map((line, i) => (
              <p key={i} className="font-mono text-xs">
                {line}
              </p>
            ))}
            <span className="inline-block w-2 h-3 bg-accent animate-blink" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="font-mono text-[10px] block mb-1">
                {">"} NAME:
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-accent/40 px-3 py-2 font-mono text-xs text-accent focus:outline-none focus:border-accent"
                placeholder="_"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] block mb-1">
                {">"} EMAIL:
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border border-accent/40 px-3 py-2 font-mono text-xs text-accent focus:outline-none focus:border-accent"
                placeholder="_"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] block mb-1">
                {">"} MESSAGE:
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border border-accent/40 px-3 py-2 font-mono text-xs text-accent focus:outline-none focus:border-accent resize-none"
                placeholder="_"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="pixel-btn-accent text-[9px] disabled:opacity-50"
            >
              [ SEND_MSG ]
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 flex gap-4 font-pixel text-[8px]">
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-primary hover:text-foreground">
              [LINKEDIN]
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" className="text-primary hover:text-foreground">
              [GITHUB]
            </a>
            <a href="mailto:dhafer@example.com" className="text-primary hover:text-foreground">
              [EMAIL]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
