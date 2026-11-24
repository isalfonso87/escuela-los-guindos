import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FAQ from './FAQ'

describe('FAQ Accordion', () => {
  it('debe abrir la respuesta al hacer clic en una pregunta', () => {
    render(<FAQ />)

    const pregunta = screen.getByRole('button', { name: /¿Cómo postulo a la escuela?/i })
    const panel = document.getElementById('faq-panel-0')

    // Todas las preguntas comienzan cerradas
    expect(panel.parentElement).not.toHaveClass('is-open')

    // Al hacer clic se abre
    fireEvent.click(pregunta)
    expect(panel.parentElement).toHaveClass('is-open')

    // Al hacer clic de nuevo se cierra
    fireEvent.click(pregunta)
    expect(panel.parentElement).not.toHaveClass('is-open')
  })
})