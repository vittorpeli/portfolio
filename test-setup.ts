import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

vi.stubGlobal(
  "IntersectionObserver",
  vi.fn(function () {
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }
  }),
)
