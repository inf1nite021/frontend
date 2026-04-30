import React, { useState } from 'react';

const projects = {
  de: [
    {
      title: 'infinitePreisChecker',
      description: 'Shopify-App zur automatischen Wettbewerbspreisüberwachung mit AutoWatch-Feature, dynamischen Preisvergleichen und Subscription-Modell.',
      details: 'Händler können damit in Echtzeit Preise von Konkurrenten überwachen und automatisch reagieren — direkt im Shopify Admin integriert.',
      tags: ['Shopify', 'React', 'Node.js', 'API'],
      badge: 'Shopify App', badgeColor: '#2563eb',
    },
    {
      title: 'AutoWatch',
      description: 'Web-App für Preis-Monitoring mit API-basierten Pricing-Tiers, Cron-Jobs, RapidAPI-Integration und automatisierten Reports.',
      details: 'Nutzer können Produkte tracken, Preisverläufe einsehen und bei Preisänderungen benachrichtigt werden — skalierbar über verschiedene Abo-Stufen.',
      tags: ['React', 'Node.js', 'RapidAPI', 'Cron Jobs'],
      badge: 'Web App', badgeColor: '#7c3aed',
    },
    {
      title: 'Shopify Store Setup',
      description: 'Aufbau und Customizing eines vollständigen Shopify-Stores — inklusive Theme-Anpassungen, Produktstruktur und App-Integration.',
      details: 'Von der Theme-Konfiguration über die Zahlungsanbindung bis zur App-Integration — alles aus einer Hand, fertig zum Launch.',
      tags: ['Shopify', 'Liquid', 'CSS'],
      badge: 'E-Commerce', badgeColor: '#059669',
    },
    {
      title: 'WooCommerce Shop',
      description: 'Einrichtung und Konfiguration eines WooCommerce-Shops mit Custom-Plugins, Zahlungsanbindung und Performance-Optimierung.',
      details: 'Maßgeschneiderte WordPress/WooCommerce-Lösung mit optimierter Ladezeit, SEO-Grundstruktur und individuellen Anpassungen.',
      tags: ['WooCommerce', 'WordPress', 'PHP'],
      badge: 'E-Commerce', badgeColor: '#059669',
    },
  ],
  en: [
    {
      title: 'infinitePreisChecker',
      description: 'Shopify app for automated competitor price monitoring with AutoWatch feature, dynamic price comparisons and subscription model.',
      details: 'Merchants can monitor competitor prices in real time and react automatically — integrated directly into the Shopify Admin.',
      tags: ['Shopify', 'React', 'Node.js', 'API'],
      badge: 'Shopify App', badgeColor: '#2563eb',
    },
    {
      title: 'AutoWatch',
      description: 'Web app for price monitoring with API-based pricing tiers, cron jobs, RapidAPI integration and automated reports.',
      details: 'Users can track products, view price histories and get notified on price changes — scalable across different subscription tiers.',
      tags: ['React', 'Node.js', 'RapidAPI', 'Cron Jobs'],
      badge: 'Web App', badgeColor: '#7c3aed',
    },
    {
      title: 'Shopify Store Setup',
      description: 'Full setup and customization of a complete Shopify store — including theme adjustments, product structure and app integration.',
      details: 'From theme configuration to payment setup and app integration — everything from one source, ready to launch.',
      tags: ['Shopify', 'Liquid', 'CSS'],
      badge: 'E-Commerce', badgeColor: '#059669',
    },
    {
      title: 'WooCommerce Shop',
      description: 'Setup and configuration of a WooCommerce store with custom plugins, payment integration and performance optimization.',
      details: 'Tailored WordPress/WooCommerce solution with optimized load time, SEO foundation and custom adjustments.',
      tags: ['WooCommerce', 'WordPress', 'PHP'],
      badge: 'E-Commerce', badgeColor: '#059669',
    },
  ],
};

const upwork = {
  de: { title: 'Weitere Projekte & Kundenbewertungen', sub: 'Detaillierte Projektbeschreibungen, Screenshots und echte Kundenfeedbacks findest du auf meinem Upwork-Profil.', btn: 'Upwork-Profil besuchen →' },
  en: { title: 'More Projects & Client Reviews', sub: 'Detailed project descriptions, screenshots and real client feedback can be found on my Upwork profile.', btn: 'Visit Upwork Profile →' },
};

export default function Projects({ lang }) {
  const [expanded, setExpanded] = useState(null);
  const list = projects[lang];
  const u = upwork[lang];

  return (
    <section id="projects" style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>Portfolio</div>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 36 }}>{lang === 'de' ? 'Ausgewählte Projekte' : 'Selected Projects'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
        {list.map((p, i) => (
          <div key={i} style={{
            background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
            overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{
              height: 100, background: 'var(--bg-subtle2)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
            }}>
              {p.badge === 'Shopify App' ? '🛍️' : p.badge === 'Web App' ? '📊' : '🛒'}
            </div>
            <div style={{ padding: '20px' }}>
              <span style={{
                background: p.badgeColor + '22', color: p.badgeColor,
                fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 999, marginBottom: 10, display: 'inline-block',
              }}>{p.badge}</span>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 10 }}>{p.description}</p>
              {expanded === i && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 10, borderTop: '1px solid var(--border)', paddingTop: 10 }}>{p.details}</p>}
              <button onClick={() => setExpanded(expanded === i ? null : i)} style={{
                background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)',
                fontSize: '0.82rem', fontWeight: 600, padding: 0, fontFamily: 'inherit', marginBottom: 12,
              }}>
                {expanded === i ? (lang === 'de' ? '▲ Weniger anzeigen' : '▲ Show less') : (lang === 'de' ? '▼ Mehr erfahren' : '▼ Learn more')}
              </button>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--bg-subtle2)', color: 'var(--text-muted)',
                    fontSize: '0.75rem', padding: '3px 8px', borderRadius: 6,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upwork Banner */}
      <div style={{
        background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
        padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#14a800', display: 'inline-block' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Upwork</span>
          </div>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{u.title}</div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{u.sub}</p>
        </div>
        <a href="https://www.upwork.com/freelancers/~01a1c78ea5664b8961?mp_source=share" target="_blank" rel="noreferrer" style={{
          background: 'var(--accent)', color: '#fff', padding: '10px 20px',
          borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >{u.btn}</a>
      </div>
    </section>
  );
}