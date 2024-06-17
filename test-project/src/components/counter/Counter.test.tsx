import {render, screen} from '@testing-library/react'
import {Counter} from './Counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    expect(incrementButton).toBeInTheDocument()
    const amountInput = screen.getByRole('spinbutton') // 数値入力テストはspinbuttonを使う
    expect(amountInput).toBeInTheDocument()
    const setButton = screen.getByRole('button', { name: 'Set'})
    expect(setButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })
})