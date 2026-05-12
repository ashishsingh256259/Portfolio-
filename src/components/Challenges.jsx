import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const challenges = [
  "Managing realtime synchronization",
  "Building scalable Socket.IO rooms",
  "Responsive dashboard optimization",
  "Authentication persistence",
  "API integration workflows",
  "Reusable frontend architecture"
];

const Challenges = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-gradient">Challenges</span> & Learnings
          </h2>
          <div className="w-16 h-1 bg-red-500/50 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <ShieldAlert className="w-5 h-5 text-gray-500 group-hover:text-accent-cyan transition-colors" />
                </div>
                <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {challenge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
