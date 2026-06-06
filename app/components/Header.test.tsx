import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '../context/ThemeContext'
import { Header } from './Header'

// Mock matchMedia
const mockMatchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

vi.stubGlobal('matchMedia', mockMatchMedia)

describe('Header', () => {
  it('renders placeholder data correctly', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    )

    expect(screen.getByText('Vittor Pelicarto')).toBeInTheDocument()
    expect(screen.getByText('Desenvolvedor Web')).toBeInTheDocument()
    expect(screen.getByText('Brasília, Brasil')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:vittor.pelicarto@gmail.com',
    )

    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/vittor-pelicarto',
    )

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/vittorpeli',
    )

    const resumeLink = screen.getByText('Currículo')
    expect(resumeLink.closest('a')).toHaveAttribute('href', '/resume.pdf')
  })
})
