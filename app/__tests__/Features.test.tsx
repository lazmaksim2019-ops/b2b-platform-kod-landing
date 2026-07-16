import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Features from '../components/Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText('Ключевые возможности платформы')).toBeInTheDocument()
  })

  it('renders section description', () => {
    render(<Features />)
    expect(screen.getByText(/помогают автоматизировать/)).toBeInTheDocument()
  })

  it('renders all 3 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Рост выручки')).toBeInTheDocument()
    expect(screen.getByText('Безопасность данных')).toBeInTheDocument()
    expect(screen.getByText('Масштабирование')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Увеличьте конверсию на 15-25%/)).toBeInTheDocument()
    expect(screen.getByText(/GDPR-совместимым решениям/)).toBeInTheDocument()
    expect(screen.getByText(/в 3 раза больше заказов/)).toBeInTheDocument()
  })
})
