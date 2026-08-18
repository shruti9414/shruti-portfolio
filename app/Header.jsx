'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import SDLogo from './SDLogo';
import { navigationItems, socialLinks } from '../portfolioData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [{ label: 'Home', id: 'hero' }, ...navigationItems];
  const githubUrl = socialLinks.find((l) => l.name === 'GitHub')?.url;
  const linkedinUrl = socialLinks.find((l) => l.name === 'LinkedIn')?.url;

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full"
          aria-label="Go to top"
        >
          <SDLogo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ color: '#06b6d4' }}
              className="text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-white/70 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Github size={18} />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-white/70 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Linkedin size={18} />
            </a>
          )}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-white/70 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Download size={16} />
            Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 border-t border-cyan-500/20 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6" aria-label="Mobile">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 10 }}
                  className="text-left text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-cyan-400 transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {linkedinUrl && (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-cyan-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold text-center"
              >
                Hire Me
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
