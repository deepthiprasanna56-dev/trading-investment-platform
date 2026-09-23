import { useState } from 'react'

const cities = [
  { name: 'New York', x: 26, y: 34 }, { name: 'San Francisco', x: 18, y: 39 },
  { name: 'Toronto', x: 25, y: 29 }, { name: 'London', x: 49, y: 25 },
  { name: 'Lisbon', x: 47, y: 33 }, { name: 'Dubai', x: 57, y: 39 },
  { name: 'Mumbai', x: 64, y: 46 }, { name: 'Singapore', x: 69, y: 58 },
  { name: 'Tokyo', x: 79, y: 34 }, { name: 'Sydney', x: 82, y: 72 },
]
const routes = [[0, 3], [1, 4], [3, 6], [4, 7], [6, 8], [2, 9]]

export default function GlobalMarketMap() {
  const [activeCity, setActiveCity] = useState('New York')
  return <article className="panel global-map-panel">
    <div className="global-map-heading"><div><div className="panel-kicker">CONNECTED MARKETS</div><h2>Invest beyond borders.</h2><p>Follow the pulse of markets around the world.</p></div><span className="global-map-live"><i/>10 financial hubs</span></div>
    <div className="global-map-canvas" role="img" aria-label="Animated global investment connections across ten major financial centers">
      <div className="globe-halo"/><div className="continent continent-north-america"/><div className="continent continent-south-america"/><div className="continent continent-europe"/><div className="continent continent-africa"/><div className="continent continent-asia"/><div className="continent continent-oceania"/>
      <svg className="route-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{routes.map(([from, to], index) => { const start = cities[from]; const end = cities[to]; const midX = (start.x + end.x) / 2; const midY = Math.min(start.y, end.y) - 14; return <path key={`${from}-${to}`} className={`route-path route-${index % 3}`} d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}/> })}</svg>
      {cities.map((city) => <button type="button" key={city.name} className={`city-point ${activeCity === city.name ? 'city-active' : ''}`} style={{ left: `${city.x}%`, top: `${city.y}%` }} onClick={() => setActiveCity(city.name)} aria-label={`View ${city.name} market`}><i/><span>{city.name}</span></button>)}
      <div className="map-caption"><span>✳</span><strong>{activeCity}</strong><span>Market connections, in motion.</span></div>
    </div>
  </article>
}
