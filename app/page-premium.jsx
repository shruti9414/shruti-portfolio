'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import HeroPremium from './HeroPremium';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import TestimonialsSection from './TestimonialsSection';
import { projectsData, testimonialsData, experienceData } from '../portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function PremiumPortfolio() {
  const [showLoading, setShowLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setShowLoading(false)} />

      {/* Cursor Glow Effect */}
      {!showLoading && (
        <motion.div
          className="pointer-events-none fixed w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl z-40"
          animate={{
            x: mousePos.x - 64,
            y: mousePos.y - 64,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        />
      )}

      {/* Premium Hero */}
      <HeroPremium />

      {/* About Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left */}
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"
              ></motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About Me</h2>

              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Full Stack Developer with 1.5+ years of hands-on experience building scalable enterprise platforms. Specialized in backend architecture (Node.js, Laravel) and full-stack marketplace solutions handling 100K+ users.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Experience', value: '1.5+ Years' },
                  { label: 'Users Served', value: '250K+' },
                  { label: 'Projects', value: '10+' },
                  { label: 'Technologies', value: '15+' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{stat.value[0]}</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                      <p className="text-white font-semibold">{stat.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {[
                { category: 'Backend', skills: ['Node.js', 'Laravel', 'REST APIs', 'MySQL'] },
                { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
                { category: 'Mobile', skills: ['React Native', 'iOS', 'Android', 'Firebase'] },
              ].map((skillGroup, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h3 className="text-cyan-400 font-semibold mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projectsData} />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-16"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experienceData.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-white/60 text-sm mt-2 md:mt-0">{exp.duration}</span>
                </div>

                <p className="text-white/70 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.slice(0, 3).map((achievement, j) => (
                    <li key={j} className="text-white/60 text-sm flex gap-2">
                      <span className="text-cyan-400">→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* Contact Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
                whileHover={{ scale: 1.05 }}
                className="group p-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300"
              >
                <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">Email</p>
                <p className="text-white/60 text-sm">shrutidodiya9414@gmail.com</p>
              </motion.a>

              <motion.a
                href="tel:+919558463190"
                whileHover={{ scale: 1.05 }}
                className="group p-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300"
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
                className="p-4 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <Github size={24} />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden"
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
          <p className="mt-2">Crafted with React • Next.js • Three.js • Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
