import { profile } from '~/data/profile'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'

interface ExperienceProps {
  delay?: number
}

export function Experience({ delay = 0 }: ExperienceProps) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className={`py-12 fade-in-up${isVisible ? ' is-visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="text-2xl font-bold mb-6">Experiência</h2>
      <div className="space-y-8">
        {profile.experience.map((entry) => (
          <div
            key={profile.experience.indexOf(entry)}
            className="border-l-2 border-zinc-border pl-4"
          >
            <h3 className="text-xl font-semibold">{entry.company}</h3>
            <p className="text-muted-text">
              {entry.role} | {entry.period}
            </p>
            <p className="mt-2">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
