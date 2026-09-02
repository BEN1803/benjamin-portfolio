"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const result: THREE.Vector3[] = [];

    for (let i = 0; i < 45; i++) {
      const x = (seededRandom(i * 3 + 1) - 0.5) * 8;
      const y = (seededRandom(i * 3 + 2) - 0.5) * 6;
      const z = (seededRandom(i * 3 + 3) - 0.5) * 5;

      result.push(new THREE.Vector3(x, y, z));
    }

    return result;
  }, []);

  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];

    nodes.forEach((node, index) => {
      let closestDistance = Infinity;
      let closestNode: THREE.Vector3 | null = null;

      nodes.forEach((otherNode, otherIndex) => {
        if (index === otherIndex) return;

        const distance = node.distanceTo(otherNode);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestNode = otherNode;
        }
      });

      if (closestNode) {
        lines.push([node, closestNode]);
      }
    });

    return lines;
  }, [nodes]);

  const positions = useMemo(() => {
    const array = new Float32Array(nodes.length * 3);

    nodes.forEach((node, index) => {
      array[index * 3] = node.x;
      array[index * 3 + 1] = node.y;
      array[index * 3 + 2] = node.z;
    });

    return array;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Slow rotation
    groupRef.current.rotation.y = time * 0.035;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.08;

    // Subtle mouse movement
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      state.pointer.x * 0.35,
      0.025,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      state.pointer.y * 0.25,
      0.025,
    );
  });

  return (
    <group ref={groupRef}>
      {/* Connections */}
      {connections.map(([start, end], index) => (
        <Line
          key={index}
          points={[start, end]}
          color="#2f7bff"
          transparent
          opacity={0.18}
          lineWidth={0.5}
        />
      ))}

      {/* Nodes */}
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#7dd3fc"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function NetworkScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Network />
      </Canvas>
    </div>
  );
}