import logoImg from '../assets/Logo.png'

export default function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="Escuela Particular N°46 Los Guindos — Inicio">
      <img
        src={logoImg}
        alt="Escuela Particular N°46 Los Guindos"
        className="logo__img"
        width="60"
        height="60"
        loading="eager"
        decoding="async"
      />
      {/* Texto visualmente oculto para SEO y accesibilidad */}
      <span className="logo__text" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)' }}>
        <strong>Los Guindos</strong>
        <small>Escuela Rural</small>
      </span>
    </a>
  )
}