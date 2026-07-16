import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import ScrollToTop from '../components/ScrollToTop'

describe('ScrollToTop', () => {
  beforeEach(() => {
    window.scrollY = 0
    window.scrollTo = vi.fn()
  })

  it('is hidden when scrollY is below threshold', () => {
    render(<ScrollToTop />)
    expect(screen.queryByLabelText('Наверх')).not.toBeInTheDocument()
  })

  it('appears when scrollY exceeds 400', () => {
    render(<ScrollToTop />)
    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByLabelText('Наверх')).toBeInTheDocument()
  })

  it('uses AnimatePresence exit animation when scrolling back up', () => {
    render(<ScrollToTop />)
    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByLabelText('Наверх')).toBeInTheDocument()

    act(() => {
      window.scrollY = 100
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByLabelText('Наверх')).toBeInTheDocument()
  })

  it('scrolls to top on click', async () => {
    render(<ScrollToTop />)
    act(() => {
      window.scrollY = 500
      window.dispatchEvent(new Event('scroll'))
    })
    const button = screen.getByLabelText('Наверх')
    button.click()
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
