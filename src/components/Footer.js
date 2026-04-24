import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem', alignItems: 'center',
      }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} <strong style={{ color: 'var(--text)' }}>infinitecodes solutions</strong> · Köln
        </span>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {['About', 'Projekte', 'Kontakt'].map((label, i) => (
            <a key={label} href={['#about', '#projects', '#contact'][i]}
              style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{label}</a>
          ))}

          <span style={{ color: 'var(--border)' }}>|</span>

          {[['Impressum', 'impressum'], ['Datenschutz', 'datenschutz']].map(([label, key]) => (
            <button key={key} onClick={() => onNavigate(key)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.85rem', color: 'var(--text)',
              padding: 0, fontFamily: 'inherit',
              fontWeight: 600, transition: 'color 0.2s',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >{label}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}