'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import CircularNeonGlobe from './CircularNeonGlobe';

export default function HeroPremium() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '10%', left: '10%' }}
        ></motion.div>

        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '10%', right: '10%' }}
        ></motion.div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0, typeof window !== 'undefined' ? Math.random() * window.innerHeight - 500 : -500],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="z-10"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-7xl md:text-8xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              SHRUTI
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                DODIYA
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full-Stack Web & Mobile Developer <span className="text-white/40 font-normal">|</span> React, Node.js, Laravel & AI
            </motion.p>

            {/* Company & Description */}
            <motion.div
              className="mb-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                I build production-ready web and mobile products — from React/Next.js frontends to Node.js/Laravel backends and AI-powered features — for businesses that need to ship fast without cutting corners. Currently building enterprise-grade platforms at
                <span className="text-cyan-400 font-semibold"> House of Cre8r</span>.
              </p>

              <div className="space-y-2 text-white/70 text-sm border-l-2 border-cyan-500/50 pl-4">
                <p>🏢 <span className="text-white">House of Cre8r</span> — Enterprise Full Stack Developer (Jul 2025 - Present)</p>
                <p>📱 <span className="text-white">TransRentals</span> — 50K+ users, B2B2C rental platform</p>
                <p>🛍️ <span className="text-white">Ecommarkt</span> — 200K+ users, 5000+ sellers marketplace</p>
                <p>🎓 <span className="text-white">BCA Graduate</span> — Som-Lalit Institute (95/100 capstone)</p>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              {['React', 'Node.js', 'Next.js', 'PHP', 'TypeScript'].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-medium backdrop-blur-sm bg-cyan-500/5 hover:border-cyan-400 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Hire Me
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                View My Work
              </button>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-white/15 text-white/80 font-semibold rounded-lg hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - AI Brain Neural Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
          >
            {/* 3D Circular Neon Globe */}
            <CircularNeonGlobe />

            {/* Floating Info Cards */}
            <motion.div
              className="absolute top-8 right-8 px-6 py-4 rounded-xl border border-cyan-500/30 bg-black/40 backdrop-blur-xl text-cyan-400 text-xs font-mono"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <p>House of Cre8r</p>
              <p className="text-white/60 mt-1">Full Stack Developer</p>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 px-6 py-4 rounded-xl border border-cyan-500/30 bg-black/40 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <p className="text-cyan-400 font-bold">200K+</p>
              <p className="text-white/60 text-xs mt-1">Users Built</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-cyan-400/60 text-center">
          <p className="text-sm font-medium mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
