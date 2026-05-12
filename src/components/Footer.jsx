import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden bg-dark">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      
      <div className="container mx-auto px-6 text-center space-y-6">
        <p className="text-gray-400 font-medium">
          Currently building scalable realtime systems and AI-powered platforms.
        </p>
        
        <div className="flex justify-center">
          <a href="https://github.com/ashishsingh256259" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors glass-card px-4 py-2 rounded-full border border-white/5 hover:border-white/20">
            <FaGithub size={18} />
            <span className="text-sm">View Source</span>
          </a>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto"></div>

        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          Built by <span className="font-medium text-gray-300 hover:text-accent-cyan transition-colors cursor-pointer">Ashish Singh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
