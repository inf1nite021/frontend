import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', background: 'var(--bg)',
    border: '1px solid var(--border)', color: 'var(--text)',
    padding: '0.8rem 1rem', borderRadius: 9,
    fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 580, margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Kontakt</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '0.5rem', letterSpacing: '-0.5px' }}>Projekt anfragen</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>Shopify-App, Shop-Setup oder Web-App? Schreib mir — ich antworte schnell.</p>
        </div>

        {sent ? (
          <div style={{
            padding: '2rem', borderRadius: 'var(--radius-lg)',
            background: '#f0fdf4', border: '1px solid #bbf7d0', textAlign: 'center',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
            <p style={{ fontWeight: 600, color: '#166534' }}>Nachricht gesendet — ich melde mich bald!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <input type="text" placeholder="Name" required style={inputStyle}
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <input type="email" placeholder="E-Mail" required style={inputStyle}
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <textarea placeholder="Was kann ich für dich tun?" rows={5} required
              style={{ ...inputStyle, resize: 'vertical' }}
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button type="submit" style={{
              background: 'var(--accent)', color: '#fff', border: 'none',
              padding: '0.85rem', borderRadius: 9, fontWeight: 700,
              fontSize: '0.95rem', cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s',
              boxShadow: 'var(--shadow-sm)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Nachricht senden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}