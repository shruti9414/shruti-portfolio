'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Plug, Bot, Atom, Server, Bug, Wrench, Check } from 'lucide-react';
import { servicesData } from '../portfolioData';

const ICONS = { Code2, Smartphone, Plug, Bot, Atom, Server, Bug, Wrench };

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">WHAT I OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Product</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From a single feature to a full platform — here's how I can help you ship it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = ICONS[service.icon] || Code2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
