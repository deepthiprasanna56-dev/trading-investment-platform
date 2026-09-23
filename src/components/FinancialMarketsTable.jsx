import { useState } from 'react'

const markets = [
  { id: 'spx', symbol: 'SPX', name: 'S&P 500', country: 'United States', flag: '🇺🇸', ytd: 11.72, eps: 7.42, yield: 1.44, cap: '$39.9T', volume: '24.6B', price: '$5,842.47', change: 0.82, values: [8, 11, 10, 15, 13, 18, 16, 23] },
  { id: 'ixic', symbol: 'IXIC', name: 'Nasdaq Composite', country: 'United States', flag: '🇺🇸', ytd: 18.59, eps: null, yield: 0.54, cap: '$29.9T', volume: '18.9B', price: '$18,421.06', change: 1.24, values: [6, 10, 9, 14, 12, 18, 15, 24] },
  { id: 'dji', symbol: 'DJI', name: 'Dow Jones Industrial Average', country: 'United States', flag: '🇺🇸', ytd: 0.40, eps: 18.74, yield: 2, cap: '$13.0T', volume: '1.7B', price: '$43,275.91', change: 0.38, values: [12, 10, 14, 13, 17, 15, 20, 22] },
  { id: 'tsx', symbol: 'TSX', name: 'S&P/TSX Composite', country: 'Canada', flag: '🇨🇦', ytd: -0.78, eps: 6.06, yield: 2.56, cap: '$3.7T', volume: '771M', price: '$32.96', change: -0.58, values: [21, 19, 22, 17, 19, 14, 16, 12] },
  { id: 'bovespa', symbol: 'IBOV', name: 'Ibovespa', country: 'Brazil', flag: '🇧🇷', ytd: 11.19, eps: 6.23, yield: 9.46, cap: '$4.9T', volume: '6.8B', price: '$29.28', change: -0.22, values: [12, 14, 13, 18, 17, 16, 20, 19] },
]

function Sparkline({ values, negative }) {
  const min = Math.min(...values)
  const span = Math.max(...values) - min || 1
  const points = values.map((value, index) => `${index * (100 / (values.length - 1))},${24 - ((value - min) / span) * 19}`).join(' ')
  return <svg className="market-sparkline" viewBox="0 0 100 26" role="img" aria-label={`${negative ? 'Downward' : 'Upward'} market trend`}><polyline points={points} fill="none" stroke={negative ? '#dc777c' : '#35a981'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/></svg>
}

export default function FinancialMarketsTable() {
  const [selected, setSelected] = useState('spx')
  return <section className="panel market-directory" aria-label="Global market index directory">
    <div className="panel-header market-directory-heading"><div><div className="panel-kicker">A WIDER VIEW</div><h2>Markets around the world</h2><p>Follow the benchmarks that move global portfolios.</p></div><span className="directory-live"><i/> Exchange data · indicative</span></div>
    <div className="market-directory-scroll"><table className="directory-table"><thead><tr><th>INDEX</th><th>YTD RETURN</th><th>P/E RATIO</th><th>DIV. YIELD</th><th>MARKET CAP</th><th>VOLUME</th><th>2D TREND</th><th>LAST PRICE</th><th>DAILY MOVE</th></tr></thead><tbody>{markets.map((market) => <tr key={market.id} className={selected === market.id ? 'market-selected' : ''} onClick={() => setSelected(market.id)} tabIndex={0} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setSelected(market.id) }} aria-selected={selected === market.id}><td><span className="market-identity"><span className="market-flag">{market.flag}</span><span><strong>{market.name}</strong><small>{market.symbol} · {market.country}</small></span></span></td><td><span className={`market-pill ${market.ytd < 0 ? 'market-pill-down' : ''}`}>{market.ytd > 0 ? '+' : ''}{market.ytd.toFixed(2)}%</span></td><td>{market.eps ? market.eps.toFixed(2) : '—'}</td><td>{market.yield.toFixed(2)}%</td><td>{market.cap}</td><td>{market.volume}</td><td><Sparkline values={market.values} negative={market.change < 0}/></td><td className="directory-price">{market.price}</td><td><span className={market.change < 0 ? 'negative' : 'positive'}>{market.change > 0 ? '+' : ''}{market.change.toFixed(2)}%</span></td></tr>)}</tbody></table></div>
    <div className="directory-note"><span>Selected index</span><strong>{markets.find((market) => market.id === selected)?.name}</strong><span>Select any market to view its details.</span></div>
  </section>
}
