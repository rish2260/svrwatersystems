'use client'

import { useState, useEffect, useRef } from 'react'

export default function ScrollProcess() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { 
      label: 'RAW WATER INPUT', 
      desc: 'Untreated source liquid containing suspended solids, heavy metals, and particulate matter injected into the primary intake manifold.',
      color: '#8b5a2b',
      particleSize: '10px',
      particleDensity: 80,
      glow: false,
      metrics: [
        { label: 'PARTICLE DENSITY', value: '100%' },
        { label: 'FLOW PRESSURE', value: '150 PSI' },
        { label: 'SYSTEM STATUS', value: 'INTAKE' }
      ]
    },
    { 
      label: 'SEDIMENT FILTRATION', 
      desc: 'High-capacity spun matrices intercept macroscopic impurities, coagulated mud, and sand particles exceeding 5 microns.',
      color: '#a3a3a3',
      particleSize: '8px',
      particleDensity: 60,
      glow: false,
      metrics: [
        { label: 'TURBIDITY DROP', value: '72%' },
        { label: 'REMOVAL RATE', value: '80%' },
        { label: 'FLOW RATE', value: '145 PSI' }
      ]
    },
    { 
      label: 'CARBON FILTRATION', 
      desc: 'Activated monolithic carbon blocks absorb free chlorine, volatile organic compounds (VOCs), and odor-causing chemical residues.',
      color: '#404040',
      particleSize: '6px',
      particleDensity: 40,
      glow: false,
      metrics: [
        { label: 'CHEM REDUCTION', value: '85%' },
        { label: 'ODOR REMOVAL', value: '90%' },
        { label: 'FLOW PRESSURE', value: '140 PSI' }
      ]
    },
    { 
      label: 'RO MEMBRANE CORE', 
      desc: 'Pressurized semi-permeable spiral membrane actively rejects dissolved salts, heavy metals, and micro-organisms at 0.0001 microns.',
      color: '#00e5ff',
      particleSize: '3px',
      particleDensity: 20,
      glow: true,
      metrics: [
        { label: 'SALT REJECTION', value: '98%' },
        { label: 'TDS REDUCTION', value: '95%' },
        { label: 'MEMBRANE FLAG', value: 'ACTIVE' }
      ]
    },
    { 
      label: 'ULTRA PURE OUTPUT', 
      desc: 'System baseline achieved. Liquid is fundamentally restructured, mineral-balanced, and primed to industrial-grade purity specs.',
      color: '#ffffff',
      particleSize: '1px',
      particleDensity: 10,
      glow: true,
      metrics: [
        { label: 'PURITY LEVEL', value: '99.7%' },
        { label: 'OUTPUT FLOW', value: '120 LPH' },
        { label: 'EFFICIENCY RATIO', value: '98%' }
      ],
      showCTA: true
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalHeight = rect.height - window.innerHeight
      
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight))
      
      const currentStep = Math.min(4, Math.floor(progress * 5))
      setActiveStep(currentStep)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const currentStepData = steps[activeStep]

  return (
    <div ref={containerRef} style={{ height: '500vh', position: 'relative', width: '100%', background: 'var(--bg-primary)' }}>
      {/* Sticky Camera Lock */}
      <div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        {/* Subtle Engineering Grid Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none' }}></div>
        
        {/* Core Radiance / Industrial Plant Mist Simulation */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px', background: `radial-gradient(circle, ${currentStepData.color}10 0%, transparent 60%)`, pointerEvents: 'none', transition: 'all 1s ease', zIndex: 0 }}></div>

        {/* Progression Sidebar (Left) */}
        <div className="hidden-mobile" style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '30px', zIndex: 10 }}>
            {steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '20px', transition: 'all 0.4s ease', opacity: activeStep >= idx ? 1 : 0.3 }}>
                     <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: activeStep >= idx ? 'var(--accent-cyan)' : 'var(--text-secondary)', boxShadow: activeStep === idx ? '0 0 15px var(--accent-cyan)' : 'none', border: '1px solid #fff' }}></div>
                     <div style={{ display: 'flex', flexDirection: 'column' }}>
                         <span style={{ fontSize: '10px', color: 'var(--accent-silver)', letterSpacing: '2px', textTransform: 'uppercase' }}>Phase 0{idx + 1}</span>
                         <span style={{ fontSize: '14px', fontFamily: 'monospace', color: activeStep >= idx ? 'var(--text-primary)' : 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: activeStep === idx ? 'bold' : 'normal' }}>{step.label}</span>
                     </div>
                </div>
            ))}
        </div>

        {/* Center Top Titles and Explanations */}
        <div style={{ position: 'absolute', top: '12%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 10, maxWidth: '600px', background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '16px', backdropFilter: 'blur(5px)' }}>
          <div style={{ color: 'var(--accent-cyan)', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
            System Analytics // Process Step 0{activeStep + 1}
          </div>
          <h2 style={{ fontSize: '32px', fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--text-primary)', textTransform: 'uppercase', transition: 'all 0.5s ease', marginBottom: '16px', letterSpacing: '1px' }}>
            {currentStepData.label}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
            {currentStepData.desc}
          </p>
        </div>

        {/* Waterfall Core Connectors */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '15vh', background: `linear-gradient(to bottom, transparent, ${currentStepData.color}80)`, zIndex: 1, transition: 'all 0.5s ease' }}></div>
        <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '15vh', background: `linear-gradient(to top, transparent, ${currentStepData.color}80)`, zIndex: 1, transition: 'all 0.5s ease' }}></div>

          {/* Triple Concentric Ring Visualizer */}
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Outer Ring - Flow Monitoring / Mesh Filter */}
          <div style={{ 
            width: '450px', height: '450px', borderRadius: '50%', 
            border: activeStep === 1 ? `12px dotted rgba(255,255,255,0.2)` : `1px dashed rgba(255,255,255,0.1)`, 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            transition: 'all 0.8s ease',
            animation: 'spin 20s linear infinite',
            zIndex: 1
          }}></div>

          {/* Middle Ring - Filtration Stage Chamber */}
          <div style={{ 
            width: '320px', height: '320px', borderRadius: '50%', 
            border: activeStep === 2 ? `18px solid #222` : `2px solid ${currentStepData.color}40`, 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            boxShadow: `inset 0 0 50px rgba(0,0,0,0.8), 0 0 ${currentStepData.glow ? '60px' : '10px'} ${currentStepData.color}30`,
            transition: 'all 0.8s ease',
            animation: activeStep >= 3 ? 'spin 10s linear infinite' : 'spin-reverse 15s linear infinite',
            zIndex: 2,
            backgroundImage: activeStep === 3 ? 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,229,255,0.1) 10px, rgba(0,229,255,0.1) 20px)' : 'none'
          }}></div>

          {/* Inner Ring - Particle Simulation Boundary */}
          <div style={{ 
            width: '200px', height: '200px', borderRadius: '50%', 
            border: activeStep === 4 ? `4px solid ${currentStepData.color}` : `2px solid ${currentStepData.color}`, 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            boxShadow: currentStepData.glow ? `0 0 40px ${currentStepData.color}, inset 0 0 40px ${currentStepData.color}80` : 'none',
            background: activeStep === 4 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.8)',
            transition: 'all 0.5s ease',
            zIndex: 3
          }}></div>

          {/* Cascading Deterministic Hydrated Particles */}
          <div style={{ position: 'absolute', top: 0, width: '150px', height: '100vh', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', zIndex: 4 }}>
            {[...Array(60)].map((_, i) => {
              const r1 = (i * 13) % 100 / 100
              const r2 = (i * 17) % 100 / 100
              const r3 = (i * 23) % 100 / 100
              const r4 = (i * 29) % 100 / 100
              
              const isVisible = r1 * 100 < currentStepData.particleDensity

              return (
              <div 
                key={i} 
                style={{
                  width: r1 > 0.5 ? currentStepData.particleSize : '2px',
                  height: r2 > 0.5 ? currentStepData.particleSize : '2px',
                  background: currentStepData.color,
                  borderRadius: '50%',
                  opacity: isVisible ? r3 * 0.8 + 0.2 : 0,
                  boxShadow: currentStepData.glow ? `0 0 15px ${currentStepData.color}` : 'none',
                  animation: `float-down ${1 + r4 * 2}s linear infinite`,
                  animationDelay: `-${r1 * 2}s`,
                  transition: 'all 0.8s ease'
                }}
              ></div>
            )})}
          </div>
        </div>

        {/* Large Digital Metric Dashboard (Bottom) */}
        <div style={{ position: 'absolute', bottom: '8%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', zIndex: 10, width: '100%' }}>
            <div className="glass-panel metrics-grid" style={{ display: 'flex', gap: '60px', fontFamily: 'monospace', padding: '24px 48px', alignItems: 'center', justifyContent: 'center' }}>
              {currentStepData.metrics.map((metric, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-silver)', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px', textTransform: 'uppercase' }}>{metric.label}</span>
                  <span style={{ fontSize: '32px', color: (metric.label === 'MEMBRANE FLAG' && activeStep >= 3) ? 'var(--accent-cyan)' : currentStepData.color, transition: 'color 0.5s', fontWeight: 'bold' }}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Appears smoothly only on final step */}
            <div style={{ 
                display: activeStep === 4 ? 'flex' : 'none', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '16px',
                animation: activeStep === 4 ? 'fadeInUp 0.8s ease' : 'none'
            }}>
               <div style={{ fontSize: '12px', color: 'var(--accent-cyan)', letterSpacing: '4px', textTransform: 'uppercase' }}>Recommended Core Architectures</div>
               <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a href="/products" className="btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>View Nectar RO</a>
                  <a href="/products" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '12px' }}>View Revolt RO</a>
                  <a href="/products" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '12px' }}>Explore 3D Catalog</a>
               </div>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float-down {
            0% { transform: translateY(-50vh); }
            100% { transform: translateY(50vh); }
          }
          @keyframes spin {
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes spin-reverse {
            100% { transform: translate(-50%, -50%) rotate(-360deg); }
          }
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .metrics-grid { flex-direction: column; gap: 20px; padding: 16px; }
          }
        `}} />
      </div>
    </div>
  )
}
