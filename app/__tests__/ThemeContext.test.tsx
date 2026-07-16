import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, renderHook, act } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(<ThemeProvider><div data-testid="child" /></ThemeProvider>)
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('starts with light theme by default', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })

  it('reads theme from localStorage', () => {
    localStorage.setItem('theme', 'dark')
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })

  it('adds dark class to html when theme is dark', () => {
    localStorage.setItem('theme', 'dark')
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    )
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles theme from light to dark', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    )
    act(() => { screen.getByTestId('toggle').click() })
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('toggles theme from dark to light', () => {
    localStorage.setItem('theme', 'dark')
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    )
    act(() => { screen.getByTestId('toggle').click() })
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('prefers system dark mode when no localStorage', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })
})

describe('useTheme', () => {
  it('throws when used outside ThemeProvider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within ThemeProvider'
    )
  })

  it('returns theme context inside provider', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })
    expect(result.current.theme).toBe('light')
    expect(typeof result.current.toggleTheme).toBe('function')
  })
})

function TestConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="toggle" onClick={toggleTheme}>Toggle</button>
    </div>
  )
}
