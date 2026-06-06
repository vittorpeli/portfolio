import { useCallback, useRef, useState } from 'react'

const observerMap = new Map<Element, () => void>()

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!observer) {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const callback = observerMap.get(entry.target)
            if (callback) {
              callback()
              observerMap.delete(entry.target)
              obs.unobserve(entry.target)
            }
          }
        }
      },
      { threshold: 0.1 },
    )
    observer = obs
  }
  return observer
}

export function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<Element | null>(null)

  const ref = useCallback((node: Element | null) => {
    if (elementRef.current) {
      observerMap.delete(elementRef.current)
      observer?.unobserve(elementRef.current)
    }
    if (node) {
      elementRef.current = node
      observerMap.set(node, () => setIsVisible(true))
      getObserver().observe(node)
    }
  }, [])

  return { ref, isVisible }
}

export function __resetObserver() {
  observerMap.clear()
  if (observer) {
    observer.disconnect()
  }
  observer = null
}
