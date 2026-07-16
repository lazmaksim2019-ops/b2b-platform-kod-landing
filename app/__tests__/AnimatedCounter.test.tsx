import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AnimatedCounter from '../components/AnimatedCounter'

describe('AnimatedCounter', () => {
  it('renders with value and suffix', () => {
    render(<AnimatedCounter value={42} suffix="%" />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('renders with prefix', () => {
    render(<AnimatedCounter value={100} prefix="$" />)
    expect(screen.getByText('$0')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<AnimatedCounter value={5} className="font-bold" />)
    expect(container.firstChild).toHaveClass('font-bold')
  })

  it('renders with decimals', () => {
    render(<AnimatedCounter value={99.5} decimals={1} />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
