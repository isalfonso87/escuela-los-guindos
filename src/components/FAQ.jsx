import { useState } from 'react'
import { FAQS } from '../data/content'

export default function FAQ() {
  const [abierto, setAbierto] = useState(-1)

  return (
    <section id="faq" className="section section--alt">
      <div className="container faq">
        <div className="faq__head">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Resolvamos tus dudas</h2>
          <p>Si no encuentras lo que buscas, escríbenos y te respondemos a la brevedad.</p>
        </div>

        <ul className="faq__list">
          {FAQS.map((f, i) => {
            const open = abierto === i
            return (
              <li key={f.p} className={`faq__item ${open ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq__q"
                  onClick={() => setAbierto(open ? -1 : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{f.p}</span>
                  <span className="faq__icon" aria-hidden="true">+</span>
                </button>
                <div className="faq__a" id={`faq-panel-${i}`} role="region">
                  <div><p>{f.r}</p></div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}