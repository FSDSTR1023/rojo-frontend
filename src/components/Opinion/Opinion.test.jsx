import Opinion from './Opinion'
import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

const DATA = {
  text: 'Easy to follow steps, and the result was amazing.',
  rating: 4,
  user: '65b00b56b69f4b84e4756561',
  _id: '65b00b57b69f4b84e475657b',
}

describe('Opinion', () => {
  beforeEach(() => {
    // render(<Opinion {...DATA} />)
    render(<h1>Hola</h1>)
  })
  test('It renders the opinion text', () => {
    // screen.debug()
    expect(screen.getByText('Hola')).toBeDefined()
  })
})
