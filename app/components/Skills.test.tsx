import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '~/data/profile'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders all skill categories and their items', () => {
    render(<Skills />)

    profile.skills.forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument()
      category.skills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument()
      })
    })
  })
})
