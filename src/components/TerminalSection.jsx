import React from 'react';
import { motion } from 'framer-motion';

const TerminalSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]"
        >
          {/* Terminal Header */}
          <div className="px-4 py-3 bg-[#1a1a1a] border-b border-white/10 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500 font-mono flex-1 text-center pr-10">
              ashish@system: ~/workspace
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm sm:text-base space-y-3">
            <div className="flex gap-3 text-gray-400">
              <span className="text-accent-cyan">❯</span>
              <span className="text-gray-300">npm start realtime-core</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 pl-4 space-y-2"
            >
              <p>{'>'} initializing realtime systems...</p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} className="text-green-400">
                {'>'} socket connection established
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
                {'>'} scalable architecture loading...
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.0 }} className="text-accent-cyan">
                {'>'} collaboration room active
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.5 }} className="text-purple-400">
                {'>'} AI workflow initialized
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 3.0 }} className="mt-4 flex gap-3 text-gray-300">
                <span className="text-accent-cyan animate-pulse">_</span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
