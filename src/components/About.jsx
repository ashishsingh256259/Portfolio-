import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Rocket, Server } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-accent-cyan" />,
      title: "Full-Stack Development",
      description: "Building responsive, modern applications from frontend interfaces to backend logic."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-accent-blue" />,
      title: "AI & Systems",
      description: "Integrating intelligent algorithms and AI APIs to solve complex real-world problems."
    },
    {
      icon: <Server className="w-8 h-8 text-accent-yellow" />,
      title: "Scalable Architecture",
      description: "Focused on clean code, system design, and building robust backend APIs."
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Product Thinking",
      description: "Driven by user experience, ensuring technical solutions translate to real value."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm Ashish Singh, a 1st-year AIML student passionate about full-stack development and intelligent product design. 
            I enjoy bridging the gap between theoretical AI concepts and real-world software engineering, focusing on building 
            platforms that solve tangible problems. I'm constantly exploring backend engineering, APIs, and scalable system architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
