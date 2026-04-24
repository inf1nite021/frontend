import React, { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: scrolled ? 'var(--bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 18px',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="#" style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', textDecoration: 'none' }}>
          infinite<span style={{ color: 'var(--accent)' }}>codes</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 28,
        }} className="navbar-desktop">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{l.label}</a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--text)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <a
            href="#contact"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            Kontakt
          </a>
        </nav>

        {/* Mobile: Dark Toggle + Burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="navbar-mobile">
          <button
            onClick={toggleDark}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--text)',
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: 'var(--text)',
              lineHeight: 1,
            }}
            aria-label="Menü öffnen"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          padding: '8px 0 16px',
        }} className="navbar-mobile">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 20px',
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >{l.label}</a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              margin: '12px 20px 0',
              background: 'var(--accent)',
              color: '#fff',
              padding: '10px 16px',
              borderRadius: 8,
              fontWeight: 600,
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            Kontakt aufnehmen
          </a>
        </nav>
      )}

      {/* Responsive: Desktop vs Mobile sichtbar */}
      <style>{`
        .navbar-desktop { display: flex !important; }
        .navbar-mobile { display: none !important; }
        @media (max-width: 768px) {
          .navbar-desktop { display: none !important; }
          .navbar-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}