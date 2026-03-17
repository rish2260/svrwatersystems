'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000, padding: '24px 5%', pointerEvents: 'none' }}>
      <nav className="glass-nav" style={{ 
        pointerEvents: 'auto',
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '16px 32px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', background: 'var(--accent-cyan)', borderRadius: '50%', boxShadow: '0 0 12px var(--accent-cyan)' }}></div>
          SVR <span className="gradient-text">WATER</span>
        </div>
        
        <div style={{ display: 'flex', gap: '40px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <a href="/" className="nav-link">Home</a>
          <a href="/industrial" className="nav-link">Industrial</a>
          <a href="/residential" className="nav-link">Residential</a>
          <a href="/products" className="nav-link">Products</a>
          <a href="/#problem-solver" className="nav-link">Water Diagnostics</a>
        </div>
        
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <button 
            onClick={toggleTheme} 
            style={{ 
              background: 'transparent', 
              color: 'var(--text-secondary)',
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '18px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e)=>e.target.style.color='var(--accent-cyan)'}
            onMouseLeave={(e)=>e.target.style.color='var(--text-secondary)'}
            title="Toggle Theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <a href="/contact">
            <button className="btn-secondary" style={{ padding: '10px 24px', fontSize: '12px' }}>
              Contact Us
            </button>
          </a>
        </div>
      </nav>
    </div>
  )
}
