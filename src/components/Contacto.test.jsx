import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contacto from './Contacto'

describe('Formulario de Contacto', () => {
  it('debe mostrar mensaje de éxito al enviar el formulario', () => {
    render(<Contacto />)

    fireEvent.change(screen.getByLabelText(/^Nombre$/i), { target: { value: 'Ana Pérez' } })
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), { target: { value: 'ana@ejemplo.cl' } })
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Consulta sobre admisión 2026.' } })

    fireEvent.click(screen.getByRole('button', { name: /Enviar mensaje/i }))

    expect(screen.getByText(/¡Gracias! Hemos recibido tu mensaje/i)).toBeInTheDocument()
  })
})