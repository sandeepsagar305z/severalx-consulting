// Utility helpers for working with URLs
export const ensureAbsoluteUrl = (input: string) => {
  const raw = input.trim()

  if (!raw) {
    throw new Error('URL is empty')
  }

  if (/^https?:\/\//i.test(raw)) {
    return raw
  }

  if (raw.startsWith('//')) {
    return `https:${raw}`
  }

  const lower = raw.toLowerCase()
  const firstChar = lower[0]
  const shouldUseHttp =
    lower.includes('.internal') ||
    lower.startsWith('localhost') ||
    (firstChar !== undefined && firstChar >= '0' && firstChar <= '9') ||
    firstChar === '['

  const protocol = shouldUseHttp ? 'http://' : 'https://'
  return `${protocol}${raw}`
}
