import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2025",
    events: [
      "Started learning full-stack development",
      "Built CouponDS (DSA Visualization)",
      "Built UniConnect (Academic Platform)",
      "Explored AI algorithms and smart systems",
      "Developed Smart Parking Guidance System using A*",
      "Building FORGE AI ecosystem"
    ]
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Learning <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The evolution of a continuous learner, focusing on building systems that matter.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={item.year} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center mb-12">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full glass-card border border-accent-cyan/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)] mb-8 md:mb-0"
                >
                  <span className="text-xl font-bold text-accent-cyan">{item.year}</span>
                </motion.div>
              </div>

              <div className="space-y-6">
                {item.events.map((event, i) => (
                  <motion.div
                    key={event}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:ml-0 md:text-right' : 'md:pl-12 md:ml-auto'} pl-8 md:pl-0 ${i % 2 !== 0 && 'md:pl-12'} ${i % 2 === 0 && 'pl-8'}`}
                  >
                    <div className="md:hidden absolute left-0 top-3 w-2 h-2 rounded-full bg-accent-cyan" />
                    <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                      <p className="text-gray-300">{event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
