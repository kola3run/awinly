'use client';
import { useState } from 'react';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('apartment');
  const [price, setPrice] = useState(0);

  const addListing = async () => {
    await fetch('/api/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, type, price }),
    });
    alert('Added!');
    setTitle(''); setPrice(0); // Reset form
  };

  return (
    <div className="p-4">
      <h2>Add Listing</h2>
      <div className="my-2">
        <label>Title:</label><br/>
        <input className="border p-1 w-full" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="my-2">
        <label>Type:</label><br/>
        <select className="border p-1" value={type} onChange={e => setType(e.target.value)}>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
      </div>
      <div className="my-2">
        <label>Price:</label><br/>
        <input className="border p-1" type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
      </div>
      <button className="bg-blue-500 text-white p-2" onClick={addListing}>Submit</button>
    </div>
  );
}