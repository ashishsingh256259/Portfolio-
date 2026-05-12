import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
const GithubSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <FaGithub className="w-8 h-8 text-white" />
              Open Source & <span className="text-gradient">Activity</span>
            </h2>
            <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
          </div>
          
          <a href="https://github.com/ashishsingh256259" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card hover:bg-white/10 transition-colors text-sm font-medium border border-white/10">
            View Profile <Activity size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Stats Mockup / Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-white/5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="text-purple-400" size={20} /> Latest Contributions
            </h3>
            
            <div className="space-y-4">
              {[
                { repo: "Realtime-Workspace", msg: "Implemented Socket.IO room logic", time: "2 days ago" },
                { repo: "Smart-Parking-System", msg: "Integrated Bayesian reasoning", time: "1 week ago" },
                { repo: "Mentor", msg: "Added AI-powered resume analysis", time: "2 weeks ago" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-3 rounded-lg bg-dark/50 border border-white/5">
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent-cyan"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200">{item.repo}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.msg}</p>
                  </div>
                  <span className="text-[10px] text-gray-500 ml-auto">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Repository */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border border-white/5 relative group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-accent-cyan cursor-pointer hover:underline">
                Realtime-Workspace
              </h3>
              <div className="flex gap-3 text-gray-400 text-sm">
                <span className="flex items-center gap-1"><Star size={14} /> 12</span>
                <span className="flex items-center gap-1"><GitFork size={14} /> 4</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              A full-stack collaborative productivity platform built using React, Node.js, Socket.IO, and MongoDB enabling realtime synchronization and workspace management.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {["JavaScript", "Socket.IO", "React", "Node.js"].map(tech => (
                <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
