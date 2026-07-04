'use client';

import { motion } from 'framer-motion';

export default function SDLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative w-12 h-12 cursor-pointer"
    >
      {/* Background Circle with Gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400"
      />

      {/* Inner Circle */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30" />

      {/* Glowing Center */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent" />

      {/* SD Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 tracking-tight">
          SD
        </span>
      </div>

      {/* Pulse Glow Effect */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border border-cyan-400/30 blur-sm"
      />
    </motion.div>
  );
}
