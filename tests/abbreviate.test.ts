import { describe, it, expect } from 'vitest'
import { abbreviateNumber } from '../shared/utils/abbreviate'

describe('abbreviateNumber', () => {
  it('should return "0" for null, undefined, and NaN values', () => {
    expect(abbreviateNumber(null as any)).toBe('0')
    expect(abbreviateNumber(undefined as any)).toBe('0')
    expect(abbreviateNumber(NaN)).toBe('0')
  })

  it('should return the original number as string for values < 1000', () => {
    expect(abbreviateNumber(0)).toBe('0')
    expect(abbreviateNumber(5)).toBe('5')
    expect(abbreviateNumber(999)).toBe('999')
    expect(abbreviateNumber(-999)).toBe('-999')
  })

  it('should abbreviate thousands to K', () => {
    expect(abbreviateNumber(1000)).toBe('1K')
    expect(abbreviateNumber(1500)).toBe('1.5K')
    expect(abbreviateNumber(10000)).toBe('10K')
    expect(abbreviateNumber(999000)).toBe('999K')
  })

  it('should abbreviate millions to M', () => {
    expect(abbreviateNumber(1000000)).toBe('1M')
    expect(abbreviateNumber(1500000)).toBe('1.5M')
    expect(abbreviateNumber(25000000)).toBe('25M')
  })

  it('should abbreviate billions to B', () => {
    expect(abbreviateNumber(1000000000)).toBe('1B')
    expect(abbreviateNumber(1800000000)).toBe('1.8B')
  })

  it('should support custom decimal places', () => {
    expect(abbreviateNumber(1234, 2)).toBe('1.23K')
    expect(abbreviateNumber(1234, 0)).toBe('1K')
    expect(abbreviateNumber(1234567, 3)).toBe('1.235M')
  })

  it('should handle rounding edge cases by shifting tiers if necessary', () => {
    expect(abbreviateNumber(999999, 1)).toBe('1M')
    expect(abbreviateNumber(999900, 2)).toBe('999.9K')
  })

  it('should handle negative numbers correctly', () => {
    expect(abbreviateNumber(-1500)).toBe('-1.5K')
    expect(abbreviateNumber(-1000000)).toBe('-1M')
  })
})
