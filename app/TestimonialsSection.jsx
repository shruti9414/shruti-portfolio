import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm mb-2">RECOMMENDATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-lg md:text-xl text-white italic mb-4">
                  "{testimonials[current].text}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{testimonials[current].author}</p>
                  <p className="text-sm text-cyan-400">{testimonials[current].title}</p>
                  <p className="text-xs text-slate-400">{testimonials[current].company}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">{testimonials[current].author.charAt(0)}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-cyan-400 w-8' : 'bg-slate-600 w-2 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-slate-400 text-sm">
            {current + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
