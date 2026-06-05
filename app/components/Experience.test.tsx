import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '~/data/profile'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders all experience entries', () => {
    render(<Experience />)

    profile.experience.forEach((entry) => {
      expect(screen.getByText(entry.company)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(entry.role))).toBeInTheDocument()
      expect(screen.getByText(new RegExp(entry.period))).toBeInTheDocument()
      expect(screen.getByText(entry.description)).toBeInTheDocument()
    })
  })
})
