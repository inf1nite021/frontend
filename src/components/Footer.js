import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '1.75rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} <strong style={{ color: 'var(--text)' }}>infinitecodes-solutions</strong> · Köln
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['#about', '#projects', '#contact'].map((href, i) => (
            <a key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {['About', 'Projekte', 'Kontakt'][i]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}