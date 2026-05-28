/**
 * Truncates a string to a specified length and appends a suffix.
 * Optionally truncates at a word boundary to prevent cutting words in half.
 * 
 * @param text - The string to truncate
 * @param length - The maximum length of the returned string, including the suffix (default: 30)
 * @param suffix - The string to append to the end of the truncated text (default: '...')
 * @param preserveWords - If true, ensures the string is truncated at a word boundary (default: false)
 * @returns The truncated string
 */
export function truncate(
  text: string | null | undefined,
  length: number = 30,
  suffix: string = '...',
  preserveWords: boolean = false
): string {
  if (!text) {
    return '';
  }

  if (text.length <= length) {
    return text;
  }

  const limit = length - suffix.length;
  if (limit <= 0) {
    return text.substring(0, length);
  }

  let truncated = text.substring(0, limit);

  if (preserveWords) {
    // Find the last space within the limit to avoid cutting a word in half
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) {
      truncated = truncated.substring(0, lastSpace);
    }
  }

  return `${truncated.trim()}${suffix}`;
}

export default truncate;
