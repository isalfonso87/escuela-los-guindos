import { useState } from 'react'
import Logo from './Logo'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cerrar = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Logo />

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>

        <nav id="menu-principal" className={`nav__menu ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={cerrar}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn--primary btn--sm" onClick={cerrar}>
            Matrículas 2027
          </a>
        </nav>
      </div>
    </header>
  )
}