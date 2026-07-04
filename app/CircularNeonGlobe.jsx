'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CircularNeonGlobe() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, down: false });
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseVectorRef = useRef(new THREE.Vector2());
  const sceneRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 3.5;

    // Create circular orbits with glowing lines
    const orbits = [];
    const orbitCount = 4;

    for (let i = 0; i < orbitCount; i++) {
      const radius = 0.8 + i * 0.35;
      const points = [];

      // Create orbit curve
      for (let j = 0; j <= 64; j++) {
        const angle = (j / 64) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.sin(angle * 0.5) * 0.3;
        points.push(new THREE.Vector3(x, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.7,
        linewidth: 2,
      });

      const orbit = new THREE.Line(geometry, material);
      orbit.userData = {
        speed: [0.008, -0.012, 0.015, -0.018][i],
        axis: [new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0.5).normalize()][i],
      };
      scene.add(orbit);
      orbits.push({
        mesh: orbit,
        radius: radius,
        speed: orbit.userData.speed,
        axis: orbit.userData.axis,
      });
    }

    // Create nodes on orbits
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.08, 12, 12);

    for (let i = 0; i < orbitCount; i++) {
      const radius = 0.8 + i * 0.35;
      const nodeCountPerOrbit = 8 + i * 2;

      for (let j = 0; j < nodeCountPerOrbit; j++) {
        const initialAngle = (j / nodeCountPerOrbit) * Math.PI * 2;

        const nodeMaterial = new THREE.MeshStandardMaterial({
          color: 0x06b6d4,
          emissive: 0x06b6d4,
          emissiveIntensity: 0.6,
          metalness: 0.7,
          roughness: 0.2,
        });

        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.userData = {
          orbitIndex: i,
          orbitRadius: radius,
          nodeIndex: j,
          initialAngle: initialAngle,
          isHovered: false,
          repelForce: new THREE.Vector3(),
        };

        scene.add(node);
        nodes.push(node);
      }
    }

    // Central glowing sphere
    const coreGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 1,
      metalness: 0.8,
      roughness: 0.1,
    });

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Outer glow sphere
    const glowGeometry = new THREE.SphereGeometry(0.32, 24, 24);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.15,
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0891b2, 1.5, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Mouse events
    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;

      mouseVectorRef.current.x = (mouseRef.current.x / rect.width) * 2 - 1;
      mouseVectorRef.current.y = -(mouseRef.current.y / rect.height) * 2 + 1;

      const targetRotX = (mouseRef.current.y / rect.height - 0.5) * 0.4;
      const targetRotY = (mouseRef.current.x / rect.width - 0.5) * 0.4;

      sceneRotationRef.current.x += (targetRotX - sceneRotationRef.current.x) * 0.1;
      sceneRotationRef.current.y += (targetRotY - sceneRotationRef.current.y) * 0.1;

      raycasterRef.current.setFromCamera(mouseVectorRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(nodes);

      nodes.forEach((node) => {
        node.userData.isHovered = false;
      });

      if (intersects.length > 0) {
        intersects[0].object.userData.isHovered = true;
      }
    };

    const handleMouseDown = () => {
      mouseRef.current.down = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.down = false;
    };

    const handleClick = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseVectorRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVectorRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseVectorRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(nodes);

      if (intersects.length > 0) {
        const clickedNode = intersects[0].object;
        clickedNode.userData.repelForce.copy(clickedNode.position).normalize().multiplyScalar(0.4);
      }
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    containerRef.current.addEventListener('mouseup', handleMouseUp);
    containerRef.current.addEventListener('click', handleClick);

    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Always auto-rotate smoothly
      sceneRotationRef.current.x += 0.0003;
      sceneRotationRef.current.y += 0.0006;

      // Override with mouse control if dragging
      if (mouseRef.current.down) {
        const rect = containerRef.current.getBoundingClientRect();
        const targetRotX = (mouseRef.current.y / rect.height - 0.5) * 0.4;
        const targetRotY = (mouseRef.current.x / rect.width - 0.5) * 0.4;
        sceneRotationRef.current.x += (targetRotX - sceneRotationRef.current.x) * 0.15;
        sceneRotationRef.current.y += (targetRotY - sceneRotationRef.current.y) * 0.15;
      }

      scene.rotation.x = sceneRotationRef.current.x;
      scene.rotation.y = sceneRotationRef.current.y;

      // Animate orbits with independent rotations
      orbits.forEach((orbit, idx) => {
        orbit.mesh.rotateOnWorldAxis(orbit.axis, orbit.speed);
      });

      // Animate core
      core.scale.set(
        1 + Math.sin(time * 0.5) * 0.15,
        1 + Math.sin(time * 0.5) * 0.15,
        1 + Math.sin(time * 0.5) * 0.15
      );

      // Animate glow
      glow.scale.set(
        1 + Math.cos(time * 0.3) * 0.2,
        1 + Math.cos(time * 0.3) * 0.2,
        1 + Math.cos(time * 0.3) * 0.2
      );

      // Animate nodes - make them orbit around each ring
      nodes.forEach((node, index) => {
        const userData = node.userData;
        const orbData = orbits[userData.orbitIndex];
        const radius = userData.orbitRadius;

        // Calculate position along the orbit (nodes orbit within their ring)
        const nodeOrbitSpeed = userData.nodeIndex * 0.15;
        const currentAngle = userData.initialAngle + time * 0.04 + nodeOrbitSpeed;

        const x = Math.cos(currentAngle) * radius;
        const y = Math.sin(currentAngle) * radius;
        const z = Math.sin(currentAngle * 0.5) * 0.2;

        // Create position in orbit space
        const orbitPos = new THREE.Vector3(x, y, z);

        // Apply orbit rotation to the position
        const rotMatrix = new THREE.Matrix4();
        rotMatrix.makeRotationAxis(orbData.axis, time * orbData.speed);
        orbitPos.applyMatrix4(rotMatrix);

        // Apply repel force
        orbitPos.add(userData.repelForce);
        node.position.copy(orbitPos);
        userData.repelForce.multiplyScalar(0.85);

        // Hover effect
        if (userData.isHovered) {
          node.scale.set(1.5, 1.5, 1.5);
          node.material.emissiveIntensity = 1.1;
        } else {
          const targetScale = 1 + Math.sin(time * 0.8 + index) * 0.15;
          node.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
          node.material.emissiveIntensity = 0.6 + Math.sin(time * 0.5 + index) * 0.3;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mousedown', handleMouseDown);
      containerRef.current?.removeEventListener('mouseup', handleMouseUp);
      containerRef.current?.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      nodeGeometry.dispose();
      coreGeometry.dispose();
      glowGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-pointer"
      style={{ minHeight: '400px' }}
    />
  );
}
