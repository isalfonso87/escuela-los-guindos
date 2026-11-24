import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Band from './components/Band'
import Cursos from './components/Cursos'
import Testimonios from './components/Testimonios'
import Descargas from './components/Descargas'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Band />
        <Cursos />
        <Testimonios />
        <Descargas />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}