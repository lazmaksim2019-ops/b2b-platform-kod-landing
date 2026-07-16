import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '../components/FAQ'

describe('FAQ', () => {
  it('renders section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Часто задаваемые вопросы')).toBeInTheDocument()
  })

  it('renders all 5 questions', () => {
    render(<FAQ />)
    expect(screen.getByText('Какие бизнес-процессы можно автоматизировать?')).toBeInTheDocument()
    expect(screen.getByText('Сколько времени занимает внедрение?')).toBeInTheDocument()
    expect(screen.getByText('Подходит ли платформа для малого бизнеса?')).toBeInTheDocument()
    expect(screen.getByText('Как обеспечивается безопасность данных?')).toBeInTheDocument()
    expect(screen.getByText('Можно ли протестировать платформу перед покупкой?')).toBeInTheDocument()
  })

  it('answers are hidden by default', () => {
    render(<FAQ />)
    expect(screen.queryByText(/обработку заказов/)).not.toBeInTheDocument()
  })

  it('shows answer when clicking a question', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    await user.click(screen.getByText('Какие бизнес-процессы можно автоматизировать?'))
    expect(screen.getByText(/обработку заказов/)).toBeInTheDocument()
  })

  it('toggles answer when clicking the same question again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const button = screen.getByText('Какие бизнес-процессы можно автоматизировать?').closest('button')!
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows new answer when clicking another question', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const btn1 = screen.getByText('Какие бизнес-процессы можно автоматизировать?').closest('button')!
    const btn2 = screen.getByText('Сколько времени занимает внедрение?').closest('button')!

    await user.click(btn1)
    expect(btn1).toHaveAttribute('aria-expanded', 'true')

    await user.click(btn2)
    expect(btn1).toHaveAttribute('aria-expanded', 'false')
    expect(btn2).toHaveAttribute('aria-expanded', 'true')
  })

  it('buttons have aria-expanded attribute', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const button = screen.getByText('Какие бизнес-процессы можно автоматизировать?').closest('button')!
    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
