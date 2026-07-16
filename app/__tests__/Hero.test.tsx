import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Автоматизируйте/)).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/с платформой К-О-Д/)).toBeInTheDocument()
  })

  it('renders category label', () => {
    render(<Hero />)
    expect(screen.getByText(/Интеллектуальная автоматизация B2B/)).toBeInTheDocument()
  })

  it('renders CTA button to calculator', () => {
    render(<Hero />)
    const link = screen.getByText('Рассчитать стоимость')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', '#calculator')
  })

  it('renders CTA button to quiz', () => {
    render(<Hero />)
    const link = screen.getByText('Пройти тест')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', '#quiz')
  })

  it('renders stat cards', () => {
    render(<Hero />)
    expect(screen.getByText('Экономия времени')).toBeInTheDocument()
    expect(screen.getByText('Масштабирование')).toBeInTheDocument()
    expect(screen.getByText('Рост выручки')).toBeInTheDocument()
  })

  it('renders AnimatedCounter values', () => {
    render(<Hero />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })
})
