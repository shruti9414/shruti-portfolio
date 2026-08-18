'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import HeroPremium from './HeroPremium';
import CodeCursor from './CodeCursor';
import Header from './Header';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ProcessSection from './ProcessSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import { projectsData, testimonialsData, experienceData, socialLinks } from '../portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowUp, Send } from 'lucide-react';
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

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection projects={projectsData} />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Process Section */}
      <ProcessSection />

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

      {/* FAQ Section */}
      <FAQSection />

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.a
                href="mailto:shrutidodiya9414@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all duration-300"
              >
                <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">Email</p>
                <p className="text-white/60 text-sm break-all">shrutidodiya9414@gmail.com</p>
              </motion.a>

              <motion.a
                href="https://wa.me/919558463190?text=Hi%20Shruti%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20talk%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all duration-300"
              >
                <MessageCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">WhatsApp</p>
                <p className="text-white/60 text-sm">Chat instantly</p>
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

            {/* Contact Form */}
            <ContactForm />

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-12 mb-4">
              <motion.a
                href="https://linkedin.com/in/shruti-dodiya-585453a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm text-cyan-400 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/shruti9414"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm text-cyan-400 hover:border-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-16 pb-8 border-t border-cyan-500/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <p className="text-white font-bold text-lg mb-2">Shruti Dodiya</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Full Stack Web & App Developer building scalable platforms, mobile apps, and AI-powered product features.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-3 text-sm tracking-wide uppercase">Quick Links</p>
              <ul className="space-y-2 text-sm">
                {['About', 'Services', 'Projects', 'Skills', 'Testimonials', 'FAQ', 'Contact'].map((label) => (
                  <li key={label}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(label.toLowerCase());
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/60 hover:text-cyan-400 transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold mb-3 text-sm tracking-wide uppercase">Get in Touch</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>shrutidodiya9414@gmail.com</li>
                <li>+91 9558463190</li>
                <li>Ahmedabad, Gujarat, India</li>
              </ul>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.name}
                    className="text-white/50 hover:text-cyan-400 transition-colors"
                  >
                    {link.icon === 'Mail' && <Mail size={18} />}
                    {link.icon === 'Phone' && <Phone size={18} />}
                    {link.icon === 'MessageCircle' && <MessageCircle size={18} />}
                    {link.icon === 'Linkedin' && <Linkedin size={18} />}
                    {link.icon === 'Github' && <Github size={18} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-white/60 text-sm">
            <p>© {new Date().getFullYear()} Shruti Dodiya. All rights reserved.</p>
            <p className="text-white/40">Crafted with React • Next.js • Three.js • Lenis • Framer Motion</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-full border border-cyan-500/20 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'your portfolio'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:shrutidodiya9414@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto text-left p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full"
        />
        <input
          type="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full"
        />
      </div>
      <textarea
        required
        rows={4}
        placeholder="Tell me about your project..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full mb-4"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group w-full sm:w-auto relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <span className="relative flex items-center gap-2 justify-center">
          Send Message
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
      <p className="text-white/40 text-xs mt-3">
        Opens your email app with this message pre-filled — or use WhatsApp above for a faster reply.
      </p>
    </form>
  );
}

export default function PremiumPortfolio() {
  return (
    <SmoothScrollProvider>
      <PortfolioContent />
    </SmoothScrollProvider>
  );
}
