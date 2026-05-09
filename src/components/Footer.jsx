import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          Built by <span className="font-medium text-white hover:text-accent-cyan transition-colors cursor-pointer">Ashish Singh</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
