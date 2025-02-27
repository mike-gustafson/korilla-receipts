import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Receipt from './components/Receipt';
import receiptsData from './data/receipts';

function App() {

  const [receipts, setReceipts] = useState(receiptsData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Korilla</h1>
      </header>
      <div className="App-content">
          <h3>Paid receipts</h3>
          <div className="App-receipts">
          {receipts.map((receipt, index) => {
            if (receipt.paid) {
              return <Receipt key={index} receiptData={receipt} />
            }
          })}
        </div>
        
        <h3>Unpaid receipts</h3>
        <div className="App-receipts">
          {receipts.map((receipt, index) => {
            if (!receipt.paid) {
              return <Receipt key={index} receiptData={receipt} />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
