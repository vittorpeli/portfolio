import { profile } from '~/data/profile'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'

interface IntroductionProps {
  delay?: number
}

export function Introduction({ delay = 0 }: IntroductionProps) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className={`py-12 fade-in-up${isVisible ? ' is-visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p>{profile.introduction}</p>
    </section>
  )
}
