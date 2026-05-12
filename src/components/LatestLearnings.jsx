import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const learnings = [
  "Building scalable Socket.IO rooms",
  "Managing realtime synchronization",
  "Exploring AI-integrated workflows",
  "Improving reusable frontend architecture",
  "Learning backend engineering patterns"
];

const LatestLearnings = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <BookOpen className="w-6 h-6 text-accent-cyan" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Latest <span className="text-gradient">Learnings</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learnings.map((learning, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 cursor-default"
            >
              <p className="text-gray-300 font-medium text-sm leading-relaxed">
                {learning}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestLearnings;
