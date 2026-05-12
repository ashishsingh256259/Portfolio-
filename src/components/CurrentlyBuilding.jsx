import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Terminal, GitBranch, Cpu } from 'lucide-react';

const CurrentlyBuilding = () => {
  const items = [
    { text: "Realtime Collaboration Workspace", icon: <Rocket size={18} className="text-accent-cyan" /> },
    { text: "Exploring scalable backend systems", icon: <Server size={18} className="text-accent-blue" /> },
    { text: "Learning advanced realtime architecture", icon: <Cpu size={18} className="text-accent-yellow" /> },
    { text: "Improving system design and engineering depth", icon: <Terminal size={18} className="text-purple-400" /> }
  ];

  return (
    <section id="building" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Currently <span className="text-gradient">Building</span>
          </h2>
          <div className="w-16 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="space-y-6 relative z-10">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-dark flex items-center justify-center border border-white/5 shadow-inner">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-200 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add Server import since I missed it in lucide-react above
import { Server } from 'lucide-react';

export default CurrentlyBuilding;
