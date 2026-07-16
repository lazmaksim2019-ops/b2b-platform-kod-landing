import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AuthModal from '../components/AuthModal'

describe('AuthModal', () => {
  it('does not render when closed', () => {
    render(<AuthModal isOpen={false} onClose={() => {}} />)
    expect(screen.queryByText('Войти в аккаунт')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />)
    expect(screen.getByText('Войти в аккаунт')).toBeInTheDocument()
  })

  it('renders login form by default', () => {
    render(<AuthModal isOpen={true} onClose={() => {}} />)
    expect(screen.getByText('Войти')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('mail@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument()
  })

  it('switches to register mode', async () => {
    const user = userEvent.setup()
    render(<AuthModal isOpen={true} onClose={() => {}} />)
    await user.click(screen.getByText('Регистрация'))
    expect(screen.getByRole('heading', { name: 'Создать аккаунт' })).toBeInTheDocument()
  })

  it('calls onClose when clicking close button', () => {
    const onClose = vi.fn()
    render(<AuthModal isOpen={true} onClose={onClose} />)
    act(() => { screen.getByLabelText('Закрыть').click() })
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('registers: submit button disabled until agree checked', async () => {
    const user = userEvent.setup()
    render(<AuthModal isOpen={true} onClose={() => {}} />)
    await user.click(screen.getByText('Регистрация'))
    const submit = screen.getByRole('button', { name: 'Создать аккаунт' })
    expect(submit).toBeDisabled()
    await user.click(screen.getByRole('checkbox'))
    expect(submit).not.toBeDisabled()
  })

  it('updates email on input', async () => {
    const user = userEvent.setup()
    render(<AuthModal isOpen={true} onClose={() => {}} />)
    const input = screen.getByPlaceholderText('mail@example.com')
    await user.type(input, 'test@test.com')
    expect(input).toHaveValue('test@test.com')
  })
})
