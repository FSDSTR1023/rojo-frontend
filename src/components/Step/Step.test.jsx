import Step from './Step'
import { afterEach, beforeEach, describe, test, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

describe('Step', () => {
  const title = 'Ensalada'
  const description = 'Tomate y lechuga'
  const stepNumber = 1

  beforeEach(() => {
    render(<Step title={title} description={description} stepNumber={stepNumber} />)
  })
  afterEach(() => {
    cleanup()
  })
  test('Check Render title', () => {
    screen.debug()
    const titleElement = screen.getByRole('heading')
    expect(titleElement.textContent).toBe(title)
  })
  test('Check Render description', () => {
    screen.debug()
    const descriptionElement = screen.getByTestId('description')
    expect(descriptionElement.textContent).toBe(description)
  })
  test('Check Render Step Number', () => {
    screen.debug()
    const stepNumberTest = screen.getByTestId('stepNumber')
    expect(stepNumberTest.textContent).toBe(stepNumber.toString())
  })
})
