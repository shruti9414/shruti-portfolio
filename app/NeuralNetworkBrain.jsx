'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralNetworkBrain() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, down: false });
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseVectorRef = useRef(new THREE.Vector2());
  const cameraRef = useRef(null);
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

    camera.position.z = 6;
    sceneRef.current = scene;
    cameraRef.current = camera;

    const nodeCount = 40;
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.5,
      metalness: 0.6,
      roughness: 0.3,
    });

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2.5 + Math.random() * 1.5;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(x, y, z);
      node.userData = {
        position: new THREE.Vector3(x, y, z),
        originalPosition: new THREE.Vector3(x, y, z),
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
        isHovered: false,
        repelForce: new THREE.Vector3(),
      };

      scene.add(node);
      nodes.push(node);
    }

    nodesRef.current = nodes;

    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 2.5) {
          connectionPositions.push(
            nodes[i].position.x,
            nodes[i].position.y,
            nodes[i].position.z,
            nodes[j].position.x,
            nodes[j].position.y,
            nodes[j].position.z
          );

          nodes[i].userData.connections.push(j);
          nodes[j].userData.connections.push(i);
        }
      }
    }

    connectionGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(connectionPositions), 3));

    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    });

    const connectionLines = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(connectionLines);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 1.2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0891b2, 0.8, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;

      mouseVectorRef.current.x = (mouseRef.current.x / rect.width) * 2 - 1;
      mouseVectorRef.current.y = -(mouseRef.current.y / rect.height) * 2 + 1;

      const targetRotX = (mouseRef.current.y / rect.height - 0.5) * 0.3;
      const targetRotY = (mouseRef.current.x / rect.width - 0.5) * 0.3;

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
        clickedNode.userData.repelForce.copy(clickedNode.position).normalize().multiplyScalar(0.3);
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

      scene.rotation.x = sceneRotationRef.current.x;
      scene.rotation.y = sceneRotationRef.current.y;

      if (!mouseRef.current.down) {
        scene.rotation.x += 0.0001;
        scene.rotation.y += 0.0002;
      }

      nodes.forEach((node, index) => {
        const userData = node.userData;

        userData.pulsePhase += 0.05;
        let pulseScale = 1 + Math.sin(userData.pulsePhase) * 0.2;

        if (userData.isHovered) {
          pulseScale += 0.4;
        }

        if (!userData.isHovered) {
          node.scale.lerp(new THREE.Vector3(pulseScale, pulseScale, pulseScale), 0.1);
        } else {
          node.scale.set(pulseScale, pulseScale, pulseScale);
          node.material.emissiveIntensity = 1;
        }

        let px = userData.originalPosition.x + Math.sin(time * 0.5 + index) * 0.3;
        let py = userData.originalPosition.y + Math.cos(time * 0.7 + index) * 0.3;
        let pz = userData.originalPosition.z + Math.sin(time * 0.3 + index) * 0.2;

        px += userData.repelForce.x;
        py += userData.repelForce.y;
        pz += userData.repelForce.z;

        node.position.set(px, py, pz);
        userData.repelForce.multiplyScalar(0.92);

        if (!userData.isHovered) {
          const connectionCount = userData.connections.length;
          const baseIntensity = 0.3 + (connectionCount / 10) * 0.5;
          node.material.emissiveIntensity =
            baseIntensity + Math.sin(userData.pulsePhase) * 0.3;
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
      connectionGeometry.dispose();
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
