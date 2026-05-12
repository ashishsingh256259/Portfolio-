import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const explorations = [
  "Realtime Systems",
  "AI Integrations",
  "Socket.IO Architecture",
  "System Design",
  "Scalable Backend Engineering",
  "Event-Driven Communication"
];

const Explorations = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <Compass className="w-6 h-6 text-accent-yellow" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            What I'm <span className="text-gradient">Exploring</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {explorations.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card px-6 py-4 rounded-xl border border-white/10 hover:border-accent-yellow/50 hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <span className="text-gray-200 font-medium tracking-wide">{topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorations;
