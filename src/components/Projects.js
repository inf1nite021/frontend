import React, { useState } from 'react';

const projects = [
  {
    title: 'infinitePreisChecker',
    description: 'Shopify-App zur automatischen Wettbewerbspreisüberwachung mit AutoWatch-Feature, dynamischen Preisvergleichen und Subscription-Modell.',
    details: 'Händler können damit in Echtzeit Preise von Konkurrenten überwachen und automatisch reagieren — direkt im Shopify Admin integriert.',
    tags: ['Shopify', 'React', 'Node.js', 'API'],
    badge: 'Shopify App',
    badgeColor: '#2563eb',
    image: null, // Ersetze mit: require('../assets/preischecker.png')
  },
  {
    title: 'AutoWatch',
    description: 'Web-App für Preis-Monitoring mit API-basierten Pricing-Tiers, Cron-Jobs, RapidAPI-Integration und automatisierten Reports.',
    details: 'Nutzer können Produkte tracken, Preisverläufe einsehen und bei Preisänderungen benachrichtigt werden — skalierbar über verschiedene Abo-Stufen.',
    tags: ['React', 'Node.js', 'RapidAPI', 'Cron Jobs'],
    badge: 'Web App',
    badgeColor: '#7c3aed',
    image: null,
  },
  {
    title: 'Shopify Store Setup',
    description: 'Aufbau und Customizing eines vollständigen Shopify-Stores — inklusive Theme-Anpassungen, Produktstruktur und App-Integration.',
    details: 'Von der Theme-Konfiguration über die Zahlungsanbindung bis zur App-Integration — alles aus einer Hand, fertig zum Launch.',
    tags: ['Shopify', 'Liquid', 'CSS'],
    badge: 'E-Commerce',
    badgeColor: '#059669',
    image: null,
  },
  {
    title: 'WooCommerce Shop',
    description: 'Einrichtung und Konfiguration eines WooCommerce-Shops mit Custom-Plugins, Zahlungsanbindung und Performance-Optimierung.',
    details: 'Maßgeschneiderte WordPress/WooCommerce-Lösung mit optimierter Ladezeit, SEO-Grundstruktur und individuellen Anpassungen.',
    tags: ['WooCommerce', 'WordPress', 'PHP'],
    badge: 'E-Commerce',
    badgeColor: '#059669',
    image: null,
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Portfolio</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '0.5rem', letterSpacing: '-0.5px' }}>Ausgewählte Projekte</h2>
        </div>

        {/* Project Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {projects.map((p, i) => (
            <div key={p.title} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Image Area */}
              <div style={{
                width: '100%', height: 160, overflow: 'hidden',
                background: `linear-gradient(135deg, ${p.badgeColor}18 0%, ${p.badgeColor}08 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: `1px solid ${p.badgeColor}20`,
              }}>
                {p.image ? (
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{
                    fontSize: '2.5rem',
                    opacity: 0.6,
                  }}>
                    {p.badge === 'Shopify App' ? '🛍️' : p.badge === 'Web App' ? '📊' : '🛒'}
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                    borderRadius: 50, background: `${p.badgeColor}15`,
                    color: p.badgeColor, border: `1px solid ${p.badgeColor}30`,
                  }}>
                    {p.badge}
                  </span>
                </div>

                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.8rem' }}>{p.description}</p>

                {/* Expandable Details */}
                {expanded === i && (
                  <p style={{
                    color: 'var(--text)', fontSize: '0.85rem', lineHeight: 1.7,
                    marginBottom: '0.8rem', padding: '0.75rem',
                    background: 'var(--bg-subtle)', borderRadius: 8,
                    borderLeft: '3px solid var(--accent)',
                  }}>
                    {p.details}
                  </p>
                )}

                <button onClick={() => setExpanded(expanded === i ? null : i)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600,
                  padding: 0, fontFamily: 'inherit',
                }}>
                  {expanded === i ? '▲ Weniger anzeigen' : '▼ Mehr erfahren'}
                </button>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      background: 'var(--bg-subtle2)', color: 'var(--text-muted)',
                      padding: '0.2rem 0.55rem', borderRadius: 5, fontSize: '0.75rem', fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upwork CTA Banner */}
        <div style={{
          background: 'var(--bg-subtle)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', padding: '2rem 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.5rem',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              {/* Upwork Green Dot */}
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#14a800', display: 'inline-block' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#14a800', textTransform: 'uppercase', letterSpacing: '1px' }}>Upwork</span>
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>
              Weitere Projekte & Kundenbewertungen
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Detaillierte Projektbeschreibungen, Screenshots und echte Kundenfeedbacks findest du auf meinem Upwork-Profil.
            </p>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~01a1c78ea5664b8961"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#14a800', color: '#fff',
              padding: '0.75rem 1.5rem', borderRadius: 9,
              fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap',
              boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#118a00'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#14a800'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Upwork-Profil besuchen →
          </a>
        </div>

      </div>
    </section>
  );
}