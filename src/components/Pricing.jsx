import React from 'react';

const Check = ({ color }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>;

const tiers = [
  { name: 'landing page', desc: 'A professional page with contact form and automatic emails. Quickly online.', price: '₹2,999', accent: 'emerald', features: ['1 page (landing page)', 'Contact form', 'Automatic emails', 'Mobile optimized'], color: '#10b981', badge: '' },
  { name: 'standard', desc: 'The perfect start for professional demands. Ideal for established websites.', price: '₹5,999', accent: 'blue', features: ['3 pages', 'Contact form', 'Automatic emails', 'Mobile optimized'], color: '#2563eb', badge: 'POPULAR' },
];

export default function Pricing() {
  return (
    <center>
    <section id="pricing">
      <div className="container">
        <div className="card-elevated reveal" style={{ padding: '60px' }}>
          <div className="section-header-row" style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '24px', marginBottom: '40px', display: 'flex', alignItems: 'baseline', gap: '24px' }}>
            <h2 className="section-title" style={{ fontSize: '4.5rem', fontWeight: 500, letterSpacing: '-0.04em' }}>Pricing.</h2>
            <div className="divider" style={{ width: '1px', height: '40px', background: '#e5e5e5' }}></div>
            <p className="section-subtitle" style={{ fontSize: '0.95rem', color: '#737373' }}>Transparent costs. High quality approach.</p>
          </div>
          
          <div className="pricing-grid" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
            {tiers.map(t => (
              <div key={t.name} style={{
                border: `2px solid ${t.accent === 'emerald' ? '#bbf7d0' : '#bfdbfe'}`,
                borderRadius: '24px',
                padding: '32px',
                background: t.accent === 'emerald' ? 'linear-gradient(to bottom, #f0fdf4, #ffffff)' : 'linear-gradient(to bottom, #eff6ff, #ffffff)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                flex: '1',
                minWidth: '300px',
                maxWidth: '380px'
              }}>
                {t.badge && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: t.color, color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700 }}>
                    {t.badge}
                  </div>
                )}
                <h3 style={{ fontSize: '1.8rem', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '8px' }}>{t.name}</h3>
                <p style={{ color: '#525252', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '24px' }}>{t.desc}</p>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.05em', color: '#737373', textTransform: 'uppercase', marginBottom: '4px', textAlign: 'center' }}>SINGLE PAYMENT</div>
                <div style={{ fontSize: '2.8rem', fontWeight: 600, letterSpacing: '-0.05em', marginBottom: '24px', textAlign: 'center' }}>{t.price}</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flexGrow: 1 }}>
                  {t.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#404040' }}>
                      <Check color={t.color} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                
                <a href={`https://wa.me/917339690198?text=${encodeURIComponent('Hi, I\'m interested in the ' + t.name + ' package!')}`} target="_blank" rel="noreferrer" 
                   style={{ 
                     display: 'flex', justifyContent: 'center', padding: '14px', borderRadius: '14px', 
                     background: t.color, color: 'white', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer'
                   }}
                   onMouseOver={e => e.currentTarget.style.transform = 'scale(0.98)'}
                   onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </center>
  );
}
