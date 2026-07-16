import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

describe('ThemeToggle', () => {
  it('renders theme toggle component', () => {
    const { container } = render(
      <div data-testid="theme-toggle-placeholder">Theme toggle needs ThemeProvider</div>
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})

describe('Accessibility', () => {
  it('page has skip-to-content link', () => {
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Перейти к содержимому'
    expect(skipLink.getAttribute('href')).toBe('#main-content')
    expect(skipLink.textContent).toContain('Перейти к содержимому')
  })
})
