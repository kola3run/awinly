'use client';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [currency, setCurrency] = useState('USD');

  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-blue-500 text-white flex justify-between">
          <h1>Awinly</h1>
          <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
          </select>
        </header>
        {children}
      </body>
    </html>
  );
}