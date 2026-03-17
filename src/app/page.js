'use client'

import { useState } from 'react'
import Hero3D from '../components/Hero3D'
import ProductCard from '../components/ProductCard'
import PlantExplorer3D from '../components/PlantExplorer3D'
import ScrollProcess from '../components/ScrollProcess'

export default function Home() {
  const [activeProblem, setActiveProblem] = useState(null)
  
  const products = [
    {
      id: 1,
      title: 'Magnet RO Purifier',
      category: 'Residential',
      price: '₹16,900',
      imageUrl: '/products/magnet-ro.jpg',
      link: 'https://svrwatersystems.com/?product=magnet-ro-purifier'
    },
    {
      id: 2,
      title: 'Revolt (RO+UF) With Adjuster',
      category: 'Residential',
      price: '₹21,990',
      imageUrl: '/products/revolt.jpg',
      link: 'https://svrwatersystems.com/?product=revolt'
    },
    {
      id: 3,
      title: 'Nectar 1000 LPH',
      category: 'Industrial',
      price: '₹402,000',
      imageUrl: '/products/nectar1000.jpg',
      link: 'https://svrwatersystems.com/?product=nectar-1000-lph'
    },
    {
      id: 4,
      title: 'Auto Eco Iron Filter 20A',
      category: 'Filters',
      price: '₹65,400',
      imageUrl: '/products/filter20a.jpg',
      link: 'https://svrwatersystems.com/?product=automatic-eco-iron-filter-20a'
    }
  ]

  const solutions = {
    'Iron Staining': {
      suggestedProduct: 'Auto Eco Iron Filter 20A',
      explanation: 'Our eco iron filter automatically oxidizes and removes suspended iron particles, preventing yellow stains on fixtures.',
      flowColor: '#eab308'
    },
    'Salty Taste': {
      suggestedProduct: 'Nectar 1000 LPH RO',
      explanation: 'Industrial RO forces salty water through microscopic membranes, stripping out dissolved salts and TDS completely.',
      flowColor: 'var(--accent-cyan)' 
    },
    'Hard Water Scaling': {
      suggestedProduct: 'Water Softener Units',
      explanation: 'Ion-exchange technology replaces calcium and magnesium with sodium, instantly softening the water and protecting boilers.',
      flowColor: 'var(--accent-silver)' 
    },
    'Industrial Effluents': {
      suggestedProduct: 'Effluent Treatment Plant (ETP)',
      explanation: 'Multi-stage settlement and biological reactors process heavy industrial waste before safe discharge.',
      flowColor: '#22c55e'
    }
  }

  const activeSolutionData = activeProblem ? solutions[activeProblem] : null;

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      
      {/* 3D Cinematic Hero Section */}
      <section className="bg-matte" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Deep Multi-Layer Background Effects */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
          {/* Layer 1: Glow behind sphere */}
          <div className="animate-float" style={{ position: 'absolute', top: '15%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 60%)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
          {/* Layer 2: Left side subtle dust/mist */}
          <div className="animate-float" style={{ animationDelay: '3s', position: 'absolute', bottom: '20%', left: '10%', width: '400px', height: '300px', background: 'radial-gradient(ellipse, rgba(229,231,235,0.03) 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
        </div>

        {/* 3D Model Right Side - Embedded Water Sphere responding to scroll */}
        <Hero3D />
        
        {/* Text Interface Panel Left Side */}
        <div className="section-padding" style={{ position: 'relative', zIndex: 10, maxWidth: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none' }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', alignSelf: 'flex-start', padding: '6px 16px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid var(--card-border)', borderRadius: '30px', color: 'var(--accent-cyan)', marginBottom: '32px', fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', backdropFilter: 'blur(10px)'
          }}>
             <span className="glow-effect" style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', marginRight: '10px' }}></span> 
             System Online
          </div>
          
          <h1 style={{ fontSize: '80px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: ' -2px', fontWeight: 800, margin: '0 0 24px 0', lineHeight: 1.0, color: 'var(--text-primary)' }}>
            Engineering <br/>
            <span className="gradient-text">Pure Water</span>
          </h1>
          
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', margin: '0 0 48px 0', lineHeight: 1.7, maxWidth: '550px', letterSpacing: '0.5px' }}>
            Advanced purification systems designed for industrial and residential applications.
          </p>
          
          <div style={{ display: 'flex', gap: '24px', pointerEvents: 'auto' }}>
            <button className="btn-primary" onClick={() => document.getElementById('products').scrollIntoView()}>
              Explore Systems
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('problem-solver').scrollIntoView()}>
              Solve Water Problem
            </button>
          </div>
        </div>
      </section>

      <div className="divider-wave bg-charcoal" style={{ transform: 'translateY(-1px)', zIndex: 5, position: 'relative' }}></div>

      {/* Trust Section */}
      <section className="bg-charcoal section-padding" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--text-primary)' }}>
            Why Choose <span className="gradient-text">SVR</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--accent-cyan)', margin: '0 auto' }}></div>
        </div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {[
            { title: '24/7 Tech Support', desc: 'Continuous operations response.', svg: '⚡' },
            { title: 'Industrial Grade', desc: 'Designed for strict payload tolerances.', svg: '⚙️' },
            { title: 'Rapid Deployment', desc: 'Secure multi-stage logistics.', svg: '📦' },
            { title: 'Fluid Dynamics', desc: 'Designed by certified experts.', svg: '🚰' },
            { title: '1000+ Installs', desc: 'Proven operational history.', svg: '🌐' }
          ].map((feature, i) => (
            <div key={i} className="glass-panel" style={{ background: 'var(--bg-primary)', padding: '32px 24px', textAlign: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.03)' }} onMouseEnter={(e)=>e.currentTarget.style.borderColor='var(--accent-cyan)'} onMouseLeave={(e)=>e.currentTarget.style.borderColor='rgba(255,255,255,0.03)'}>
              <div className="glow-effect" style={{ width: '64px', height: '64px', margin: '0 auto 24px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid var(--accent-cyan)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                {feature.svg}
              </div>
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: '700' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Industrial Process Explorer */}
      <section className="bg-matte section-padding" style={{ position: 'relative' }}>
         <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ paddingBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
               <div>
                  <div style={{ display: 'inline-block', padding: '4px 16px', background: 'rgba(0,229,255,0.05)', borderRadius: '20px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>
                     Process Architecture
                  </div>
                  <h2 style={{ fontSize: '48px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0', color: 'var(--text-primary)' }}>
                    RO Explorer <span className="gradient-text">Module</span>
                  </h2>
               </div>
               <div style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '300px', textAlign: 'right' }}>
                 Interact closely with core systems. Hover or click components for telemetry details. Select Exploded View to analyze hardware separations.
               </div>
            </div>

            <PlantExplorer3D />
         </div>
      </section>

      {/* Scroll-Driven Purification Animation Story */}
      <ScrollProcess />

      {/* Floating Display Stage Showcase */}
      <section id="products" className="bg-gradient-dark section-padding" style={{ position: 'relative', borderTop: '1px solid var(--card-border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '54px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
            Premium Hardware <span className="gradient-text">Showcase</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse meticulously engineered systems. Hover units over pedestal stages for dynamic examination mapping.
          </p>
        </div>

        <div className="grid-cards" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {products.map((product) => (
            <div key={product.id} style={{ position: 'relative' }}>
               {/* Cylindrical Floating Stage Pedestal beneath Card */}
               <div style={{ 
                  position: 'absolute', 
                  bottom: '-30px', 
                  left: '50%', 
                  transform: 'translateX(-50%) rotateX(60deg)', 
                  width: '70%', 
                  height: '100px', 
                  background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.3) 0%, transparent 60%)', 
                  boxShadow: '0 0 40px 10px rgba(0, 229, 255, 0.1)', 
                  zIndex: 0, 
                  opacity: 0.8,
                  border: '1px solid rgba(0, 229, 255, 0.4)',
                  borderRadius: '50%' 
                }}>
               </div>

               <div style={{ position: 'relative', zIndex: 1, height: '100%', paddingBottom: '20px' }} className="animate-float">
                  <ProductCard 
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    imageUrl={product.imageUrl}
                    link={product.link}
                  />
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Futuristic Water Diagnostics Console */}
      <section id="problem-solver" className="bg-charcoal section-padding" style={{ borderTop: '1px solid var(--card-border)', position: 'relative' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none' }}></div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div className="glow-effect" style={{ width: '16px', height: '16px', background: 'var(--accent-cyan)' }}></div>
              <span style={{ color: 'var(--accent-cyan)', letterSpacing: '4px', fontWeight: 700, textTransform: 'uppercase', fontSize: '14px' }}>Diagnostic Console</span>
            </div>
            
            <h2 style={{ fontSize: '48px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 24px 0', color: 'var(--text-primary)' }}>
              Logic Core <br/><span className="gradient-text">Diagnostics</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px', lineHeight: 1.6 }}>
              Select an anomaly from the industrial diagnostic matrix to generate a hardware simulation of the required purification logic sequence.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {Object.keys(solutions).map((issue, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel" 
                  onMouseEnter={() => setActiveProblem(issue)}
                  onClick={() => setActiveProblem(issue)}
                  style={{ 
                    padding: '24px', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    transition: 'all 0.3s ease',
                    borderLeft: activeProblem === issue ? `4px solid ${solutions[issue].flowColor}` : '1px solid var(--card-border)',
                    borderTop: '1px solid var(--card-border)', borderRight: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)',
                    background: activeProblem === issue ? 'rgba(0, 0, 0, 0.4)' : 'rgba(20, 20, 20, 0.4)',
                    transform: activeProblem === issue ? 'translateX(10px)' : 'translateX(0)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={activeProblem === issue ? solutions[issue].flowColor : 'var(--text-secondary)'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                     </svg>
                    <div style={{ fontWeight: 600, fontSize: '18px', color: activeProblem === issue ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                      SYS.{issue.replace(' ', '_').toUpperCase()}
                    </div>
                  </div>
                  
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    background: activeProblem === issue ? solutions[issue].flowColor : 'transparent', 
                    border: `1px solid ${activeProblem === issue ? solutions[issue].flowColor : 'var(--accent-silver)'}`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: activeProblem === issue ? '#000' : 'var(--accent-silver)',
                    transition: 'all 0.3s ease',
                    fontFamily: 'monospace'
                  }}>
                    {activeProblem === issue ? 'EXEC' : '>'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div className="glass-panel" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', flexDirection: 'column', padding: '40px', background: 'var(--bg-primary)' }}>
              
              {!activeProblem ? (
                <>
                  <div className="glow-effect" style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--glow-color) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%' }}></div>
                  <div style={{ textAlign: 'center', zIndex: 1 }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-silver)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}>
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <p style={{ color: 'var(--accent-silver)', letterSpacing: '4px', fontWeight: 600, textTransform: 'uppercase' }}>
                      System Offline
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '16px' }}>
                      Select a diagnostic protocol to engage logic core.
                    </p>
                  </div>
                </>
              ) : (
                <div style={{ zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  
                  <div style={{ borderBottom: `1px solid var(--card-border)`, paddingBottom: '16px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Hardware Interface</span>
                    <span style={{ color: activeSolutionData.flowColor, fontSize: '12px', letterSpacing: '2px', fontWeight: 600, textTransform: 'uppercase', animation: 'pulse-glow 2s infinite' }}>
                      [ ROUTING ACTIVE ]
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
                    <div style={{ width: '40px', height: '4px', background: `linear-gradient(90deg, transparent, ${activeSolutionData.flowColor})` }}></div>
                    
                    <div style={{ 
                      width: '140px', 
                      height: '160px', 
                      border: `1px solid ${activeSolutionData.flowColor}`, 
                      background: `var(--bg-secondary)`,
                      boxShadow: `inset 0 0 20px ${activeSolutionData.flowColor}20, 0 0 30px ${activeSolutionData.flowColor}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
                    }}>
                       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: activeSolutionData.flowColor, animation: 'float 2s linear infinite' }}></div>
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={activeSolutionData.flowColor} strokeWidth="1.5">
                         <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                         <polyline points="3.29 7 12 12 20.71 7"></polyline>
                         <line x1="12" y1="22" x2="12" y2="12"></line>
                       </svg>
                    </div>

                    <div style={{ width: '40px', height: '4px', background: `linear-gradient(90deg, ${activeSolutionData.flowColor}, var(--accent-cyan))` }}></div>
                  </div>
                  
                  <div style={{ background: 'var(--bg-primary)', padding: '32px', border: `1px solid var(--card-border)`, borderLeft: `4px solid ${activeSolutionData.flowColor}` }}>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '28px', margin: '0 0 16px 0', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {activeSolutionData.suggestedProduct}
                    </h4>
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, margin: '0 0 32px 0' }}>
                      {activeSolutionData.explanation}
                    </p>
                    
                     <button 
                      style={{ 
                        width: '100%', 
                        padding: '16px', 
                        background: 'transparent',
                        border: `1px solid ${activeSolutionData.flowColor}`,
                        color: activeSolutionData.flowColor,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e)=>e.target.style.background=activeSolutionData.flowColor + '20'}
                      onMouseLeave={(e)=>e.target.style.background='transparent'}
                    >
                      View Schematic
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
