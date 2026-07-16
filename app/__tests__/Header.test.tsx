import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

vi.mock('../components/ThemeToggle', () => ({
  default: () => <button data-testid="theme-toggle">Toggle</button>,
}))

vi.mock('../components/AuthModal', () => ({
  default: ({ isOpen }: { isOpen: boolean }) => (
    <div data-testid="auth-modal" data-open={isOpen} />
  ),
}))

describe('Header', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  it('renders logo', () => {
    render(<Header />)
    expect(screen.getByText('К')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Возможности')).toBeInTheDocument()
    expect(screen.getByText('Калькулятор')).toBeInTheDocument()
    expect(screen.getByText('Тарифы')).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<Header />)
    expect(screen.getByText('Войти')).toBeInTheDocument()
  })
})
