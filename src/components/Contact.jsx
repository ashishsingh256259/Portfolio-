import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-full max-w-3xl h-96 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Currently exploring new opportunities and open to collaborating on innovative projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 h-full">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question about my projects, want to discuss a potential collaboration, 
                or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:Ashishsingh100580@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent-cyan transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>Ashishsingh100580@gmail.com</span>
                </a>
                
                <a href="https://github.com/ashishsingh256259" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent-cyan transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                    <FaGithub size={20} />
                  </div>
                  <span>github.com/ashishsingh256259</span>
                </a>

                <a href="https://www.linkedin.com/in/ashish-singh-946711367" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent-cyan transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
                    <FaLinkedin size={20} />
                  </div>
                  <span>linkedin.com/in/ashish-singh</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-8 rounded-2xl border border-white/5 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
