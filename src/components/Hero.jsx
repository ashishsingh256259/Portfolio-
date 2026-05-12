import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-yellow/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card border-white/10 mb-4">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-blue">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Building Real-World Platforms Through{' '}
            <span className="text-gradient">Code, AI,</span> and System Design.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building realtime systems, AI-powered platforms, and modern full-stack web experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#projects" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
              <button className="relative w-full px-8 py-4 bg-dark rounded-lg flex items-center justify-center gap-2 text-white font-medium hover:bg-dark-lighter transition-colors">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            <a href="/resume.pdf" download className="w-full sm:w-auto px-8 py-4 glass-card rounded-lg flex items-center justify-center gap-2 text-white font-medium hover:bg-white/10 transition-colors border border-white/10">
              <Download size={18} />
              Download Resume
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 font-medium">Focused on scalable systems, realtime communication, and interactive product engineering.</p>

          <div className="flex items-center justify-center gap-6 pt-12">
            <SocialLink href="https://github.com/ashishsingh256259" icon={<FaGithub size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/ashish-singh-946711367" icon={<FaLinkedin size={24} />} />
            <SocialLink href="mailto:Ashishsingh100580@gmail.com" icon={<Mail size={24} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-gray-400 hover:text-white hover:border-accent-cyan/50 transition-all duration-300"
  >
    {icon}
  </motion.a>
);

export default Hero;
