export default function marketCap(value: number) {
  if (value >= 1000000000000) { return `${(value / 1000000000000).toFixed(0)}T` }
  if (value >= 1000000000) { return `${(value / 1000000000).toFixed(0)}B` }
  if (value >= 1000000) { return `${(value / 1000000).toFixed(0)}M` }
  if (value > 1000) { return `${(value / 1000).toFixed(0)}k` }
  if (value === 0) { return '?' }
  return value
}
