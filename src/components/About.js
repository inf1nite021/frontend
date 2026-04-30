import React from 'react';

const t = {
  de: {
    section: 'About',
    title: 'Wer steckt dahinter?',
    body1: 'Als IT-Spezialist aus **Deutschland** entwickle ich unter dem Namen **infinitecodes-solutions** individuelle Shopify-Apps und Web-Lösungen für Händler.',
    body2: 'Mein Ansatz: sauberer Code, klares Design und Lösungen, die wirklich funktionieren - vom ersten Commit bis zum Launch.',
    tags: ['Shopify Apps', 'Web Apps', 'E-Commerce', 'React', 'Node.js'],
  },
  en: {
    section: 'About',
    title: 'Who is behind this?',
    body1: 'As a IT specialist from **Germany**, I develop custom Shopify apps and web solutions for merchants under the name **infinitecodes-solutions**.',
    body2: 'My approach: clean code, clear design and solutions that actually work - from the first commit to launch.',
    tags: ['Shopify Apps', 'Web Apps', 'E-Commerce', 'React', 'Node.js'],
  },
};

export default function About({ lang }) {
  const c = t[lang];
  return (
    <section id="about" style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>{c.section}</div>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 20 }}>{c.title}</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: 600, lineHeight: 1.8, marginBottom: 14 }}>{c.body1.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
      <p style={{ color: 'var(--text-muted)', maxWidth: 600, lineHeight: 1.8, marginBottom: 28 }}>{c.body2}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {c.tags.map(tag => (
          <span key={tag} style={{
            background: 'var(--accent-light)', color: 'var(--accent)',
            padding: '5px 12px', borderRadius: 999, fontSize: '0.82rem', fontWeight: 500,
          }}>{tag}</span>
        ))}
      </div>
    </section>
  );
}