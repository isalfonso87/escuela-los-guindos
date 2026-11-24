import { useState } from 'react'
import { MOTIVOS, CONTACTO } from '../data/content'

export default function Contacto() {
  const vacio = { nombre: '', email: '', telefono: '', motivo: MOTIVOS[0], mensaje: '' }
  const [form, setForm] = useState(vacio)
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: conectar con tu backend real (Formspree, EmailJS, etc.)
    setEnviado(true)
    setForm(vacio)
  }

  return (
    <section id="contacto" className="section">
      <div className="container contacto">
        <div className="contacto__info">
          <p className="eyebrow">Contacto</p>
          <h2>Conversemos</h2>
          <p>Escríbenos para consultas de admisión, visitas o cualquier duda sobre la escuela.</p>

          <ul className="contacto__datos">
            <li>
              <strong>Dirección</strong>
              <span>{CONTACTO.direccion}</span>
            </li>
            <li>
              <strong>Teléfono</strong>
              <a href={`tel:${CONTACTO.telefonoHref}`}>{CONTACTO.telefono}</a>
            </li>
            <li>
              <strong>Correo</strong>
              <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
            </li>
            <li>
              <strong>Horario</strong>
              <span>{CONTACTO.horario}</span>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__row">
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" required
                value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" />
            </div>
            <div className="campo">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" type="tel"
                value={form.telefono} onChange={handleChange} placeholder="+56 9 ..." />
            </div>
          </div>

          <div className="form__row">
            <div className="campo">
              <label htmlFor="email">Correo electrónico</label>
              <input id="email" name="email" type="email" required
                value={form.email} onChange={handleChange} placeholder="tucorreo@ejemplo.cl" />
            </div>
            <div className="campo">
              <label htmlFor="motivo">Motivo</label>
              <select id="motivo" name="motivo" value={form.motivo} onChange={handleChange}>
                {MOTIVOS.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required
              value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos en qué te podemos ayudar" />
          </div>

          <button type="submit" className="btn btn--primary">Enviar mensaje</button>

          {enviado && (
            <p className="form__ok" role="status">
              ¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}