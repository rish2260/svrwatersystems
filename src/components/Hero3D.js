'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CinematicScene() {
  const sphereRef = useRef()
  const plantRef = useRef()
  const groupRef = useRef()

  // Connect scroll to animation logic seamlessly in the render loop
  useFrame((state, delta) => {
    const scrollY = window.scrollY
    // Break distance: full transformation at 600px
    const progress = Math.min(scrollY / 600, 1)

    if (groupRef.current) {
      // Rotate the entire scene slightly based on time
      groupRef.current.rotation.y += delta * 0.15
    }

    if (sphereRef.current) {
      // As scroll progress goes from 0 -> 1:
      // Sphere scale explodes outward: 1.8 -> 4.5
      const targetSphereScale = 1.8 + (progress * 2.7)
      sphereRef.current.scale.lerp(new THREE.Vector3(targetSphereScale, targetSphereScale, targetSphereScale), 0.1)
      
      // Sphere material fades out: opacity 1 -> 0
      sphereRef.current.material.opacity = THREE.MathUtils.lerp(sphereRef.current.material.opacity, 1 - progress, 0.1)
      sphereRef.current.material.transparent = true
    }

    if (plantRef.current) {
      // Plant scales up: 0.6 -> 1.5
      const targetPlantScale = 0.6 + (progress * 0.9)
      plantRef.current.scale.lerp(new THREE.Vector3(targetPlantScale, targetPlantScale, targetPlantScale), 0.1)
      
      // Plant rotates to face camera more directly as it breaks
      plantRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer liquid containment sphere */}
      <mesh ref={sphereRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#000000"
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0}
          radius={1}
          distort={0.4}
          transmission={0.9}
          speed={1.5}
          ior={1.33}
        />
      </mesh>

      {/* Inner machinery representing the RO Core */}
      <group ref={plantRef} scale={0.6}>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
          <meshStandardMaterial color="#222" metalness={0.8} />
        </mesh>
        
        {/* Reactor Center */}
        <mesh position={[-0.5, 0.4, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 1.8, 32]} />
          <meshPhysicalMaterial color="#ffffff" transmission={0.5} roughness={0.1} clearcoat={1} />
        </mesh>
        
        {/* Main glowing membrane */}
        <mesh position={[0.5, 0.4, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial color="#000000" emissive="#00e5ff" emissiveIntensity={3} />
        </mesh>
        
        {/* Interconnects */}
        <mesh position={[0, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#e5e7eb" metalness={1} />
        </mesh>
        
        <Particles count={30} scale={0.8} />
      </group>
    </group>
  )
}

function Particles({ count = 50, scale = 2 }) {
  const particlesRef = useRef()
  
  useFrame((state) => {
    const scrollY = window.scrollY
    const progress = Math.min(scrollY / 600, 1)

    if (particlesRef.current) {
      // Particles spin outward when sphere breaks
      particlesRef.current.rotation.y = state.clock.elapsedTime * (0.2 + progress)
      
      particlesRef.current.children.forEach((p, i) => {
        p.position.y += Math.sin(state.clock.elapsedTime + i) * 0.005
        p.material.emissiveIntensity = 4 + (progress * 6) // Glow brighter when exposed
      })
    }
  })

  return (
    <group ref={particlesRef} scale={scale}>
      {[...Array(count)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 2.5, 
            (Math.random() - 0.5) * 2.5, 
            (Math.random() - 0.5) * 2.5
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#00e5ff" emissiveIntensity={4} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      {/* 
        We disable zoom and pan to make the interaction purely visual. 
        Scroll tracking handles the actual animation inside useFrame gracefully.
      */}
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} color="#ffffff" />
        <spotLight position={[5, 10, 5]} angle={0.6} penumbra={1} intensity={4} color="#00e5ff" />
        <spotLight position={[-8, -5, -5]} angle={0.8} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#c0c0c0" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <CinematicScene />
        </Float>
        
        <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={15} blur={4} far={10} color="#00e5ff" />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
