import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import Tag from './Tag'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

describe('Tag', () => {
  const text = 'Hola'
  const onClickFn = vi.fn()
  beforeEach(() => {
    render(<Tag handleClick={onClickFn}>{text}</Tag>)
  })
  afterEach(() => {
    cleanup()
  })
  test('It renders the text', () => {
    expect(screen.findByText(text)).toBeDefined()
  })
  test('It executes the on click function', () => {
    screen.debug()
    const tag = screen.getByRole('button')
    fireEvent.click(tag)
    expect(onClickFn).toHaveBeenCalled()
  })
})
