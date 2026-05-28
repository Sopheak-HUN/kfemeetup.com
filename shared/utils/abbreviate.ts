/**
 * Abbreviates a number to a compact string format (e.g., 1000 -> "1K", 1500000 -> "1.5M").
 * Handles decimal precision, negative numbers, and rounding edge-cases (like 999,999 rounding up to 1M).
 * 
 * @param value - The number to abbreviate
 * @param decimals - The number of decimal places to include (default: 1)
 * @returns The abbreviated string representation of the number
 */
export function abbreviateNumber(value: number, decimals: number = 1): string {
  if (value === null || value === undefined || isNaN(value)) {
    return '0';
  }

  const absValue = Math.abs(value);

  if (absValue < 1000) {
    return value.toString();
  }

  const suffixes = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  const tier = Math.min(Math.floor(Math.log10(absValue) / 3), suffixes.length - 1);

  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  let scaled = value / scale;

  // Format with specified decimals
  let formatted = scaled.toFixed(decimals);

  // If rounding makes the formatted value scale up to 1000 or more 
  // (e.g. 999999 with 1 decimal rounds to 1000.0K), shift to the next tier if possible
  if (Math.abs(parseFloat(formatted)) >= 1000 && tier < suffixes.length - 1) {
    const nextTier = tier + 1;
    const nextSuffix = suffixes[nextTier];
    const nextScale = Math.pow(10, nextTier * 3);
    scaled = value / nextScale;
    formatted = scaled.toFixed(decimals);
    return `${formatted.replace(/\.?0+$/, '')}${nextSuffix}`;
  }

  // Remove trailing zeros and unnecessary decimal point (e.g., "1.0K" -> "1K")
  if (formatted.includes('.')) {
    formatted = formatted.replace(/\.?0+$/, '');
  }

  return `${formatted}${suffix}`;
}

export default abbreviateNumber;
