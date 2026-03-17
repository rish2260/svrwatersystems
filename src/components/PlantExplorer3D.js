'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, Html, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function InteractivePlant({ exploded }) {
  const groupRef = useRef()
  
  // Animation logic for exploding
  useFrame((state) => {
    const t = 0.05
    const targetScale = exploded ? 1.5 : 1
    const spread = exploded ? 2 : 0

    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), t)
    
    // Animate children positions based on explode state
    const children = groupRef.current.children
    if(children.length > 0) {
      children[0].position.lerp(new THREE.Vector3(-spread * 1.5, 0, 0), t) // Pump
      children[1].position.lerp(new THREE.Vector3(-spread * 0.5, 0, spread * 0.5), t) // Pre-filter
      children[2].position.lerp(new THREE.Vector3(0, 0, 0), t) // Membrane (Center)
      children[3].position.lerp(new THREE.Vector3(spread * 0.8, spread * 0.5, 0), t) // Gauge
      children[4].position.lerp(new THREE.Vector3(spread * 1.5, -spread * 0.2, -spread * 0.5), t) // Output
    }
  })

  // Component Data
  const [activeNode, setActiveNode] = useState(null)

  const NodeLabel = ({ name, description, ...props }) => (
    <Html distanceFactor={15} {...props}>
      <div 
        style={{ 
          background: 'var(--card-bg)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--accent-cyan)',
          padding: '12px 16px', 
          borderRadius: '8px', 
          color: 'var(--text-primary)',
          opacity: exploded ? 1 : 0,
          pointerEvents: exploded ? 'auto' : 'none',
          transition: 'opacity 0.3s',
          whiteSpace: 'nowrap',
          boxShadow: '0 0 20px var(--glow-color)'
        }}
        onPointerEnter={() => setActiveNode(name)}
        onPointerLeave={() => setActiveNode(null)}
      >
        <div style={{ color: 'var(--accent-cyan)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px' }}>SYS.NODE</div>
        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>{name}</div>
        <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{description}</div>
      </div>
    </Html>
  )

  return (
    <group ref={groupRef}>
      {/* 0. Pump */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.8, 0.6, 0.6]} />
        <meshStandardMaterial color={activeNode === 'High-Pressure Pump' ? '#00e5ff' : '#222'} metalness={0.8} />
        <NodeLabel name="High-Pressure Pump" description="Generates necessary osmotic pressure." position={[0, 0.8, 0]} />
      </mesh>

      {/* 1. Pre-filter */}
      <mesh position={[-0.5, 0.2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1.2, 32]} />
        <meshStandardMaterial color={activeNode === 'Carbon Filter' ? '#00e5ff' : '#111'} metalness={0.9} />
        <NodeLabel name="Carbon Filter" description="Removes chlorine and organics." position={[0, 1.0, 0]} />
      </mesh>

      {/* 2. Membrane Housing */}
      <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 2, 32]} />
        <meshStandardMaterial color="#050505" emissive="#00e5ff" emissiveIntensity={activeNode === 'RO Membrane' ? 2 : 0.5} />
        <NodeLabel name="RO Membrane" description="0.0001 micron semi-permeable core." position={[1, 0.8, 0]} />
      </mesh>

      {/* 3. Gauge */}
      <mesh position={[0, 1, 0]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial color="#fff" emissive={activeNode === 'Pressure Gauge' ? '#00e5ff' : '#000'} emissiveIntensity={1} />
        <NodeLabel name="Pressure Gauge" description="Monitors flow dynamics." position={[0, 0.5, 0]} />
      </mesh>

      {/* 4. Output Storage */}
      <mesh position={[1.8, -0.2, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} clearcoat={1} ior={1.5} />
        <NodeLabel name="Pure Output" description="Ultra-pure water containment." position={[0, 1.2, 0]} />
      </mesh>
    </group>
  )
}

export default function PlantExplorer3D() {
  const [exploded, setExploded] = useState(false)

  return (
    <div style={{ width: '100%', height: '600px', position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--bg-primary)' }}>
      {/* HUD Info */}
      <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10, pointerEvents: 'none' }}>
        <div style={{ color: 'var(--accent-cyan)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="glow-effect" style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)' }}></span>
          Industrial RO Core
        </div>
        <div style={{ color: 'var(--text-primary)', fontSize: '24px', fontFamily: 'monospace', fontWeight: 'bold' }}>
          PLANT EXPLORER
        </div>
      </div>

      {/* Controls */}
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '16px' }}>
        <button 
          className={exploded ? 'btn-primary' : 'btn-secondary'}
          onClick={() => setExploded(!exploded)}
          style={{ padding: '12px 32px', fontSize: '12px' }}
        >
          {exploded ? 'COLLAPSE SYSTEM' : 'EXPLODED VIEW'}
        </button>
      </div>

      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <color attach="background" args={['var(--bg-primary)']} />
        
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[5, 10, 5]} intensity={2} color="var(--accent-cyan)" />
        <directionalLight position={[-8, -5, -5]} intensity={0.5} color="var(--accent-silver)" />
        
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
           <InteractivePlant exploded={exploded} />
        </Float>
        
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={15} blur={4} far={10} color="#00e5ff" />
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          autoRotate={!exploded}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}
