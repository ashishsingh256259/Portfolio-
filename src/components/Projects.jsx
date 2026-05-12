import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Code2, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const featuredProjects = [
  {
    title: "FORGE — AI Career Ecosystem",
    description: "An AI-powered career ecosystem helping students identify skill gaps, optimize resumes, generate learning roadmaps, and connect with recruiters through an integrated hiring platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    tech: ["React.js", "Firebase", "Node.js", "Tailwind CSS", "AI APIs"],
    live: "https://forgee-mentor.vercel.app/",
    github: "https://github.com/ashishsingh256259/Mentor.git",
    features: ["AI mentor integration", "ATS resume analysis", "Skill-gap analysis", "Recruiter dashboard"],
    architecture: ["AI-integrated workflow systems", "Recruiter/student role-based architecture", "Analytics-driven dashboard structure", "Modular frontend/backend workflow"]
  },
  {
    title: "Realtime Collaboration Workspace",
    description: "A full-stack collaborative productivity platform built using React, Node.js, Socket.IO, and MongoDB. The platform enables users to create shared rooms, communicate in realtime, collaborate on tasks, and manage synchronized workspace activities with instant updates across connected users. The system implements realtime bidirectional communication using Socket.IO, room-based collaboration architecture, live online presence tracking, typing indicators, and persistent message storage. The project focuses on realtime systems engineering, scalable event-driven communication, and collaborative application architecture.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    tech: ["React.js", "Vite", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Firebase"],
    live: "https://github.com/ashishsingh256259/Realtime-Workspace.git",
    github: "https://github.com/ashishsingh256259/Realtime-Workspace.git",
    features: ["Realtime room-based messaging", "Live online users and typing indicators", "Shared collaboration workspace", "Persistent chat storage with MongoDB", "Responsive modern SaaS-style UI", "Socket.IO realtime synchronization", "Authentication-ready architecture", "Reusable frontend/backend modular structure"],
    architecture: ["Socket.IO realtime synchronization", "Room-based communication architecture", "Persistent MongoDB storage", "Event-driven system design"]
  },
  {
    title: "Smart Parking System",
    description: "AI-powered smart parking guidance system using A* Search and Bayesian reasoning to identify the shortest and most reliable parking path in smart city environments.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070",
    tech: ["React.js", "JavaScript", "A* Algorithm", "Bayesian Networks"],
    live: "https://smart-parking-system-fawn.vercel.app/",
    github: "https://github.com/ashishsingh256259/Smart-Parking-System.git",
    features: ["A* shortest path search", "Bayesian slot prediction", "Graph-based parking model"],
    architecture: ["Realtime slot monitoring", "Interactive parking visualization", "Smart dashboard architecture", "Scalable UI workflow"]
  }
];

const otherProjects = [
  {
    title: "UniConnect",
    description: "Academic Communication Platform reducing gaps between students and teachers using notices, anonymous doubts, polls, and messaging systems.",
    tech: ["Web Technologies", "Real-time updates"],
    live: "https://ashishsingh256259.github.io/uniconnet/",
    github: "https://github.com/ashishsingh256259/uniconnet.git"
  },
  {
    title: "CouponDS",
    description: "DSA-Based Coupon Management System. Interactive DSA visualization platform demonstrating real-world applications of hash tables, queues, stacks, and linked lists.",
    tech: ["Data Structures", "Algorithms", "JavaScript"],
    live: "https://ashishsingh256259.github.io/coupon_management",
    github: "https://github.com/ashishsingh256259/coupon_management.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-cyan rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <div className="glass-card p-6 rounded-xl relative">
                  <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Activity size={16} className="text-accent-cyan" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.architecture && (
                  <div className="space-y-4 pt-2">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                      <Layers size={16} className="text-purple-400" /> Architecture Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.architecture.map(arch => (
                        <span key={arch} className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300 hover:border-purple-400/50 hover:text-white transition-colors">
                          {arch}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-accent-cyan">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-sm font-medium">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass hover:bg-white/10 transition-colors text-sm font-medium">
                    <FaGithub size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-2">More Explorations</h3>
          <p className="text-gray-400">Other technical projects and experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                    {t}
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

export default Projects;
