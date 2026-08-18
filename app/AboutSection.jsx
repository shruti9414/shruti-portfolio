'use client';

import { motion } from 'framer-motion';
import { aboutData } from '../portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Avatar + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/10 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40">
                <img
                  src="/profile.jpg"
                  alt="Shruti Dodiya"
                  className="w-full h-full object-cover object-center scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-full h-full items-center justify-center hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/10"
                  style={{ display: 'none' }}
                >
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                    SD
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {aboutData.quickFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-700/50"
                >
                  <span className="text-slate-400 text-sm">{fact.label}</span>
                  <span className="text-white text-sm font-medium text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="text-xl text-white font-medium leading-relaxed mb-4">{aboutData.intro}</p>
            <p className="text-slate-400 leading-relaxed mb-8">{aboutData.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/40 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
