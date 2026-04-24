import React from 'react';

const t = {
  de: { rights: 'Alle Rechte vorbehalten.', impressum: 'Impressum', datenschutz: 'Datenschutz' },
  en: { rights: 'All rights reserved.', impressum: 'Legal Notice', datenschutz: 'Privacy Policy' },
};

export default function Footer({ setPage, lang }) {
  const c = t[lang];
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '28px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 12, fontSize: '0.85rem', color: 'var(--text-muted)',
      maxWidth: 1100, margin: '0 auto',
    }}>
      <span>© {new Date().getFullYear()} infinitecodes-solutions — {c.rights}</span>
      <div style={{ display: 'flex', gap: 20 }}>
        <button onClick={() => setPage('impressum')} style={{
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
          fontSize: '0.85rem', fontFamily: 'inherit',
        }}>{c.impressum}</button>
        <button onClick={() => setPage('datenschutz')} style={{
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
          fontSize: '0.85rem', fontFamily: 'inherit',
        }}>{c.datenschutz}</button>
      </div>
    </footer>
  );
}