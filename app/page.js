'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [listings, setListings] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  const [currency] = useState('USD'); // Можно синхронизировать с layout

  useEffect(() => {
    fetch('/api/listings')
      .then(res => res.json())
      .then(setListings);
  }, []);

  const filtered = listings.filter(l => l.price >= filterPrice);

  const formatPrice = (price) => {
    return currency === 'USD' ? `$${price}` : `${price}₽`;
  };

  return (
    <div className="p-4">
      <h2>Awinly Listings</h2>
      <div className="my-4">
        <label>Min Price:</label>
        <input
          type="number"
          className="ml-2 p-1 border"
          value={filterPrice}
          onChange={(e) => setFilterPrice(Number(e.target.value))}
        />
      </div>
      <ul className="list-disc">
        {filtered.map((l, i) => (
          <li key={i} className="my-2">{l.title} - {l.type} - {formatPrice(l.price)}</li>
        ))}
      </ul>
    </div>
  );
}