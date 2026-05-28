import { describe, it, expect } from 'vitest'
import { truncate } from '../shared/utils/truncate'

describe('truncate', () => {
  it('should return empty string for null, undefined, or empty text', () => {
    expect(truncate(null)).toBe('')
    expect(truncate(undefined)).toBe('')
    expect(truncate('')).toBe('')
  })

  it('should return original text if it is shorter than or equal to the limit', () => {
    expect(truncate('Short text', 20)).toBe('Short text')
    expect(truncate('Exact length!', 13)).toBe('Exact length!')
  })

  it('should truncate and append the default suffix "..." when exceeding length', () => {
    expect(truncate('Hello World', 10)).toBe('Hello W...')
  })

  it('should support custom suffix', () => {
    expect(truncate('Hello World', 10, '!')).toBe('Hello Wor!')
    expect(truncate('Hello World', 9, '---')).toBe('Hello---')
  })

  it('should support preserving word boundaries', () => {
    expect(truncate('Hello Beautiful World', 15, '...', false)).toBe('Hello Beauti...')
    expect(truncate('Hello Beautiful World', 15, '...', true)).toBe('Hello...')
  })

  it('should handle small lengths where limit is less than or equal to 0', () => {
    expect(truncate('Hello World', 2)).toBe('He')
  })
})
