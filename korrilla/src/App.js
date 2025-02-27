import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Receipt from './components/Receipt';
import receiptsData from './data/receipts';

function App() {

  const [receipts, setReceipts] = useState(receiptsData);

  return (
    <div className="App">
      <h1>Korilla</h1>
      {receipts.map((receipt, index) => {
          return <Receipt key={index} receiptData={receipt} />
        })}
    </div>
  );
}

export default App;
