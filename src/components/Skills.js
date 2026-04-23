import React from 'react';

const groups = [
  {
    label: 'E-Commerce',
    skills: ['Shopify App Development', 'Shopify Liquid', 'Shopify Polaris UI'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'HTML / CSS', 'Responsive Design'],
  },
  {
    label: 'Backend & Tools',
    skills: ['Node.js', 'REST APIs', 'RapidAPI', 'Cron Jobs', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-subtle)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Technologien</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '0.5rem', letterSpacing: '-0.5px' }}>Was ich mitbringe</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {groups.map(g => (
            <div key={g.label} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '1.75rem',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{g.label}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {g.skills.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}