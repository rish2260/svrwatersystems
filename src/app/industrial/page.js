'use client'

export default function IndustrialSolutions() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '140px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', padding: '0 5%' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: 'rgba(0,229,255,0.05)', borderRadius: '20px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>
             Heavy Duty Systems
          </div>
          <h1 style={{ fontSize: '54px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
            Industrial <span className="gradient-text">Solutions</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Our industrial division engineers high-capacity Reverse Osmosis, Softening, and Wastewater treatment plants capable of continuously processing massive payloads.
          </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '1400px', width: '90%', margin: '0 auto' }}>
          {[
              { title: 'Reverse Osmosis Plants', desc: 'High-pressure multi-stage filtration specifically tuned for dissolved solids rejection.', icon: '⚙️' },
              { title: 'Wastewater Treatment (ETP/STP)', desc: 'Biological and chemical reactors designed to neutralize industrial effluents.', icon: '♻️' },
              { title: 'Water Softening Modules', desc: 'Continuous ion-exchange matrices protecting boiler systems from severe scaling.', icon: '🧪' },
              { title: 'Filtration Towers', desc: 'Massive sand and carbon array systems operating at severe throughput pressures.', icon: '🏭' }
          ].map((sol, i) => (
             <div key={i} className="glass-panel" style={{ background: 'var(--card-bg)', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderTop: '2px solid var(--accent-cyan)' }}>
                <div className="glow-effect" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px', fontSize: '32px', marginBottom: '24px', border: '1px solid var(--card-border)' }}>
                   {sol.icon}
                </div>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{sol.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>{sol.desc}</p>
                <div style={{ marginTop: 'auto' }}>
                    <a href="/contact" style={{ color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textDecoration: 'none', borderBottom: '1px solid var(--accent-cyan)', paddingBottom: '4px' }}>Analyze System &rarr;</a>
                </div>
             </div>
          ))}
      </div>

    </div>
  )
}
