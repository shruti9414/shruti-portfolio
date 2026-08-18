'use client';

import { motion } from 'framer-motion';
import { processData } from '../portfolioData';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">HOW I WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transparent Process</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No surprises — here's exactly what working together looks like.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-cyan-500/40 via-cyan-500/40 to-blue-500/40" />

          {processData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg shadow-cyan-500/30">
                {step.step}
              </div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
