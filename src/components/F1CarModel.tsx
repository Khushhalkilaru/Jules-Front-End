"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, ContactShadows, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CarMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Chassis - Sleeker and more contoured */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[4.2, 0.4, 1.2]} />
        <meshStandardMaterial color="#E80020" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Nose cone */}
      <mesh position={[2.4, -0.05, 0]} castShadow>
        <boxGeometry args={[0.8, 0.2, 0.6]} />
        <meshStandardMaterial color="#E80020" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Sidepods */}
      {[0.7, -0.7].map((z, i) => (
        <mesh key={i} position={[0, 0.1, z]} castShadow>
          <boxGeometry args={[2.5, 0.5, 0.6]} />
          <meshStandardMaterial color="#E80020" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}

      {/* Front Wing - More detailed */}
      <group position={[2.8, -0.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.05, 2.2]} />
          <meshStandardMaterial color="#111" metalness={1} roughness={0} />
        </mesh>
        {/* Endplates */}
        {[1.05, -1.05].map((z, i) => (
          <mesh key={i} position={[0, 0.1, z]} castShadow>
            <boxGeometry args={[0.6, 0.3, 0.05]} />
            <meshStandardMaterial color="#111" />
          </mesh>
        ))}
      </group>

      {/* Rear Wing - More detailed DRS look */}
      <group position={[-1.9, 0.6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.05, 1.8]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        {/* Rear Wing Endplates */}
        {[0.85, -0.85].map((z, i) => (
          <mesh key={i} position={[0, -0.3, z]} castShadow>
            <boxGeometry args={[0.8, 0.8, 0.05]} />
            <meshStandardMaterial color="#111" />
          </mesh>
        ))}
        {/* Support columns */}
        <mesh position={[0, -0.3, 0]} castShadow>
          <boxGeometry args={[0.1, 0.6, 0.4]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </group>

      {/* Wheels - With "Rim" detail */}
      {[
        [1.6, -0.15, 1.0], [1.6, -0.15, -1.0],
        [-1.6, -0.15, 1.0], [-1.6, -0.15, -1.0]
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          {/* Tyre */}
          <mesh castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.45, 32]} />
            <meshStandardMaterial color="#111" roughness={0.8} />
          </mesh>
          {/* Rim */}
          <mesh position={[0, 0.23, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
            <meshStandardMaterial color="#333" metalness={0.8} />
          </mesh>
          <mesh position={[0, -0.23, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
            <meshStandardMaterial color="#333" metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Halo Protection System */}
      <mesh position={[0.4, 0.45, 0]} rotation={[0, 0, -0.2]} castShadow>
        <torusGeometry args={[0.35, 0.04, 16, 100, Math.PI + 0.5]} />
        <meshStandardMaterial color="#222" metalness={1} />
      </mesh>

      {/* Engine Cover / Shark Fin */}
      <mesh position={[-0.8, 0.45, 0]} castShadow>
        <boxGeometry args={[1.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#E80020" metalness={0.9} />
      </mesh>
    </group>
  );
}

export default function F1CarModel() {
  return (
    <div className="h-[500px] w-full bg-transparent">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[6, 3, 6]} fov={40} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
        />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <Environment preset="city" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <CarMesh />
        </Float>

        <ContactShadows position={[0, -0.65, 0]} opacity={0.6} scale={10} blur={2} far={1} />
        
        {/* Ground grid for perspective */}
        <gridHelper args={[20, 20, 0x333333, 0x111111]} position={[0, -0.66, 0]} />
      </Canvas>
    </div>
  );
}
