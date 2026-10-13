import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 700;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#d9a441" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Icosahedron({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.09;
      ref.current.rotation.y = state.clock.elapsedTime * 0.13;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  );
}

// Renders a subtle ambient 3D background: drifting particles + wireframe solids.
// Respects prefers-reduced-motion by not mounting (see App.tsx).
export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 52 }} dpr={[1, 1.6]}>
        <Particles />
        <Icosahedron position={[-4.4, 1.1, -3]} color="#7fa3c9" />
        <Icosahedron position={[4.6, -1.7, -1.6]} color="#d9a441" />
      </Canvas>
    </div>
  );
}
