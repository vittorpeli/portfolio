import { beforeEach, describe, expect, it, vi } from 'vitest'
import { profile } from '~/data/profile'
import { loader } from '~/routes/_index'

describe('Home loader', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
    vi.stubEnv('GITHUB_TOKEN', 'fake-token')
    profile.featuredRepos = [
      'vittorpeli/repo-a',
      'vittorpeli/repo-b',
      'vittorpeli/repo-c',
    ]
  })

  it('should return transformed repo data for successful fetches', async () => {
    const mockRepos = [
      {
        name: 'repo-a',
        description: 'Description A',
        html_url: 'https://github.com/vittorpeli/repo-a',
        homepage: 'https://repo-a.com',
        language: 'TypeScript',
        stargazers_count: 10,
        topics: ['react', 'ts'],
      },
      {
        name: 'repo-b',
        description: 'Description B',
        html_url: 'https://github.com/vittorpeli/repo-b',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 5,
        topics: ['js'],
      },
    ]

    vi.mocked(fetch).mockImplementation(async (url) => {
      const urlStr = url.toString()
      if (urlStr.includes('repo-a')) {
        return new Response(JSON.stringify(mockRepos[0]))
      }
      if (urlStr.includes('repo-b')) {
        return new Response(JSON.stringify(mockRepos[1]))
      }
      return new Response(null, { status: 404 })
    })

    const response = await loader()

    expect(response.projects).toEqual([
      {
        name: 'repo-a',
        description: 'Description A',
        html_url: 'https://github.com/vittorpeli/repo-a',
        homepage: 'https://repo-a.com',
        language: 'TypeScript',
        stargazers_count: 10,
        topics: ['react', 'ts'],
      },
      {
        name: 'repo-b',
        description: 'Description B',
        html_url: 'https://github.com/vittorpeli/repo-b',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 5,
        topics: ['js'],
      },
    ])
  })

  it('should skip 404 repos', async () => {
    const mockRepos = [
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

    vi.mocked(fetch).mockImplementation(async (url) => {
      const urlStr = url.toString()
      if (urlStr.includes('repo-a')) {
        return new Response(JSON.stringify(mockRepos[0]))
      }
      if (urlStr.includes('repo-b')) {
        return new Response(null, { status: 404 })
      }
      return new Response(null, { status: 404 })
    })

    const response = await loader()

    expect(response.projects).toEqual([
      {
        name: 'repo-a',
        description: 'Description A',
        html_url: 'https://github.com/vittorpeli/repo-a',
        homepage: 'https://repo-a.com',
        language: 'TypeScript',
        stargazers_count: 10,
        topics: ['react', 'ts'],
      },
    ])
  })

  it('should handle network/auth error', async () => {
    vi.mocked(fetch).mockImplementation(async () => {
      throw new Error('Network error')
    })

    const response = await loader()

    expect(response.projects).toEqual([])
    expect(response.error).toBe('Erro ao carregar projetos.')
  })
})
