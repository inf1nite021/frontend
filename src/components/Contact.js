import React, { useState } from 'react';

const t = {
  de: {
    section: 'Kontakt',
    title: 'Projekt anfragen',
    sub: 'Shopify-App, Shop-Setup oder Web-App? Schreib mir — ich antworte schnell.',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht senden',
    success: 'Nachricht gesendet — ich melde mich bald!',
  },
  en: {
    section: 'Contact',
    title: 'Request a project',
    sub: 'Shopify app, store setup or web app? Write me — I respond quickly.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    success: 'Message sent — I\'ll get back to you soon!',
  },
};

export default function Contact({ lang }) {
  const c = t[lang];
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
    color: 'var(--text)', padding: '0.8rem 1rem', borderRadius: 9,
    fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>{c.section}</div>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 10 }}>{c.title}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>{c.sub}</p>
      {sent ? (
        <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.05rem' }}>✅ {c.success}</div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 520 }}>
          <input placeholder={c.name} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} required />
          <input placeholder={c.email} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} required />
          <textarea placeholder={c.message} rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} required />
          <button type="submit" style={{
            background: 'var(--accent)', color: '#fff', padding: '12px 24px', borderRadius: 10,
            fontWeight: 600, fontSize: '0.95rem', border: 'none', cursor: 'pointer', alignSelf: 'flex-start',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >{c.send}</button>
        </form>
      )}
    </section>
  );
}