import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const t = {
  de: {
    section: 'Kontakt',
    title: 'Projekt anfragen',
    sub: 'Shopify-App, Shop-Setup oder Web-App? Beginne deine digitale Reise.',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht senden',
    success: 'Nachricht gesendet - ich melde mich bald!\n Bitte prüfe auch deinen Spam-Ordner, falls du keine Antwort erhältst.',
    phone: 'Oder rufe auch einfach an:',
    phoneNumber: '+49 155 67286368',
  },
  en: {
    section: 'Contact',
    title: 'Request a project',
    sub: 'Shopify app, store setup or web app? Start your digital journey.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    success: "Message sent — I'll get back to you soon!\n Please also check your spam folder if you don't receive a response.",
    phone: 'Or just give me a call:',
    phoneNumber: '+49 155 67286368',
  },
};

export default function Contact({ lang }) {
  const c = t[lang];
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const inputStyle = {
    width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
    color: 'var(--text)', padding: '0.8rem 1rem', borderRadius: 9,
    fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_aexiwkr',
      'template_vg37too',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'jWo--zskqTMA6d0vO'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSent(true);
      setIsSending(false);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setIsSending(false);
      alert('Es gab ein Problem beim Senden der Nachricht. Bitte versuche es später noch einmal.');
    });
  };

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem', maxWidth: 640, margin: '0 auto' }}>
      <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>{c.section}</p>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{c.title}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{c.sub}</p>

      {sent ? (
        <p style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✅ {c.success}</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 520 }}>
          <input placeholder={c.name} value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} required />
          <input placeholder={c.email} type="email" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} required />
          <textarea placeholder={c.message} rows={5} value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} required />
          <button type="submit" disabled={isSending}
            style={{ 
              background: isSending ? 'var(--text-muted)' : 'var(--accent)', 
              color: '#fff', border: 'none', borderRadius: 9, padding: '0.85rem 2rem', 
              fontSize: '1rem', fontWeight: 600, 
              cursor: isSending ? 'not-allowed' : 'pointer', 
              transition: 'background 0.2s, transform 0.15s', alignSelf: 'flex-start' 
            }}
            onMouseEnter={e => { if(!isSending) { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
            onMouseLeave={e => { if(!isSending) { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; } }}
          >
            {isSending ? '...' : c.send}
          </button>
        </form>
      )}

      <p style={{ marginTop: '1.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
        {c.phone}{' '}
        <a href={`tel:${c.phoneNumber.replace(/\s/g, '')}`}
          style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
          {c.phoneNumber}
        </a>
      </p>
    </section>
  );
}