'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import TestimonialsSection from './TestimonialsSection';
import { projectsData, testimonialsData, experienceData } from '../portfolioData';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            SD
          </motion.div>
          <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Section - Simplified */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4"
          >
            SHRUTI DODIYA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-400 mb-2 font-semibold"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-slate-300 mb-8"
          >
            Building Scalable Platforms • Node.js • React • React Native
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {['React', 'Node.js', 'Next.js', 'Laravel', 'MySQL', 'React Native'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-400 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-cyan-400 font-semibold text-sm mb-4">ABOUT ME</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Enterprise Platforms</span>
              </h2>
              <p className="text-lg text-slate-300 mb-4">
                Full Stack Developer with 1.5+ years of hands-on experience building scalable enterprise platforms.
              </p>
              <p className="text-slate-400 mb-6">
                Specialized in backend architecture (Node.js, Laravel) and full-stack marketplace solutions handling 100K+ users.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '250K+', label: 'Users Served' },
                { value: '40+', label: 'APIs Built' },
                { value: '$50K+', label: 'MRR' },
                { value: '99.5%', label: 'Uptime' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800 border border-slate-700 text-center"
                >
                  <p className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projectsData} />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-6">
            {experienceData.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{exp.duration}</span>
                </div>
                <p className="text-slate-300 mb-3">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* Contact */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:shrutidodiya9414@gmail.com"
              className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all"
            >
              <Mail className="text-cyan-400 mb-3" size={28} />
              <p className="font-semibold text-white">Email</p>
              <p className="text-slate-400 text-sm">shrutidodiya9414@gmail.com</p>
            </a>

            <a
              href="tel:+919558463190"
              className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all"
            >
              <Phone className="text-cyan-400 mb-3" size={28} />
              <p className="font-semibold text-white">Phone</p>
              <p className="text-slate-400 text-sm">+91 9558463190</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/shruti-dodiya-585453a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 text-cyan-400"
            >
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-4 rounded-full bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 text-cyan-400">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950 text-center text-slate-400">
        <p>© 2026 Shruti Dodiya. All rights reserved.</p>
      </footer>
    </div>
  );
}
