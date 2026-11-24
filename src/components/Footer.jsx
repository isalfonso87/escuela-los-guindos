import Logo from './Logo'
import { NAV_LINKS, CONTACTO } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__desc">
              Escuela rural, gratuita y con altos estandares de cálidad. Educando con la comunidad y el
              territorio desde 1982.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div>
            <h4>Navegación</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Institución</h4>
            <ul>
              <li><a href="#descargas">Proyecto educativo</a></li>
              <li><a href="#descargas">Reglamento interno</a></li>
              <li><a href="#pie">Programa PIE</a></li>
              <li><a href="#descargas">Convivencia escolar</a></li>            
              <li><a href="#faq">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>{CONTACTO.direccion}</li>
              <li><a href={`tel:${CONTACTO.telefonoHref}`}>{CONTACTO.telefono}</a></li>
              <li><a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a></li>
              <li>{CONTACTO.horario}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Escuela Rural Los Guindos. Contenido de demostración.</span>
          <span>Hecho con cariño de parte de @isalfonso87 - GitHub 🌿</span>
        </div>
      </div>
    </footer>
  )
}