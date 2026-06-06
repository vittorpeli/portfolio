import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

// Mock matchMedia
const mockMatchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

vi.stubGlobal('matchMedia', mockMatchMedia)

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
    vi.clearAllMocks()
  })

  it('should toggle the dark class on html element', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    act(() => {
      result.current.toggleTheme()
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)

    act(() => {
      result.current.toggleTheme()
    })

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('should persist theme in localStorage', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    act(() => {
      result.current.toggleTheme()
    })

    expect(localStorage.getItem('theme')).toBe('dark')

    act(() => {
      result.current.toggleTheme()
    })

    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('should load theme from localStorage on mount', () => {
    localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should respect system preference if no localStorage is set', () => {
    // Mock matchMedia to return dark mode
    mockMatchMedia.mockReturnValueOnce({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
