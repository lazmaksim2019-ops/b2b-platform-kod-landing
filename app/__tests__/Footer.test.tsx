import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Платформа К-О-Д')).toBeInTheDocument()
  })

  it('renders product links', () => {
    render(<Footer />)
    expect(screen.getByText('Возможности')).toBeInTheDocument()
    expect(screen.getByText('Калькулятор')).toBeInTheDocument()
    expect(screen.getByText('Тест')).toBeInTheDocument()
    expect(screen.getByText('Тарифы')).toBeInTheDocument()
  })

  it('renders resource links', () => {
    render(<Footer />)
    expect(screen.getByText('Блог')).toBeInTheDocument()
    expect(screen.getByText('Вебинары')).toBeInTheDocument()
    expect(screen.getByText('Документация')).toBeInTheDocument()
    expect(screen.getByText('API')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText('Политика конфиденциальности')).toBeInTheDocument()
    expect(screen.getByText('Пользовательское соглашение')).toBeInTheDocument()
    expect(screen.getByText('Оферта')).toBeInTheDocument()
  })

  it('renders current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    const telegramLink = screen.getByLabelText('Telegram')
    expect(telegramLink).toHaveAttribute('href', 'https://t.me/lazalex81')
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/lazmaksim2019-ops')
  })

  it('product links have correct hrefs', () => {
    render(<Footer />)
    const features = screen.getByText('Возможности').closest('a')
    expect(features).toHaveAttribute('href', '#features')

    const calculator = screen.getByText('Калькулятор').closest('a')
    expect(calculator).toHaveAttribute('href', '#calculator')
  })

  it('social links open in new tab', () => {
    render(<Footer />)
    const links = screen.getAllByLabelText(/Telegram|GitHub/)
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
