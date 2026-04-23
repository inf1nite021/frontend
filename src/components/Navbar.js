import React, { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(var(--bg-rgb, 255,255,255),0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.25s ease',
      backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '0 2rem', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#home" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', letterSpacing: '-0.3px' }}>
          infinite<span style={{ color: 'var(--accent)' }}>codes</span>
        </a>

        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{
                fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Dark Mode Toggle */}
          <button onClick={toggleDark} title="Theme wechseln" style={{
            background: 'var(--bg-subtle2)', border: '1px solid var(--border)',
            borderRadius: 8, width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '1rem', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <a href="#contact" style={{
            background: 'var(--accent)', color: '#fff',
            padding: '0.5rem 1.1rem', borderRadius: 8,
            fontSize: '0.875rem', fontWeight: 600,
            transition: 'background 0.2s',
            boxShadow: 'var(--shadow-sm)',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}