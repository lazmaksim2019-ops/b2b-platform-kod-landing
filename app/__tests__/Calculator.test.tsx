import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator, { formatNumber, calculateResults } from '../components/Calculator'

describe('Calculator utilities', () => {
  it('formatNumber formats with Russian locale', () => {
    expect(formatNumber(1000000)).toBe('1 000 000')
    expect(formatNumber(5000)).toBe('5 000')
    expect(formatNumber(50)).toBe('50')
  })

  it('calculateResults returns correct values', () => {
    const result = calculateResults(10, 1000000)
    expect(result.timeSaved).toBe(40)
    expect(result.revenueIncrease).toBe(50000)
  })

  it('calculateResults with zero employees', () => {
    const result = calculateResults(0, 0)
    expect(result.timeSaved).toBe(0)
    expect(result.revenueIncrease).toBe(0)
  })

  it('calculateResults with large values', () => {
    const result = calculateResults(500, 10000000)
    expect(result.timeSaved).toBe(2000)
    expect(result.revenueIncrease).toBe(500000)
  })
})

describe('Calculator', () => {
  it('renders section heading', () => {
    render(<Calculator />)
    expect(screen.getByText('Интерактивный калькулятор окупаемости')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Calculator />)
    expect(screen.getByText(/Рассчитайте, сколько вы сэкономите/)).toBeInTheDocument()
  })

  it('renders employees slider with label', () => {
    render(<Calculator />)
    expect(screen.getByText('Количество сотрудников')).toBeInTheDocument()
    expect(screen.getByLabelText('Количество сотрудников')).toBeInTheDocument()
  })

  it('renders turnover slider with label', () => {
    render(<Calculator />)
    expect(screen.getByText('Объем заказов в месяц (руб.)')).toBeInTheDocument()
    expect(screen.getByLabelText('Объем заказов в месяц (руб.)')).toBeInTheDocument()
  })

  it('shows default employees value of 50', () => {
    render(<Calculator />)
    const slider = screen.getByLabelText('Количество сотрудников') as HTMLInputElement
    expect(slider.value).toBe('50')
  })

  it('shows default turnover value of 1000000', () => {
    render(<Calculator />)
    const slider = screen.getByLabelText('Объем заказов в месяц (руб.)') as HTMLInputElement
    expect(slider.value).toBe('1000000')
  })

  it('updates employees value on slider change', () => {
    render(<Calculator />)
    const slider = screen.getByLabelText('Количество сотрудников')
    fireEvent.change(slider, { target: { value: '100' } })
    expect((slider as HTMLInputElement).value).toBe('100')
  })

  it('updates turnover value on slider change', () => {
    render(<Calculator />)
    const slider = screen.getByLabelText('Объем заказов в месяц (руб.)')
    fireEvent.change(slider, { target: { value: '5000000' } })
    expect((slider as HTMLInputElement).value).toBe('5000000')
  })

  it('shows predicted benefit section', () => {
    render(<Calculator />)
    expect(screen.getByText('Прогнозируемая выгода')).toBeInTheDocument()
    expect(screen.getByText('Экономия времени в месяц')).toBeInTheDocument()
    expect(screen.getByText('Рост выручки в месяц')).toBeInTheDocument()
  })

  it('renders get audit button', () => {
    render(<Calculator />)
    expect(screen.getByText('Получить детальный аудит')).toBeInTheDocument()
  })

  it('opens modal on get audit button click', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    expect(screen.getByText(/Оставьте свои контактные данные/)).toBeInTheDocument()
  })

  it('modal has name, email, phone inputs', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    expect(screen.getByLabelText('Ваше имя *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email *')).toBeInTheDocument()
    expect(screen.getByLabelText('Телефон')).toBeInTheDocument()
  })

  it('modal submit button is disabled initially', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    expect(screen.getByText('Отправить')).toBeDisabled()
  })

  it('modal submit button enables when name and email are filled', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    fireEvent.change(screen.getByLabelText('Ваше имя *'), { target: { value: 'Иван' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'ivan@test.com' } })
    expect(screen.getByText('Отправить')).not.toBeDisabled()
  })

  it('submit form shows success state', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    fireEvent.change(screen.getByLabelText('Ваше имя *'), { target: { value: 'Иван' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'ivan@test.com' } })
    fireEvent.click(screen.getByText('Отправить'))
    expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()
  })

  it('closes modal on close button', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    fireEvent.change(screen.getByLabelText('Ваше имя *'), { target: { value: 'Иван' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'ivan@test.com' } })
    fireEvent.click(screen.getByText('Отправить'))
    fireEvent.click(screen.getByText('Закрыть'))
    expect(screen.queryByText('Заявка отправлена!')).not.toBeInTheDocument()
  })

  it('shows cancel button in modal form', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    expect(screen.getByText('Отмена')).toBeInTheDocument()
  })

  it('closes modal on cancel', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    fireEvent.click(screen.getByText('Отмена'))
    expect(screen.queryByText(/Оставьте свои контактные данные/)).not.toBeInTheDocument()
  })

  it('phone field updates on input', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('Получить детальный аудит'))
    const phone = screen.getByLabelText('Телефон') as HTMLInputElement
    fireEvent.change(phone, { target: { value: '+7 999 123-45-67' } })
    expect(phone.value).toBe('+7 999 123-45-67')
  })

  it('shows formatted employee count', () => {
    render(<Calculator />)
    expect(screen.getByText(/50 чел/)).toBeInTheDocument()
  })

  it('shows formatted turnover', () => {
    render(<Calculator />)
    expect(screen.getByText(/1 000 000/)).toBeInTheDocument()
  })
})
