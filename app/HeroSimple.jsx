'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const HeroSimple = ({ bgPhoto, noBgPhoto }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Simple Three.js scene with particles only (no photo)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x06B6D4,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    const light = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 overflow-hidden">
      {/* 3D Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Content Grid */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                SHRUTI DODIYA
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-cyan-400 mb-2 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-slate-300 mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Building Scalable Platforms • Backend (Node.js, Laravel) • React & React Native
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {['React', 'Node.js', 'Next.js', 'Laravel', 'MySQL', 'React Native'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/50 text-cyan-400 text-sm font-medium hover:border-cyan-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  View Projects
                </button>
                <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300">
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Glassmorphism Card */}
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-cyan-500/40 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group">
                  {noBgPhoto ? (
                    <>
                      <img
                        src={noBgPhoto}
                        alt="Shruti Dodiya"
                        className="w-full h-full object-cover"
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/0 via-cyan-600/0 to-cyan-600/20 pointer-events-none" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 via-slate-800/50 to-blue-900/30 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-30"></div>

                      {/* Placeholder Content */}
                      <div className="text-center relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>

                        <p className="text-slate-100 text-sm font-semibold mb-1">Your Photo Here</p>
                        <p className="text-slate-400 text-xs mb-4">Add photo-no-bg.png to public/</p>

                        {/* Instructions */}
                        <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/20">
                          <p className="text-cyan-300 text-xs font-mono">photo-no-bg.png</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-xl group-hover:shadow-cyan-500/20 transition-all duration-500"></div>
                </div>

                {/* Floating Animation */}
                <style>{`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                  }
                  .animate-float {
                    animation: float 3s ease-in-out infinite;
                  }
                `}</style>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-96 rounded-2xl" style={{
                    animation: 'float 3s ease-in-out infinite',
                  }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-cyan-400 text-center">
          <p className="text-sm font-medium mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSimple;
