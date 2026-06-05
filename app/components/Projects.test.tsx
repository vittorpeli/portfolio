import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import type { Project } from '~/routes/_index'
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('Projects component', () => {
  const mockProjects: Project[] = [
    {
      name: 'repo-a',
      description: 'Description A',
      html_url: 'https://github.com/vittorpeli/repo-a',
      homepage: 'https://repo-a.com',
      language: 'TypeScript',
      stargazers_count: 10,
      topics: ['react', 'ts'],
    },
  ]

  it('renders projects cards correctly', () => {
    render(<Projects projects={mockProjects} error={null} />)

    expect(screen.getByText('repo-a')).toBeInTheDocument()
    expect(screen.getByText('Description A')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('⭐ 10')).toBeInTheDocument()
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('ts')).toBeInTheDocument()
    expect(screen.getByText('Repositório')).toBeInTheDocument()
    expect(screen.getByText('Live Demo')).toBeInTheDocument()
  })

  it('renders error message when error is provided', () => {
    render(<Projects projects={[]} error="Erro ao carregar projetos." />)
    expect(screen.getByText('Erro ao carregar projetos.')).toBeInTheDocument()
  })

  it('renders empty message when no projects are provided', () => {
    render(<Projects projects={[]} error={null} />)
    expect(screen.getByText('Nenhum projeto encontrado')).toBeInTheDocument()
  })
})
