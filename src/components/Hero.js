import React from 'react';

const t = {
  de: {
    badge: 'Offen für neue Projekte',
    title: 'Shopify Developer & Web Apps',
    sub: 'Ich entwickle Shopify-Apps, Online-Shops und Web-Applikationen - sauber, skalierbar und mit Fokus auf echten Mehrwert.',
    cta1: 'Projekte ansehen',
    cta2: 'Kontakt aufnehmen',
    stats: [
      { val: '11', label: 'Shopify-Apps entwickelt' },
      { val: '13', label: 'Online-Shops aufgebaut' }
    ],
  },
  en: {
    badge: 'Open for new projects',
    title: 'Shopify Developer & Web Apps',
    sub: 'I build Shopify apps, online stores and web applications - clean, scalable and focused on real value.',
    cta1: 'View Projects',
    cta2: 'Get in touch',
    stats: [
      { val: '11', label: 'Shopify apps built' },
      { val: '13', label: 'Online stores launched' }
    ],
  },
};

export default function Hero({ lang }) {
  const c = t[lang];
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px 64px' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>{c.title}</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: 580, marginBottom: 36, lineHeight: 1.7 }}>{c.sub}</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
        <a href="#projects" style={{
          background: 'var(--accent)', color: '#fff', padding: '12px 24px',
          borderRadius: 10, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >{c.cta1}</a>
        <a href="#contact" style={{
          background: 'transparent', color: 'var(--text)', padding: '12px 24px',
          borderRadius: 10, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
          border: '1px solid var(--border)',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >{c.cta2}</a>
      </div>
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {c.stats.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)' }}>{s.val}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}