'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CodeCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      setTimeout(() => setIsMoving(false), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Main Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed w-6 h-6 border-2 border-cyan-400 rounded-full z-50"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          boxShadow: isMoving
            ? '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)'
            : '0 0 10px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.2)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed w-2 h-2 bg-cyan-400 rounded-full z-50"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isMoving ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* Code Symbol < > */}
      <motion.div
        className="pointer-events-none fixed text-cyan-400 font-bold text-xs z-50"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          opacity: isMoving ? 1 : 0.6,
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        &lt;/&gt;
      </motion.div>

      {/* Trailing Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed w-1 h-1 bg-cyan-400 rounded-full z-40"
          animate={{
            x: mousePos.x + (Math.random() - 0.5) * 20,
            y: mousePos.y + (Math.random() - 0.5) * 20,
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}
