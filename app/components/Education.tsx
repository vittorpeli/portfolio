import { profile } from '~/data/profile'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'

interface EducationProps {
  delay?: number
}

export function Education({ delay = 0 }: EducationProps) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className={`py-12 fade-in-up${isVisible ? ' is-visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="text-2xl font-bold mb-6">Educação</h2>
      <div className="space-y-8">
        {profile.education.map((entry) => (
          <div
            key={profile.education.indexOf(entry)}
            className="border-l-2 border-zinc-border pl-4"
          >
            <h3 className="text-xl font-semibold">{entry.institution}</h3>
            <p className="text-muted-text">
              {entry.degree} | {entry.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
