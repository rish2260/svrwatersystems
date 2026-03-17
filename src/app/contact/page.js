'use client'

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '140px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', padding: '0 5%' }}>
          <div style={{ display: 'inline-block', padding: '4px 16px', background: 'rgba(0,229,255,0.05)', borderRadius: '20px', color: 'var(--accent-cyan)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>
             Operations Control
          </div>
          <h1 style={{ fontSize: '54px', fontFamily: 'monospace', textTransform: 'uppercase', fontWeight: 800, margin: '0 0 20px 0', color: 'var(--text-primary)' }}>
            System <span className="gradient-text">Communications</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Transmit payload requirements directly to our engineering division. Establish contact for industrial plant diagnostics, AMC contracts, or unit scaling.
          </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', maxWidth: '1200px', width: '90%', margin: '0 auto', alignItems: 'stretch' }}>
         
         {/* Live Telemetry Form Container */}
         <div className="glass-panel" style={{ flex: '1 1 500px', padding: '40px', background: 'var(--card-bg)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '32px', fontFamily: 'monospace', textTransform: 'uppercase' }}>Initialize Request</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--accent-silver)', letterSpacing: '2px', textTransform: 'uppercase' }}>Facility Name</label>
                  <input type="text" placeholder="Enter operation tag..." style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '16px', outline: 'none' }} />
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--accent-silver)', letterSpacing: '2px', textTransform: 'uppercase' }}>Comms Array (Email)</label>
                  <input type="email" placeholder="transmission@domain.com" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '16px', outline: 'none' }} />
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--accent-silver)', letterSpacing: '2px', textTransform: 'uppercase' }}>System Parameters</label>
                  <textarea rows="5" placeholder="Specify water conditions or desired RO output specifications..." style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '16px', outline: 'none', resize: 'vertical' }}></textarea>
               </div>

               <button className="btn-primary" style={{ marginTop: '16px', padding: '16px' }}>Request Consultation</button>
            </form>
         </div>

         {/* Routing Geography */}
         <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="glass-panel" style={{ flex: '1', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-cyan)' }}>
               <h3 style={{ fontSize: '16px', color: 'var(--accent-cyan)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>Logistics Core</h3>
               
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '24px' }}>📍</span>
                  <div>
                    <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Primary Grid Location</h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>Plot No. 14-15, Kodar, Ketan Vihar Colony, Saripura, Pushkar Marriage Hall, Rajajipuram,<br/>Lucknow-226017, UP, India</p>
                  </div>
               </div>

               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '24px' }}>📞</span>
                  <div>
                    <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Voice Channel</h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>+91 83278 18181</p>
                  </div>
               </div>

               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{ fontSize: '24px' }}>✉️</span>
                  <div>
                    <h4 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Data Link</h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>support@svrwatersystems.com</p>
                  </div>
               </div>
            </div>

            {/* Simulated Radar Map Feed */}
            <div className="glass-panel glow-effect" style={{ flex: '1', position: 'relative', overflow: 'hidden', minHeight: '250px', background: 'var(--bg-primary)' }}>
               {/* Grid Map Background */}
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 0 }}></div>
               
               {/* Radar Sweep Animation */}
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'conic-gradient(from 0deg, transparent 70%, rgba(0,229,255,0.4) 100%)', borderRadius: '50%', animation: 'spin 4s linear infinite', zIndex: 1 }}></div>

               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="glow-effect" style={{ width: '16px', height: '16px', background: 'var(--accent-cyan)', borderRadius: '50%', border: '2px solid #fff' }}></div>
                  <div style={{ marginTop: '12px', background: 'rgba(0,0,0,0.8)', padding: '4px 12px', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '4px' }}>LKO FACILITY</div>
               </div>

               <style dangerouslySetInnerHTML={{__html: `
                 @keyframes spin {
                   0% { transform: translate(-50%, -50%) rotate(0deg); }
                   100% { transform: translate(-50%, -50%) rotate(360deg); }
                 }
               `}} />
            </div>
         </div>

      </div>
    </div>
  )
}
