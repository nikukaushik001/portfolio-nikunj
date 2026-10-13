import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AmbientParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#d9a441"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingWireframe({
  position,
  color,
  speed = 1,
  scale = 1.3,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.07 * speed;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 * speed) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[scale, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.05} />
    </mesh>
  );
}

function ParallaxRig() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.current.x * 0.4, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.current.y * 0.3, 0.04);
  });

  return null;
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden max-w-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ParallaxRig />
        <AmbientParticles />
        {/* Placed towards distant edges so they never obstruct reading content */}
        <FloatingWireframe position={[-6.8, 2.2, -4]} color="#7fa3c9" speed={0.8} scale={1.8} />
        <FloatingWireframe position={[7.0, -3.2, -3]} color="#d9a441" speed={0.7} scale={1.9} />
      </Canvas>
    </div>
  );
}
