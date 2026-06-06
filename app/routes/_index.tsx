import { useLoaderData } from 'react-router'
import { Education } from '~/components/Education'
import { Experience } from '~/components/Experience'
import { Header } from '~/components/Header'
import { Introduction } from '~/components/Introduction'
import { Projects } from '~/components/Projects'
import { Skills } from '~/components/Skills'
import { profile } from '~/data/profile'

export type Project = {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  topics: string[]
}

export type LoaderResponse = {
  projects: Project[]
  error: string | null
}

export async function loader(): Promise<LoaderResponse> {
  const repos = profile.featuredRepos
  const token = process.env.GITHUB_TOKEN

  const projects: Project[] = []
  let error: string | null = null

  try {
    const fetchPromises = repos.map(async (slug) => {
      const headers: Record<string, string> = {}
      if (token) {
        headers.Authorization = `Bearer ${token}`
      }

      const response = await fetch(`https://api.github.com/repos/${slug}`, {
        headers,
      })

      if (response.status === 404) {
        return null
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch ${slug}`)
      }

      const data = await response.json()
      return {
        name: data.name,
        description: data.description,
        html_url: data.html_url,
        homepage: data.homepage,
        language: data.language,
        stargazers_count: data.stargazers_count,
        topics: data.topics || [],
      }
    })

    const results = await Promise.all(fetchPromises)
    for (const result of results) {
      if (result) {
        projects.push(result)
      }
    }
  } catch (e) {
    error = `Erro ao carregar projetos. ${e instanceof Error ? e.message : 'Erro desconhecido'}`
  }

  return { projects, error }
}

export function meta() {
  return [
    { title: 'Meu Portfólio - Vittor' },
    { name: 'description', content: 'Bem-vindo ao meu portfólio' },
  ]
}

export default function Home() {
  const { projects, error } = useLoaderData<{
    projects: Project[]
    error: string | null
  }>()

  return (
    <main className="mx-auto my-6 max-w-2xl px-6 font-sans">
      <section className="py-12">
        <Header />
      </section>
      <Introduction delay={0} />
      <Skills delay={100} />
      <Experience delay={200} />
      <Education delay={300} />
      <Projects projects={projects} error={error} delay={400} />

      <footer>
        <p className="text-center">Vittor</p>
      </footer>
    </main>
  )
}
