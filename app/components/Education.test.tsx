import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { profile } from '~/data/profile'
import { Education } from './Education'

describe('Education', () => {
  it('renders all education entries', () => {
    render(<Education />)

    profile.education.forEach((entry) => {
      expect(screen.getByText(entry.institution)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(entry.degree))).toBeInTheDocument()
      expect(screen.getByText(new RegExp(entry.period))).toBeInTheDocument()
      expect(screen.getByText(entry.description)).toBeInTheDocument()
    })
  })
})
