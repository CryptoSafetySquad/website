export default function marketCap(value: number) {
  if (value >= 2000000000000) { return `${(value / 1000000000000).toFixed(0)}T` }
  if (value >= 1000000000000 && value < 2000000000000) { return `${(value / 1000000000000).toFixed(2)}T` }
  if (value >= 1000000000) { return `${(value / 1000000000).toFixed(0)}B` }
  if (value >= 1000000) { return `${(value / 1000000).toFixed(0)}M` }
  if (value > 1000) { return `${(value / 1000).toFixed(0)}k` }
  if (value === 0) { return '?' }
  return value
}
