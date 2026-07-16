import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import Testimonials from '../components/Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Отзывы клиентов')).toBeInTheDocument()
  })

  it('renders first testimonial name', () => {
    render(<Testimonials />)
    expect(screen.getByText('Алексей Иванов')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Предыдущий отзыв')).toBeInTheDocument()
    expect(screen.getByLabelText('Следующий отзыв')).toBeInTheDocument()
  })

  it('renders dot pagination', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Отзыв 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Отзыв 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Отзыв 3')).toBeInTheDocument()
  })

  it('navigates to next testimonial', () => {
    render(<Testimonials />)
    act(() => { screen.getByLabelText('Следующий отзыв').click() })
    expect(screen.getByLabelText('Отзыв 2')).toHaveClass('text-indigo-600')
  })

  it('navigates to previous testimonial', () => {
    render(<Testimonials />)
    act(() => { screen.getByLabelText('Следующий отзыв').click() })
    act(() => { screen.getByLabelText('Предыдущий отзыв').click() })
    expect(screen.getByLabelText('Отзыв 1')).toHaveClass('text-indigo-600')
  })

  it('navigates to specific testimonial via dot', () => {
    render(<Testimonials />)
    act(() => { screen.getByLabelText('Отзыв 3').click() })
    expect(screen.getByLabelText('Отзыв 3')).toHaveClass('text-indigo-600')
  })

  it('first dot is active by default', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Отзыв 1')).toHaveClass('text-indigo-600')
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('svg.text-yellow-400')
    expect(stars.length).toBe(5)
  })})

