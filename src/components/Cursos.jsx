import { CURSOS } from '../data/content'

export default function Cursos() {
  return (
    <section id="programas" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Cursos y programas</p>
          <h2>Niveles y talleres</h2>
          <p>Desde 1º hasta 8º básico, con talleres transversales para todos los cursos.</p>
        </div>

        <div className="grid grid--3">
          {CURSOS.map((c) => (
            <article key={c.titulo} className="curso">
              <span className="curso__icon" aria-hidden="true">{c.icono}</span>
              <h3>{c.titulo}</h3>
              <span className="curso__edad">{c.edad}</span>
              <p>{c.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}