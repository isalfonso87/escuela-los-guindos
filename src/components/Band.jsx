export default function Band() {
  return (
    <section className="section">
      <div className="container band">
        <article id="pie" className="band__card band__card--verde">
          <p className="eyebrow eyebrow--claro">PIE</p>
          <h3>Programa de Integración Escolar</h3>
          <p>
            Contamos con un equipo de educación diferencial, psicología y fonoaudiología que
            acompaña a los estudiantes que lo requieren, en coordinación con sus familias.
          </p>
          <a href="#contacto" className="btn btn--light btn--sm">Saber más</a>
        </article>

        <article id="personal" className="band__card band__card--tierra">
          <p className="eyebrow eyebrow--claro">Personal</p>
          <h3>Conoce a nuestro equipo docente y asistentes de la educación</h3>
          <p>
            Tenemos docentes y asistentes comprometidos con la educación rural.
          </p>
          <a href="#contacto" className="btn btn--light btn--sm">Saber más</a>
        </article>
      </div>
    </section>
  )
}