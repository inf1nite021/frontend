import React from 'react';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '8rem 2rem 4rem', background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          background: 'var(--accent-light)', color: 'var(--accent)',
          padding: '0.35rem 0.9rem', borderRadius: 50, fontSize: '0.8rem',
          fontWeight: 600, marginBottom: '1.5rem',
          border: '1px solid #bfdbfe',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Offen für neue Projekte
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: 800, lineHeight: 1.15,
          letterSpacing: '-1px', color: 'var(--text)',
          marginBottom: '1.2rem', maxWidth: 720,
        }}>
          Shopify Developer &<br /> Web Apps
        </h1>

        <p style={{
          fontSize: '1.1rem', color: 'var(--text-muted)',
          maxWidth: 520, marginBottom: '2.5rem', lineHeight: 1.7,
        }}>
          Ich entwickle Shopify-Apps, Online-Shops und Web-Applikationen — sauber, skalierbar und mit Fokus auf echten Mehrwert. Solo-Founder von <strong style={{ color: 'var(--text)', fontWeight: 600 }}>infinitecodes-solutions</strong>.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="#projects" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '0.75rem 1.5rem', borderRadius: 9,
            fontWeight: 600, fontSize: '0.95rem',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Projekte ansehen
          </a>
          <a href="#contact" style={{
            background: 'var(--bg)', color: 'var(--text)',
            padding: '0.75rem 1.5rem', borderRadius: 9,
            fontWeight: 600, fontSize: '0.95rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            Kontakt aufnehmen
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
          paddingTop: '2rem', borderTop: '1px solid var(--border)',
        }}>
          {[
            { val: '2', label: 'Shopify-Apps entwickelt' },
            { val: '2', label: 'Online-Shops aufgebaut' },
            { val: '3+', label: 'Jahre Erfahrung' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text)' }}>{s.val}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}