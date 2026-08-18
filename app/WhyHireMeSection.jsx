'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Bot, Network, ShieldCheck, MessagesSquare, LifeBuoy } from 'lucide-react';
import { whyHireMeData } from '../portfolioData';

const ICONS = { CheckCircle2, Layers, Bot, Network, ShieldCheck, MessagesSquare, LifeBuoy };

export default function WhyHireMeSection() {
  return (
    <section id="why-hire-me" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">THE VALUE I BRING</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hire Me?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            What you actually get when you bring me onto your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whyHireMeData.map((item, index) => {
            const Icon = ICONS[item.icon] || CheckCircle2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
