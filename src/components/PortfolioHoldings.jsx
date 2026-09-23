const holdings = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', shares: 120, average: 118.5, price: 142.87, change: 3.42, color: '#76b900', mark: 'N' },
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 95, average: 210.25, price: 237.49, change: 1.28, color: '#adb5c3', mark: 'A' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', shares: 60, average: 397.8, price: 428.76, change: 0.84, color: '#4aa0eb', mark: 'M' },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', shares: 80, average: 203.1, price: 228.93, change: 2.16, color: '#eea443', mark: 'a' },
]
const currency = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

export default function PortfolioHoldings({ onTrade }) {
  return <section className="panel holdings-panel" id="holdings"><div className="panel-header"><div><div className="panel-kicker">IN YOUR PORTFOLIO</div><h2>Your holdings</h2></div><span className="holdings-total">4 positions</span></div><div className="holdings-table-wrap"><table className="holdings-table"><thead><tr><th>INVESTMENT</th><th>SHARES</th><th>AVERAGE COST</th><th>MARKET VALUE</th><th>TODAY</th><th/></tr></thead><tbody>{holdings.map((holding) => <tr key={holding.symbol}><td><span className="holding-name"><i style={{ '--brand-color': holding.color }}>{holding.mark}</i><span><strong>{holding.symbol}</strong><small>{holding.name}</small></span></span></td><td>{holding.shares}</td><td>{currency(holding.average)}</td><td className="holding-value">{currency(holding.price * holding.shares)}</td><td><span className={holding.change < 0 ? 'negative' : 'positive'}>{holding.change > 0 ? '+' : ''}{holding.change.toFixed(2)}%</span></td><td><button className="holding-trade" onClick={() => onTrade(holding.symbol)}>Trade</button></td></tr>)}</tbody></table></div></section>
}
