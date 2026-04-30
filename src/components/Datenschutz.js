import React from 'react';

export default function Datenschutz({ onBack }) {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '8rem 2rem 4rem' }}>
      <button onClick={onBack} style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        background: 'none', border: '1px solid var(--border)', color: 'var(--text-muted)',
        padding: '0.45rem 1rem', borderRadius: 8, fontSize: '0.85rem',
        fontWeight: 500, cursor: 'pointer', marginBottom: '2.5rem',
        transition: 'border-color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        ← Zurück
      </button>

      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Datenschutzerklärung</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>Stand: April 2026</p>

      <Section title="1. Verantwortlicher">
        <p>infinitecodes-solutions, Gianluca Iacona<br />
        Rolshover Straße 70, 51105 Köln<br />
        E-Mail: <a href="mailto:anfragen@infinitecodes-solutions.de" style={{ color: 'var(--accent)' }}>anfragen@infinitecodes-solutions.de</a></p>
      </Section>

      <Section title="2. Erhobene Daten">
        <p style={{ color: 'var(--text-muted)' }}>
          Beim Besuch dieser Website werden automatisch technische Daten erhoben (IP-Adresse, Browsertyp, Uhrzeit des Zugriffs). Diese Daten werden ausschließlich zur Sicherstellung des Betriebs der Website verwendet und nicht an Dritte weitergegeben.
        </p>
      </Section>

      <Section title="3. Kontaktformular">
        <p style={{ color: 'var(--text-muted)' }}>
          Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
        </p>
      </Section>

      <Section title="4. Google Fonts">
        <p style={{ color: 'var(--text-muted)' }}>
          Diese Website verwendet Google Fonts, einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Beim Laden der Seite werden Schriftarten direkt von Google-Servern abgerufen, wodurch Ihre IP-Adresse an Google übertragen werden kann.
        </p>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            Google Datenschutzerklärung
          </a>
        </p>
      </Section>

      <Section title="5. Cookies">
        <p style={{ color: 'var(--text-muted)' }}>
          Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Daten verarbeitet, die für den Betrieb der Seite erforderlich sind.
        </p>
      </Section>

      <Section title="6. Ihre Rechte">
        <p style={{ color: 'var(--text-muted)' }}>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit gemäß DSGVO. Wenden Sie sich hierfür an die oben genannte E-Mail-Adresse.
        </p>
      </Section>

      <Section title="7. Hosting">
        <p style={{ color: 'var(--text-muted)' }}>
          Diese Website wird auf einem externen Server gehostet. Der Hostinganbieter verarbeitet technische Verbindungsdaten gemäß seiner eigenen Datenschutzrichtlinie.
        </p>
      </Section>

      <Section title="8. Änderungen">
        <p style={{ color: 'var(--text-muted)' }}>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text)' }}>{title}</h2>
      <div style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text)' }}>
        {children}
      </div>
    </div>
  );
}