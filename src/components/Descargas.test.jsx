import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Descargas from './Descargas'
import { DESCARGAS } from '../data/content'

describe('Descargas', () => {
  it('debe renderizar un botón de descarga por cada documento', () => {
    render(<Descargas />)

    const botones = screen.getAllByRole('link', { name: /descargar/i })
    expect(botones).toHaveLength(DESCARGAS.length)
  })

  it('cada link debe apuntar al archivo PDF correcto y tener atributo download', () => {
    render(<Descargas />)

    DESCARGAS.forEach((d) => {
      const link = screen.getByLabelText(new RegExp(`Descargar ${d.titulo}`, 'i'))
      expect(link).toHaveAttribute('href', d.archivo)
      expect(link).toHaveAttribute('download', d.nombreDescarga)
    })
  })

  it('debe mostrar la sección con su id para el anclaje del navbar', () => {
    const { container } = render(<Descargas />)
    expect(container.querySelector('#descargas')).toBeInTheDocument()
  })
})