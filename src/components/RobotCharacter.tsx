"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, useCursor } from "@react-three/drei";
import * as THREE from "three";

// The 3D Robot mesh built via procedural components
function AquaBotMesh() {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Make the mouse cursor change when hovering the robot
  useCursor(hovered);

  useFrame((state) => {
    if (!group.current) return;
    
    // Core floating motion
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 2) * 0.1;

    // Follow mouse logic (look towards the cursor)
    const mouseX = (state.pointer.x * Math.PI) / 4;
    const mouseY = (state.pointer.y * Math.PI) / 4;
    
    // Smoothly interpolate rotation towards the mouse
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouseX, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouseY, 0.1);
    
    // If hovered, give it an excited spin or scale bounce
    const targetScale = hovered ? 1.1 : 1;
    group.current.scale.setScalar(
      THREE.MathUtils.lerp(group.current.scale.x, targetScale, 0.1)
    );
  });

  return (
    <group 
      ref={group} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        {/* Main Body (Sleek horizontal pill) */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            roughness={0.1} 
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Squishing the sphere to look like a pill */}
        <group scale={[1.4, 0.8, 1]}>
          <mesh receiveShadow castShadow>
             <sphereGeometry args={[1, 32, 32]} />
             <meshPhysicalMaterial color="#ffffff" metalness={0.5} roughness={0.2} />
          </mesh>

          {/* Central black horizontal line/visor strip */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.005, 0.015, 16, 100]} />
            <meshStandardMaterial color="#111" roughness={0.5} />
          </mesh>
          {/* Central black vertical line */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.005, 0.015, 16, 100]} />
            <meshStandardMaterial color="#111" roughness={0.5} />
          </mesh>
        </group>

        {/* Eyes (Left and Right glowing lenses) */}
        <group position={[-0.5, 0.2, 0.9]} rotation={[-0.1, -0.3, 0]}>
          <mesh>
            <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#00E5FF" />
            <pointLight distance={2} intensity={2} color="#00E5FF" />
          </mesh>
        </group>

        <group position={[0.5, 0.2, 0.9]} rotation={[-0.1, 0.3, 0]}>
          <mesh>
            <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#00E5FF" />
            <pointLight distance={2} intensity={2} color="#00E5FF" />
          </mesh>
        </group>

        {/* Appendages / Side Fins */}
        {[
          [-1.2, -0.4, 0, 0, 0, 0.5],
          [-1.2, 0.4, 0, 0, 0, -0.5],
          [1.2, -0.4, 0, 0, 0, -0.5],
          [1.2, 0.4, 0, 0, 0, 0.5],
        ].map((config, i) => (
           <mesh 
             key={i} 
             position={[config[0], config[1], config[2]]} 
             rotation={[config[3], config[4], config[5]]}
           >
             <boxGeometry args={[0.8, 0.05, 0.2]} />
             <meshPhysicalMaterial color="#ffffff" transmission={0.9} thickness={0.5} opacity={0.8} transparent />
           </mesh>
        ))}
      </Float>
    </group>
  );
}

// Wrapper component to provide the Canvas
export default function RobotCharacter() {
  return (
    <div className="w-full h-full relative z-20 pointer-events-auto cursor-pointer">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#00E5FF" />
        
        {/* Reflection Environment */}
        <Environment preset="city" />
        
        <AquaBotMesh />
        
        {/* Ground shadow beneath the robot */}
        <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
