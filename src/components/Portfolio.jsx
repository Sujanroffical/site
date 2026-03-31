import telegramMockup from '../assets/telegram_food_automation.png';

const projects = [
  { 
    id: 1, 
    title: 'Telegram Food Order Automation', 
    category: 'N8N AUTOMATION', 
    description: 'Automate food order management with a Telegram bot powered by n8n—transform messy user inputs...', 
    image: telegramMockup,
    tools: ['n8n', 'Telegram API', 'Google Sheets']
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ marginBottom: '40px' }}>
      <div className="container">
        <div className="card-elevated reveal">
          <div className="section-header-row" style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '24px', marginBottom: '40px', display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}>
            <h2 className="section-title" style={{ fontSize: '4.5rem', fontWeight: 500, letterSpacing: '-0.04em' }}>Portfolio.</h2>
            <div className="divider" style={{ width: '1px', height: '40px', background: '#e5e5e5' }}></div>
            <p className="section-subtitle" style={{ fontSize: '0.95rem', color: '#737373' }}>Selected work. From local businesses to international platforms.</p>
          </div>

          <div className="portfolio-grid-new" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {projects.map(p => (
              <div key={p.id} className="portfolio-card-new">
                <div className="portfolio-img-area" style={{ height: '280px', borderRadius: '16px', border: '1px solid #f0f0f0', marginBottom: '20px' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="portfolio-tag-white" style={{ 
                    position: 'absolute', 
                    top: '16px', 
                    left: '16px', 
                    background: 'white', 
                    border: '1px solid #e5e5e5', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.7rem', 
                    fontWeight: 600, 
                    color: '#737373' 
                  }}>
                    {p.category}
                  </div>
                </div>
                <div className="portfolio-body-new">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#171717', marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#737373', lineHeight: '1.5', marginBottom: '16px' }}>{p.description}</p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tools && p.tools.map((t, i) => (
                      <span key={i} style={{ 
                        padding: '4px 10px', 
                        background: '#f8f8f8', 
                        border: '1px solid #eeeeee', 
                        borderRadius: '6px', 
                        fontSize: '0.7rem', 
                        color: '#a3a3a3', 
                        fontWeight: 500 
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
