import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import ScrollProgress from '../components/ScrollProgress'

describe('ScrollProgress', () => {
  it('renders progress bar', () => {
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector('[role="progressbar"]')
    expect(bar).toBeInTheDocument()
  })

  it('has accessible label', () => {
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector('[role="progressbar"]')
    expect(bar).toHaveAttribute('aria-label', 'Progress')
  })
})
