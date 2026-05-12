import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Server, Cpu, Globe, Layout } from 'lucide-react';

const techCards = [
  { title: "Vercel Deployment Workflows", icon: <Globe size={20} className="text-accent-cyan" /> },
  { title: "Firebase Integration Systems", icon: <Cloud size={20} className="text-accent-yellow" /> },
  { title: "MongoDB Persistence", icon: <Database size={20} className="text-green-500" /> },
  { title: "Realtime Socket.IO Architecture", icon: <Server size={20} className="text-purple-400" /> },
  { title: "Responsive SaaS Engineering", icon: <Layout size={20} className="text-accent-blue" /> },
  { title: "Modular Frontend/Backend", icon: <Cpu size={20} className="text-gray-300" /> },
];

const DeploymentAndEngineering = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deployment & <span className="text-gradient">Engineering</span>
          </h2>
          <p className="text-gray-400">Production-ready system architecture and scalable infrastructures.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCards.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="bg-dark p-3 rounded-lg border border-white/5 shadow-inner group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <p className="text-sm text-gray-200 font-medium">{tech.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentAndEngineering;
