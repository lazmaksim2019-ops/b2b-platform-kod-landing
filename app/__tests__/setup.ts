import '@testing-library/jest-dom/vitest'

if (typeof IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    readonly root: Element | null = null
    readonly rootMargin: string = ''
    readonly thresholds: ReadonlyArray<number> = []
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] { return [] }
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    value: MockIntersectionObserver,
  })
}

