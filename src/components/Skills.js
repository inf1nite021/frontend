import React from 'react';

const t = {
  de: {
    section: 'Technologien',
    title: 'Was ich mitbringe',
    groups: [
      { label: 'E-Commerce', skills: ['Shopify App Development', 'Shopify Liquid', 'Shopify Polaris UI'] },
      { label: 'Frontend', skills: ['React', 'JavaScript (ES6+)', 'HTML / CSS', 'Responsive Design'] },
      { label: 'Backend & Tools', skills: ['Node.js', 'REST APIs'] },
    ],
  },
  en: {
    section: 'Technologies',
    title: 'What I bring to the table',
    groups: [
      { label: 'E-Commerce', skills: ['Shopify App Development', 'Shopify Liquid', 'Shopify Polaris UI'] },
      { label: 'Frontend', skills: ['React', 'JavaScript (ES6+)', 'HTML / CSS', 'Responsive Design'] },
      { label: 'Backend & Tools', skills: ['Node.js', 'REST APIs',] },
    ],
  },
};

export default function Skills({ lang }) {
  const c = t[lang];
  return (
    <section id="skills" style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>{c.section}</div>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 36 }}>{c.title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        {c.groups.map(g => (
          <div key={g.label} style={{
            background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)',
            padding: '24px', border: '1px solid var(--border)',
          }}>
            <div style={{ fontWeight: 700, marginBottom: 14, color: 'var(--text)' }}>{g.label}</div>
            {g.skills.map(s => (
              <div key={s} style={{
                fontSize: '0.88rem', color: 'var(--text-muted)',
                padding: '6px 0', borderBottom: '1px solid var(--border)',
              }}>{s}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}