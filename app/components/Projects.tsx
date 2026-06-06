import { Link } from 'lucide-react'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'
import type { Project } from '~/routes/_index'
import { GithubIcon } from './Header'

interface ProjectsProps {
  projects: Project[]
  error: string | null
  delay?: number
}

export function Projects({ projects, error, delay = 0 }: ProjectsProps) {
  const { ref, isVisible } = useIntersectionObserver()

  if (error) {
    return (
      <section
        ref={ref}
        className={`py-12 fade-in-up${isVisible ? ' is-visible' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <p className="text-red-500">{error}</p>
      </section>
    )
  }

  if (projects.length === 0) {
    return (
      <section
        ref={ref}
        className={`py-12 fade-in-up${isVisible ? ' is-visible' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <p>Nenhum projeto encontrado</p>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      className={`py-12 fade-in-up${isVisible ? ' is-visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="text-2xl font-bold mb-6">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-zinc-border rounded-lg p-6 shadow-sm flex flex-col"
          >
             <h3 className="text-xl font-semibold mb-2">
               <a
                 href={project.html_url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-border rounded-sm"
               >
                 {project.name}
               </a>
             </h3>
            <p className="text-muted-text mb-4 grow">{project.description}</p>
            <div className="flex items-center mb-4">
              {project.language && (
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2" />
              )}
              <span className="text-sm text-muted-text">
                {project.language}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.topics.map((topic: string) => (
                <span
                  key={topic}
                  className="bg-surface-subtle text-foreground-text text-xs px-2 py-1 rounded"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center text-sm text-muted-text">
                {project.stargazers_count > 0 ? (
                  <span>⭐ {project.stargazers_count}</span>
                ) : null}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 inline-flex items-center justify-center p-2 hover:text-muted-text focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-border rounded-md"
                >
                  <GithubIcon className="size-5" />
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 inline-flex items-center justify-center p-2 hover:text-muted-text focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-border rounded-md"
                  >
                    <Link className="size-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
