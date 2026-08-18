'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  // Always starts true so server and client render the same thing on first
  // paint (avoids a hydration mismatch) — the session check below then skips
  // the animation immediately after mount if it's already been shown.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('sd-portfolio-loaded') === 'true') {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('sd-portfolio-loaded', 'true');
      setIsLoading(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                top: [`${randomY}%`, `${randomY - 20}%`],
              }}
              transition={{
                duration: 3,
                delay: i * 0.05,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Glowing Circle */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30"></div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          ></motion.div>

          {/* Center Glow */}
          <motion.div
            className="absolute inset-2 rounded-full bg-cyan-400/20 blur-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </motion.div>

        {/* Text */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Welcome to
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          SHRUTI'S PORTFOLIO
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          className="text-cyan-400/60 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          INITIALIZING...
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          className="w-48 h-0.5 bg-slate-800 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
