export default function formatPercent(amount: number): JSX.Element {
  const pct = amount * 100;
  let pctClass = "";
  if (pct >= 100) { pctClass = 'healthy'; }
  if (pct < 100) { pctClass = 'danger'; }
  if (pct === Infinity) { pctClass = 'danger'; }

  return <span className={pctClass}>{pct.toFixed(2)}</span>
}
