'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ScrollEnvironment() {
  const containerRef = useRef(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 8;

    // Create 3D dots/particles representing connections (network of knowledge)
    const dotsGeometry = new THREE.BufferGeometry();
    const dotCount = 150;
    const posArray = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 30;
      posArray[i + 1] = (Math.random() - 0.5) * 30;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
    }

    dotsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const dotsMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(dots);

    // Create geometric shapes representing tech stack
    const geometries = [];
    const meshes = [];

    // Cube (Backend/API)
    const cubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x0891b2,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.3,
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    cube.position.set(-6, 0, 0);
    scene.add(cube);
    geometries.push(cubeGeo);
    meshes.push(cube);

    // Octahedron (Frontend/UI)
    const octaGeo = new THREE.OctahedronGeometry(1, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.8,
      roughness: 0.1,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.4,
    });
    const octahedron = new THREE.Mesh(octaGeo, octaMat);
    octahedron.position.set(0, 0, 0);
    scene.add(octahedron);
    geometries.push(octaGeo);
    meshes.push(octahedron);

    // Icosahedron (Mobile)
    const icosaGeo = new THREE.IcosahedronGeometry(1, 0);
    const icosaMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.3,
    });
    const icosahedron = new THREE.Mesh(icosaGeo, icosaMat);
    icosahedron.position.set(6, 0, 0);
    scene.add(icosahedron);
    geometries.push(icosaGeo);
    meshes.push(icosahedron);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 1.5, 200);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Handle scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = docHeight > 0 ? scrollTop / docHeight : 0;
    };

    // Animation loop
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.002;

      // Rotate dots based on scroll
      dots.rotation.x += 0.0001;
      dots.rotation.y += scrollProgress.current * 0.01;

      // Rotate shapes
      cube.rotation.x += 0.003 + scrollProgress.current * 0.005;
      cube.rotation.y += 0.004 + scrollProgress.current * 0.005;

      octahedron.rotation.x += 0.005;
      octahedron.rotation.y += 0.003 + scrollProgress.current * 0.01;
      octahedron.position.y = Math.sin(time) * 0.5;

      icosahedron.rotation.x += 0.002 + scrollProgress.current * 0.005;
      icosahedron.rotation.y += 0.006;
      icosahedron.position.y = Math.cos(time) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('scroll', handleScroll);
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      geometries.forEach((g) => g.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0e27 100%)' }}
    />
  );
}
