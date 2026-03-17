'use client'

export default function ResidentialProducts() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '140px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', padding: '0 5%' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: 'rgba(0,229,255,0.05)', borderRadius: '20px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>
             Home Architectures
          </div>
          <h1 style={{ fontSize: '54px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
            Residential <span className="gradient-text">Products</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Bring industrial-grade engineering into your home. Experience our precision-manufactured RO, UF, and mineral fortification hubs designed for daily consumption.
          </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '1400px', width: '90%', margin: '0 auto' }}>
          {[
              { title: 'Magnet RO Purifier', desc: 'Sleek, wall-mounted purification with instant magnetic attachment hardware and heavy-duty pre-filters.', img: '🧲' },
              { title: 'Revolt (RO+UF)', desc: 'Advanced hybrid system featuring an integrated TDS adjuster to preserve essential natural minerals.', img: '⚡' },
              { title: 'Home Softener Systems', desc: 'Compact ion-exchange modules to instantly convert hard bathroom and kitchen water to prevent pipe scaling.', img: '🚿' },
              { title: 'Mineral RO Towers', desc: 'Free-standing models with massive 15L storage capacity for large households.', img: '🏢' }
          ].map((sol, i) => (
             <div key={i} className="glass-panel" style={{ background: 'var(--bg-secondary)', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderTop: '2px solid var(--accent-silver)' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '16px', fontSize: '32px', marginBottom: '24px', border: '1px solid var(--card-border)' }}>
                   {sol.img}
                </div>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{sol.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>{sol.desc}</p>
                <div style={{ marginTop: 'auto' }}>
                    <a href="/products" style={{ color: 'var(--accent-silver)', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textDecoration: 'none', borderBottom: '1px solid var(--accent-silver)', paddingBottom: '4px' }}>View Hardware Catalog &rarr;</a>
                </div>
             </div>
          ))}
      </div>

    </div>
  )
}
