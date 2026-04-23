import React from 'react';

export default function Impressum({ onBack }) {
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

      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Impressum</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>Angaben gemäß § 5 DDG</p>

      <Section title="Angaben zum Unternehmen">
        <p><strong>infinitecodes-solutions</strong></p>
        <p>Inhaber: Gianluca Iacona</p>
        <p>Rolshover Straße 70</p>
        <p>51105 Köln</p>
        <p>Deutschland</p>
      </Section>

      <Section title="Kontakt">
        <p>E-Mail: <a href="mailto:info@infinitecodes.de" style={{ color: 'var(--accent)' }}>info@infinitecodes.de</a></p>
      </Section>

      <Section title="Umsatzsteuer">
        <p style={{ color: 'var(--text-muted)' }}>
          Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen (Kleinunternehmerregelung).
        </p>
      </Section>

      <Section title="Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)">
        <p>Gianluca Iacona</p>
        <p>Rolshover Straße 70</p>
        <p>51105 Köln</p>
      </Section>

      <Section title="EU-Streitschlichtung">
        <p style={{ color: 'var(--text-muted)' }}>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>

      <Section title="Haftung für Inhalte">
        <p style={{ color: 'var(--text-muted)' }}>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </Section>

      <Section title="Haftung für Links">
        <p style={{ color: 'var(--text-muted)' }}>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </Section>

      <Section title="Urheberrecht">
        <p style={{ color: 'var(--text-muted)' }}>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </Section>
      <Section title="Google Fonts">
        <p style={{ color: 'var(--text-muted)' }}>
            Diese Website verwendet Google Fonts, einen Dienst der Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA. Beim Laden der Seite werden Schriftarten direkt von Google-Servern
            abgerufen, wodurch Ihre IP-Adresse an Google übertragen werden kann.
        </p>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an einheitlicher Darstellung der Website). Weitere Informationen finden Sie in der{' '}
            <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--accent)' }}
            >
            Datenschutzerklärung von Google
            </a>.
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