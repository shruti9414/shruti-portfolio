'use client';

import { useEffect, useRef } from 'react';

export default function CodeCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const symbolRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    const symbol = { x: mouse.x, y: mouse.y };
    let speed = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      const prevRingX = ring.x;
      const prevRingY = ring.y;

      // Dot tracks the raw mouse position exactly — no lag.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
      }

      // Ring eases toward the mouse for a smooth trailing feel.
      ring.x = lerp(ring.x, mouse.x, 0.25);
      ring.y = lerp(ring.y, mouse.y, 0.25);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 12}px, ${ring.y - 12}px, 0)`;
      }

      // Code symbol eases in with a bit more delay for a layered look.
      symbol.x = lerp(symbol.x, mouse.x, 0.15);
      symbol.y = lerp(symbol.y, mouse.y, 0.15);
      if (symbolRef.current) {
        symbolRef.current.style.transform = `translate3d(${symbol.x - 20}px, ${symbol.y - 20}px, 0)`;
      }

      speed = Math.hypot(ring.x - prevRingX, ring.y - prevRingY);
      const active = speed > 1.2;
      if (ringRef.current) ringRef.current.dataset.active = active ? 'true' : 'false';
      if (symbolRef.current) symbolRef.current.style.opacity = active ? '1' : '0.55';

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>

      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 border-2 border-cyan-400 rounded-full z-50 will-change-transform transition-[box-shadow] duration-200"
        style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.2)' }}
        data-active="false"
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full z-50 will-change-transform"
      />

      <div
        ref={symbolRef}
        className="pointer-events-none fixed top-0 left-0 text-cyan-400 font-bold text-xs z-50 will-change-transform transition-opacity duration-200"
      >
        &lt;/&gt;
      </div>

      <style>{`
        [data-active="true"] {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4) !important;
        }
      `}</style>
    </>
  );
}
