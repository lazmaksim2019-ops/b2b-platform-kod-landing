import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Pricing from '../components/Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Тарифные планы')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Pricing />)
    expect(screen.getByText('Выберите подходящий тариф для вашего бизнеса')).toBeInTheDocument()
  })

  it('renders all 3 plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Базовый')).toBeInTheDocument()
    expect(screen.getByText('Профессиональный')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('renders monthly label by default', () => {
    render(<Pricing />)
    const labels = screen.getAllByText('₽/мес')
    expect(labels).toHaveLength(3)
  })

  it('renders ХИТ ПРОДАЖ badge on professional plan', () => {
    render(<Pricing />)
    expect(screen.getByText('ХИТ ПРОДАЖ')).toBeInTheDocument()
  })

  it('renders professional with gradient CTA', () => {
    render(<Pricing />)
    expect(screen.getByText('Начать бесплатный период')).toBeInTheDocument()
  })

  it('renders basic and enterprise with Подробнее', () => {
    render(<Pricing />)
    const details = screen.getAllByText('Подробнее')
    expect(details).toHaveLength(2)
  })

  it('renders billing toggle buttons', () => {
    render(<Pricing />)
    expect(screen.getByText('Ежемесячно')).toBeInTheDocument()
    expect(screen.getByText('Годовое')).toBeInTheDocument()
  })

  it('yearly button becomes active on click', () => {
    render(<Pricing />)
    const yearlyBtn = screen.getByText('Годовое')
    fireEvent.click(yearlyBtn)
    expect(yearlyBtn.className).toContain('bg-indigo-600')
  })

  it('monthly button becomes active after toggling back', () => {
    render(<Pricing />)
    const monthlyBtn = screen.getByText('Ежемесячно')
    const yearlyBtn = screen.getByText('Годовое')
    fireEvent.click(yearlyBtn)
    expect(yearlyBtn.className).toContain('bg-indigo-600')
    fireEvent.click(monthlyBtn)
    expect(monthlyBtn.className).toContain('bg-indigo-600')
  })

  it('renders feature list for basic plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Доступ к платформе')).toBeInTheDocument()
    expect(screen.getByText('Базовая аналитика')).toBeInTheDocument()
    expect(screen.getByText('5 пользователей')).toBeInTheDocument()
    expect(screen.getByText('Email поддержка')).toBeInTheDocument()
  })

  it('renders feature list for professional plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Все возможности базового тарифа')).toBeInTheDocument()
    expect(screen.getByText('Продвинутая аналитика')).toBeInTheDocument()
    expect(screen.getByText('Неограниченное количество пользователей')).toBeInTheDocument()
    expect(screen.getByText('Чат поддержка 24/7')).toBeInTheDocument()
    expect(screen.getByText('API доступ')).toBeInTheDocument()
    expect(screen.getByText('Индивидуальная интеграция')).toBeInTheDocument()
  })

  it('renders feature list for enterprise plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Все возможности профессионального')).toBeInTheDocument()
    expect(screen.getByText('Персональный менеджер')).toBeInTheDocument()
    expect(screen.getByText('Обучение и внедрение')).toBeInTheDocument()
    expect(screen.getByText('SLA гарантии')).toBeInTheDocument()
    expect(screen.getByText('Приоритетная поддержка')).toBeInTheDocument()
  })

  it('renders check icons', () => {
    render(<Pricing />)
    const checks = document.querySelectorAll('.lucide-check')
    expect(checks.length).toBe(15)
  })
})
