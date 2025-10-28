import content from '../data/site.json';

type Section = any;

function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case 'portfolio':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <p className="tag">{section.tagline}</p>
          <div className="grid">
            {section.items?.map((it: any, i: number) => (
              <article key={i} className="card">
                <div className="ph" aria-label={it.title}></div>
                <h3>{it.title}</h3>
                <p className="muted">{it.aspect} · {it.year}</p>
              </article>
            ))}
          </div>
        </section>
      );
    case 'service':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <p className="tag">{section.tagline}</p>
          <div className="card">
            <h4>Deliverables</h4>
            <ul>
              {section.deliverables?.map((d: string, i: number) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <p className="muted">Timeline: {section.timeline}</p>
            <p className="muted">Starting at ${section.pricing?.starting_usd} – scales with length & complexity.</p>
            <a href={section.cta?.href || '#contact'} className="btn">
              {section.cta?.label || 'Contact'}
            </a>
          </div>
        </section>
      );
    case 'cases':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <p className="tag">{section.tagline}</p>
          {section.items?.map((c: any, i: number) => (
            <article key={i} className="card">
              <h3>
                {c.project} – <span className="muted">{c.client}</span>
              </h3>
              <p>{c.context}</p>
              <ul>
                {c.approach?.map((a: string, k: number) => (
                  <li key={k}>{a}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      );
    case 'testimonials':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <p className="tag">{section.tagline}</p>
          <div className="grid">
            {section.items?.map((t: any, i: number) => (
              <blockquote key={i} className="card">
                <p>"{t.quote}"</p>
                <footer>
                  {t.name} – {t.role}, {t.location} · ⭐{t.rating}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      );
    case 'process':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <p className="tag">{section.tagline}</p>
          <ol className="steps">
            {section.steps?.map((s: any, i: number) => (
              <li key={i}>
                <strong>{s.title}</strong> – {s.desc}
              </li>
            ))}
          </ol>
        </section>
      );
    case 'faq':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          {section.items?.map((qa: any, i: number) => (
            <details key={i} className="card">
              <summary>{qa.q}</summary>
              <p>{qa.a}</p>
            </details>
          ))}
        </section>
      );
    case 'policies':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <ul className="bullets">
            {section.items?.map((p: any, i: number) => (
              <li key={i}>
                <strong>{p.title}:</strong> {p.desc}
              </li>
            ))}
          </ul>
        </section>
      );
    case 'contact':
      return (
        <section id={section.id} className="wrap">
          <h2>{section.title}</h2>
          <p className="tag">{section.tagline}</p>
          <ul className="bullets">
            {section.channels?.map((c: any, i: number) => (
              <li key={i}>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.label}
                </a>
                {' – '}
                {c.handle || c.address || c.number}
              </li>
            ))}
          </ul>
          {section.note ? <p className="muted">{section.note}</p> : null}
        </section>
      );
    default:
      return null;
  }
}

export default function Page() {
  const { profile, stats, sections } = content as any;

  return (
    <main>
      <header className="hero">
        <h1>{profile.headline}</h1>
        <p>{profile.tagline}</p>
        <p className="muted">
          Projects: {stats.projects_completed_display} · Satisfaction: {stats.client_satisfaction_avg}/
          {stats.client_satisfaction_scale} · Countries: {stats.countries_served}
        </p>
        <a href={profile.cta.href} className="btn primary">
          {profile.cta.label}
        </a>
      </header>
      <div className="bg-aurora" aria-hidden="true"></div>
      {sections.map((s: Section, i: number) => (
        <SectionBlock key={i} section={s} />
      ))}
      <footer className="wrap small">© 2025 Danverse. All rights reserved.</footer>
    </main>
  );
}
