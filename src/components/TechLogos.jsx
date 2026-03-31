import React from 'react';

const slugs = [
  'supabase', 'vercel', 'cloudflare', 'plesk',
  'nextdotjs', 'framer', 'tailwindcss', 'react', 'nodedotjs', 'docker', 'n8n'
];

export default function TechLogos() {
  const allSlugs = [...slugs, ...slugs, ...slugs];

  return (
    <div className="reveal marquee-container" style={{
      overflow: 'hidden', display: 'flex', width: '100%', maxWidth: '900px', margin: '10px auto 40px', position: 'relative',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
    }}>
      <div className="marquee-content" style={{
        display: 'flex', alignItems: 'center', gap: '60px',
        animation: 'scroll-left 25s linear infinite', whiteSpace: 'nowrap'
      }}>
        {allSlugs.map((slug, idx) => (
          <img 
            key={`${slug}-${idx}`} 
            src={`https://cdn.simpleicons.org/${slug}/222222`} 
            alt={slug} 
            className="marquee-icon"
            style={{ width: 'auto', height: '28px', opacity: 0.5, transition: 'opacity 0.2s', filter: 'grayscale(100%)' }}
            onMouseOver={e => e.currentTarget.style.opacity = 0.9}
            onMouseOut={e => e.currentTarget.style.opacity = 0.5}
          />
        ))}
      </div>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 20px)); }
        }
      `}</style>
    </div>
  );
}
