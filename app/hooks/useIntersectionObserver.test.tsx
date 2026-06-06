import {
  act,
  cleanup,
  render,
  renderHook,
  screen,
} from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  __resetObserver,
  useIntersectionObserver,
} from './useIntersectionObserver'

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void

function TestComponent() {
  const { ref, isVisible } = useIntersectionObserver()
  return (
    <div ref={ref} data-testid="target">
      {isVisible ? 'visible' : 'hidden'}
    </div>
  )
}

describe('useIntersectionObserver', () => {
  let observe: ReturnType<typeof vi.fn>
  let unobserve: ReturnType<typeof vi.fn>
  let observerCallback: ObserverCallback

  afterEach(cleanup)

  beforeEach(() => {
    __resetObserver()

    const mockObserve = vi.fn()
    const mockUnobserve = vi.fn()
    observe = mockObserve
    unobserve = mockUnobserve

    function MockIntersectionObserver(callback: ObserverCallback) {
      observerCallback = callback
      return { observe: mockObserve, unobserve: mockUnobserve, disconnect: vi.fn() }
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  it('returns a ref and isVisible false initially', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    expect(result.current.isVisible).toBe(false)
    expect(result.current.ref).toBeDefined()
  })

  it('observes the element when ref is attached', () => {
    render(<TestComponent />)
    expect(observe).toHaveBeenCalledTimes(1)
  })

  it('sets isVisible to true when element intersects', () => {
    render(<TestComponent />)

    const target = observe.mock.calls[0][0]
    act(() => {
      observerCallback([
        { isIntersecting: true, target } as IntersectionObserverEntry,
      ])
    })

    expect(screen.getByTestId('target')).toHaveTextContent('visible')
  })

  it('only triggers once and unobserve after intersection', () => {
    render(<TestComponent />)

    const target = observe.mock.calls[0][0]
    act(() => {
      observerCallback([
        { isIntersecting: true, target } as IntersectionObserverEntry,
      ])
    })
    observerCallback([
      { isIntersecting: false, target } as IntersectionObserverEntry,
    ])

    expect(unobserve).toHaveBeenCalledTimes(1)
  })

  it('does not set visible for non-intersecting elements', () => {
    render(<TestComponent />)

    const target = observe.mock.calls[0][0]
    act(() => {
      observerCallback([
        { isIntersecting: false, target } as IntersectionObserverEntry,
      ])
    })

    expect(screen.getByTestId('target')).toHaveTextContent('hidden')
  })
})
