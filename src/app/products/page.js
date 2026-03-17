'use client'

import { useState } from 'react'
import ProductCard from '../../components/ProductCard'

export default function ProductExplorer() {
  const [activeFilter, setActiveFilter] = useState('All')

  const products = [
    {
      id: 1,
      title: 'Magnet RO Purifier',
      category: 'Residential',
      price: '₹16,900',
      imageUrl: '/products/magnet-ro.jpg',
      link: 'https://wa.me/918327818181'
    },
    {
      id: 2,
      title: 'Revolt (RO+UF) With Adjuster',
      category: 'Residential',
      price: '₹21,990',
      imageUrl: '/products/revolt.jpg',
      link: 'https://wa.me/918327818181'
    },
    {
      id: 3,
      title: 'Nectar 1000 LPH',
      category: 'Industrial',
      price: '₹402,000',
      imageUrl: '/products/nectar1000.jpg',
      link: 'https://wa.me/918327818181'
    },
    {
      id: 4,
      title: 'Auto Eco Iron Filter 20A',
      category: 'Filters',
      price: '₹65,400',
      imageUrl: '/products/filter20a.jpg',
      link: 'https://wa.me/918327818181'
    },
    {
      id: 5,
      title: 'Heavy Duty Vessel 1354',
      category: 'Accessories',
      price: '₹22,000',
      imageUrl: '/products/vessel.jpg',
      link: 'https://wa.me/918327818181'
    },
    {
      id: 6,
      title: 'Industrial Controller Panel',
      category: 'Accessories',
      price: '₹45,000',
      imageUrl: '/products/panel.jpg',
      link: 'https://wa.me/918327818181'
    }
  ]

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter)

  const filters = ['All', 'Residential', 'Industrial', 'Filters', 'Accessories']

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '100px', scrollBehavior: 'smooth' }}>
      
      <section className="bg-matte section-padding" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: 'rgba(0,229,255,0.05)', borderRadius: '20px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>
             Hardware Catalog
          </div>
          <h1 style={{ fontSize: '54px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
            Product <span className="gradient-text">Explorer</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse our full range of rigorously engineered water purification hardware. Sort by application payload, and enter the 3D viewer for structural analysis.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '60px', flexWrap: 'wrap' }}>
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                background: activeFilter === filter ? 'var(--accent-cyan)' : 'transparent',
                color: activeFilter === filter ? '#000' : 'var(--text-secondary)',
                border: `1px solid ${activeFilter === filter ? 'var(--accent-cyan)' : 'var(--card-border)'}`,
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeFilter === filter ? '0 0 20px var(--glow-color)' : 'none'
              }}
              onMouseEnter={(e)=> { if(activeFilter !== filter) e.target.style.borderColor='var(--accent-cyan)' }}
              onMouseLeave={(e)=> { if(activeFilter !== filter) e.target.style.borderColor='var(--card-border)' }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Floating Glass Pedestal Grid */}
        <div className="grid-cards" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ position: 'relative' }}>
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

               <div style={{ position: 'relative', zIndex: 1, paddingBottom: '20px' }}>
                  <ProductCard 
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    imageUrl={product.imageUrl}
                  />
               </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
