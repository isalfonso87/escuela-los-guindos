import { STATS } from '../data/content'
import heroImg from '../assets/hero.webp'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="badge">Admisión 2027 abierta</span>
          <h1>Aprender en el campo, <em>crecer en comunidad</em></h1>
          <p className="hero__lead">
            Somos la Escuela Rural Los Guindos: una comunidad pequeña donde cada niña y niño
            aprende con el territorio, la naturaleza y sus vecinos como sala de clases.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">Solicitar admisión</a>
            <a href="#programas" className="btn btn--ghost">Ver programas</a>
          </div>
          <ul className="hero__stats">
            {STATS.map((s) => (
              <li key={s.label}>
                <strong>{s.valor}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <img
            src={heroImg}
            alt="Fachada de la Escuela Rural Los Guindos rodeada de árboles y cerros"
            className="hero__art"
            loading="eager"
            decoding="async"
            width="440"
            height="360"
          />
        </div>
      </div>
    </section>
  )
}