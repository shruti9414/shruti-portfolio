'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import HeroPremium from './HeroPremium';
import CodeCursor from './CodeCursor';
import Header from './Header';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import TestimonialsSection from './TestimonialsSection';
import { projectsData, testimonialsData, experienceData } from '../portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import SmoothScrollProvider from './SmoothScrollProvider';
import dynamic from 'next/dynamic';

// Dynamic import for 3D environment (client-side only)
const ScrollEnvironment = dynamic(() => import('./ScrollEnvironment'), {
  ssr: false,
});

function PortfolioContent() {
  const [showLoading, setShowLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Header Navigation */}
      <Header />

      {/* Code Cursor */}
      <CodeCursor />

      {/* 3D Background Environment */}
      {!showLoading && <ScrollEnvironment />}

      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setShowLoading(false)} />


      {/* Premium Hero */}
      <HeroPremium />

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection projects={projectsData} />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 font-semibold text-sm mb-2">PROFESSIONAL JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    <p className="text-white/60 text-sm">{exp.duration} • {exp.location}</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialsSection testimonials={testimonialsData} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-black to-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Extraordinary
              </span>
            </h2>

            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.a
                href="mailto:shrutidodiya9414@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all duration-300"
              >
                <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">Email</p>
                <p className="text-white/60 text-sm">shrutidodiya9414@gmail.com</p>
              </motion.a>

              <motion.a
                href="tel:+919558463190"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all duration-300"
              >
                <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">Phone</p>
                <p className="text-white/60 text-sm">+91 9558463190</p>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              <motion.a
                href="https://linkedin.com/in/shruti-dodiya-585453a"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm text-cyan-400 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm text-cyan-400 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all"
              >
                <Github size={24} />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2 justify-center">
                Start a Project
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-cyan-500/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/60 text-sm">
          <p>© 2026 Shruti Dodiya. All rights reserved.</p>
          <p className="mt-2">Crafted with React • Next.js • Three.js • Lenis • Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default function PremiumPortfolio() {
  return (
    <SmoothScrollProvider>
      <PortfolioContent />
    </SmoothScrollProvider>
  );
}
