import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SVR Water Systems | Advanced Engineering Solutions',
  description: 'Next-Generation industrial and residential water purification systems utilizing predictive maintenance and advanced RO digital twins.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (theme) {
                document.documentElement.setAttribute('data-theme', theme);
              } else {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body className={inter.className}>
        <Navbar />
        
        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
        </main>

        <div className="divider-wave bg-charcoal"></div>
        <footer style={{ background: 'var(--bg-secondary)', padding: '40px 5% 40px', borderTop: '1px solid var(--card-border)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>
                SVR <span className="gradient-text">Water Systems</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                Pioneering the next generation of industrial-grade water purification. Engineered for excellence, monitored via digital twins.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Products</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 2.5 }}>
                <li><a href="#" className="nav-link">Industrial RO Plants</a></li>
                <li><a href="#" className="nav-link">Iron Removal Filters</a></li>
                <li><a href="#" className="nav-link">Water Softeners</a></li>
                <li><a href="#" className="nav-link">Residential Purifiers</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 2.5 }}>
                <li><a href="#" className="nav-link">Predictive Maintenance</a></li>
                <li><a href="#" className="nav-link">AMC Contracts</a></li>
                <li><a href="#" className="nav-link">Plant Diagnostics</a></li>
                <li><a href="#" className="nav-link">Emergency Support</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 2.5 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>📞</span> +91 8327818181
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>✉️</span> support@svrwatersystems.com
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '8px', lineHeight: 1.4, marginTop: '8px' }}>
                  <span style={{ color: 'var(--accent-cyan)', marginTop: '2px' }}>📍</span> 
                  Plot No. 14-15, Kodar, Ketan Vihar Colony, Saripura,<br/>Pushkar Marriage Hall, Rajajipuram, Lucknow-226017,<br/>Uttar Pradesh, India
                </li>
              </ul>
            </div>

          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid var(--card-border)', color: 'var(--text-secondary)', fontSize: '14px' }}>
            © 2026 SVR Water Systems. Advanced Engineering Solutions. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
