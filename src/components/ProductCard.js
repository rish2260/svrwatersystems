'use client'

import { useState, Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Image from 'next/image'

function ProductPlaceholder3D() {
  const meshRef = useRef()
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <group ref={meshRef}>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1, 1, 3, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.4, 32]} />
        <meshStandardMaterial color="#00e5ff" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
    </group>
  )
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#00e5ff" wireframe />
    </mesh>
  )
}

export default function ProductCard({ title, price, category, imageUrl }) {
  const [hovered, setHover] = useState(false)
  const [show3D, setShow3D] = useState(false)

  const handleBuyNow = () => {
    // Built-in redirect to WhatsApp rather than an old website link.
    const message = `Hello SVR Systems, I am interested in buying the ${title} (Price: ${price}). Please provide more details.`
    const whatsappUrl = `https://wa.me/918327818181?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div 
        className="glass-panel product-card"
        style={{
          padding: '32px 24px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'var(--btn-primary-bg)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s'
        }} />

        {/* Product Image Area with Glow and Reflection */}
        <div style={{ 
          marginBottom: '28px', 
          borderRadius: '16px', 
          height: '240px', 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 70%)',
          perspective: '1000px'
        }}>
          {/* Subtle reflection floor */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            width: '80%',
            height: '40px',
            background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.2) 0%, transparent 60%)',
            transform: 'rotateX(75deg)',
            opacity: 0.8
          }}></div>

          <div className="product-image-container" style={{ 
            position: 'relative', 
            width: '90%', 
            height: '90%', 
            zIndex: 1,
            filter: hovered ? 'drop-shadow(0px 0px 20px var(--glow-color))' : 'drop-shadow(0px 0px 10px var(--shadow-color))'
          }}>
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        <div>
          <span style={{ 
            display: 'inline-block',
            color: 'var(--accent-cyan)', 
            fontSize: '11px', 
            fontWeight: 800, 
            letterSpacing: '2px', 
            textTransform: 'uppercase', 
            marginBottom: '12px',
            padding: '4px 12px',
            background: 'rgba(0, 229, 255, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 229, 255, 0.2)'
          }}>
            {category}
          </span>
          
          <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0', color: 'var(--text-primary)', lineHeight: 1.3 }}>
            {title}
          </h3>
          
          <div style={{ fontSize: '28px', fontWeight: 800, margin: '16px 0 24px 0', color: 'var(--text-primary)' }}>
            {price}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
          <button 
            className="btn-primary" 
            style={{ flex: 1.2, padding: '12px', fontSize: '14px' }}
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
          
          <button 
            className="btn-secondary" 
            style={{ flex: 1, padding: '12px', fontSize: '14px', whiteSpace: 'nowrap' }}
            onClick={() => setShow3D(true)}
          >
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span>View 3D</span>
            </span>
          </button>
        </div>
      </div>

      {/* 3D Viewer Modal */}
      {show3D && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'var(--modal-bg)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(16px)'
        }}>
          <button 
            onClick={() => setShow3D(false)}
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--card-border)',
              padding: '12px 24px',
              borderRadius: '30px',
              cursor: 'pointer',
              zIndex: 10000,
              fontSize: '16px'
            }}
          >
            Close Viewer ✕
          </button>

          <div style={{ width: '85%', height: '75%', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: `0 0 50px var(--glow-color)` }}>
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
              <color attach="background" args={['var(--bg-primary)']} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} color="var(--accent-cyan)" />
              <directionalLight position={[-10, 5, -5]} intensity={0.5} color="var(--accent-silver)" />
              
              <Suspense fallback={<Loader />}>
                <Stage environment="city" intensity={0.5}>
                  <ProductPlaceholder3D />
                </Stage>
              </Suspense>
              
              <OrbitControls autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>
          
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--text-primary)', margin: '0 0 12px 0', fontSize: '28px' }}>{title}</h2>
            <p style={{ color: 'var(--accent-cyan)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontWeight: '600' }}>
              Drag to rotate • Scroll to zoom
            </p>
          </div>
        </div>
      )}
    </>
  )
}
