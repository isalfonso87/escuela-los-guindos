import { TESTIMONIOS } from '../data/content'

export default function Testimonios() {
  return (
    <section id="comunidad" className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Comunidad</p>
          <h2>Lo que dicen nuestras familias</h2>
        </div>

        <div className="grid grid--3">
          {TESTIMONIOS.map((t) => (
            <figure key={t.nombre} className="testimonio">
              <span className="testimonio__mark" aria-hidden="true">“</span>
              <blockquote>{t.texto}</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">
                  {t.nombre.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </span>
                <span>
                  <strong>{t.nombre}</strong>
                  <small>{t.rol}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}