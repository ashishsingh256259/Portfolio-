import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layers className="w-6 h-6 text-accent-cyan" />,
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-accent-blue" />,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Firebase"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6 text-accent-yellow" />,
    skills: ["GitHub", "Vercel", "Postman", "VS Code"]
  },
  {
    title: "Concepts",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    skills: ["DSA", "Authentication", "API Integration", "Responsive Design", "AI Concepts"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 relative group hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
