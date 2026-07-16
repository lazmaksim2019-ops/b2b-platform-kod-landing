import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

describe('ThemeToggle', () => {
  it('renders toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    expect(screen.getByLabelText('Включить тёмную тему')).toBeInTheDocument()
  })

  it('renders Moon icon in light mode', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
