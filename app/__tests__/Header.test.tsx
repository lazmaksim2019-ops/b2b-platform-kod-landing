import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
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

  it('renders brand name', () => {
    render(<Header />)
    expect(screen.getByText('Платформа К-О-Д')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Возможности')).toBeInTheDocument()
    expect(screen.getByText('Калькулятор')).toBeInTheDocument()
    expect(screen.getByText('Тест')).toBeInTheDocument()
    expect(screen.getByText('Тарифы')).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<Header />)
    expect(screen.getByText('Войти')).toBeInTheDocument()
  })

  it('applies scrolled class after scrolling past 20px', () => {
    render(<Header />)
    const header = document.querySelector('header')!
    expect(header.className).not.toContain('backdrop-blur')

    act(() => {
      window.scrollY = 50
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('backdrop-blur')
  })

  it('has transparent class at top', () => {
    render(<Header />)
    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-transparent')
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    expect(screen.getByLabelText('Открыть меню')).toBeInTheDocument()
  })

  it('opens mobile menu on button click', () => {
    render(<Header />)
    const menuBtn = screen.getByLabelText('Открыть меню')
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
    act(() => { menuBtn.click() })
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('mobile menu shows navigation links', () => {
    render(<Header />)
    act(() => { screen.getByLabelText('Открыть меню').click() })
    const links = screen.getAllByText('Возможности')
    expect(links.length).toBeGreaterThanOrEqual(2)
  })

  it('mobile menu login button opens auth modal', () => {
    render(<Header />)
    act(() => { screen.getByLabelText('Открыть меню').click() })
    const loginBtns = screen.getAllByText('Войти')
    const mobileLogin = loginBtns[loginBtns.length - 1]
    act(() => { mobileLogin.click() })
    const modal = screen.getByTestId('auth-modal')
    expect(modal).toHaveAttribute('data-open', 'true')
  })

  it('mobile menu has close button', () => {
    render(<Header />)
    act(() => { screen.getByLabelText('Открыть меню').click() })
    const closeBtns = screen.getAllByLabelText('Закрыть меню')
    expect(closeBtns).toHaveLength(2)
  })

  it('renders theme toggle', () => {
    render(<Header />)
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument()
  })
})
