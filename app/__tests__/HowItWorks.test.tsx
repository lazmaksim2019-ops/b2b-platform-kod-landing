import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HowItWorks from '../components/HowItWorks'

describe('HowItWorks', () => {
  it('renders section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Как это работает')).toBeInTheDocument()
  })

  it('renders section description', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Всего 4 шага/)).toBeInTheDocument()
  })

  it('renders all 4 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Аудит процессов')).toBeInTheDocument()
    expect(screen.getByText('Настройка платформы')).toBeInTheDocument()
    expect(screen.getByText('Тестовый запуск')).toBeInTheDocument()
    expect(screen.getByText('Полный запуск')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Анализируем текущие/)).toBeInTheDocument()
    expect(screen.getByText(/Адаптируем решение/)).toBeInTheDocument()
    expect(screen.getByText(/Запускаем пилотный проект/)).toBeInTheDocument()
    expect(screen.getByText(/Масштабируем автоматизацию/)).toBeInTheDocument()
  })
})
