import { DESCARGAS } from '../data/content'

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="700"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
      >
        PDF
      </text>
    </svg>
  )
}

export default function Descargas() {
  return (
    <section id="descargas" className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Descargas</p>
          <h2>Documentos institucionales</h2>
          <p>
            Consulta y descarga los documentos oficiales de nuestra escuela. Si tienes dudas,
            escríbenos por el formulario de contacto.
          </p>
        </div>

        <div className="grid grid--3">
          {DESCARGAS.map((d) => (
            <article key={d.titulo} className="descarga">
              <span className="descarga__icon" aria-hidden="true">
                <PdfIcon />
              </span>

              <h3>{d.titulo}</h3>
              <p>{d.descripcion}</p>

              <div className="descarga__meta">
                <span className="descarga__badge">PDF</span>
                <span aria-hidden="true">·</span>
                <span>{d.peso}</span>
                <span aria-hidden="true">·</span>
                <span>{d.fecha}</span>
              </div>

              <a
                href={d.archivo}
                download={d.nombreDescarga}
                className="btn btn--ghost btn--sm descarga__btn"
                aria-label={`Descargar ${d.titulo} (${d.peso})`}
              >
                Descargar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}