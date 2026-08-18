'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../portfolioData';

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border border-slate-700 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold">{item.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-cyan-400 flex-shrink-0">
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-20 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">GOT QUESTIONS?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
