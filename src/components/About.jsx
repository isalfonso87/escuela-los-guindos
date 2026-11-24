import { PILARES } from '../data/content'

export default function About() {
  return (
    <section id="nosotros" className="section section--alt">
      <div className="container about">
        <div className="about__text">
          <p className="eyebrow">Nosotros</p>
          <h2>Una escuela pequeña con una gran comunidad</h2>
          <p>
            La Escuela Rural Los Guindos es un establecimiento municipal ubicado en el corazón
            del valle. Desde 1982 acompañamos a niñas y niños de sectores rurales, combinando
            el currículum nacional con el aprendizaje del territorio.
          </p>
          <p>
            Creemos en una educación de calidad, cercana y con sentido: aprender haciendo, en
            contacto con la naturaleza y junto a las familias.
          </p>
          <a href="#programas" className="btn btn--ghost">Conoce nuestra historia</a>
        </div>

        <div className="about__cards">
          {PILARES.map((p) => (
            <article key={p.titulo} className="pillar">
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}