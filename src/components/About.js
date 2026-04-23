import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-subtle)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Über mich</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.2rem', letterSpacing: '-0.5px' }}>
            Developer mit<br />E-Commerce-Fokus
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            Als Junior IT-Spezialist aus <strong style={{ color: 'var(--text)' }}>Köln</strong> entwickle ich unter dem Namen <strong style={{ color: 'var(--text)' }}>infinitecodes-solutions</strong> individuelle Shopify-Apps und Web-Lösungen für Händler.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Mein Ansatz: sauberer Code, klares Design und Lösungen, die wirklich funktionieren — vom ersten Commit bis zum Launch.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { icon: '🛒', title: 'Shopify Apps', desc: 'Custom Apps & Theme-Entwicklung' },
            { icon: '🌐', title: 'WooCommerce', desc: 'Shop-Setup & Anpassungen' },
            { icon: '⚛️', title: 'React', desc: 'Moderne Web-Applikationen' },
            { icon: '🔗', title: 'API-Integration', desc: 'Externe Dienste & Automatisierung' },
          ].map(item => (
            <div key={item.title} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '1.2rem',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}