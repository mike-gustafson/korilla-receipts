import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Receipt from './components/Receipt';
import receiptsData from './data/receipts';

function App() {

  const [receipts, setReceipts] = useState(receiptsData);

  const handlePay = (index) => {
    const newReceipts = [...receipts];
    newReceipts[index].paid = true;
    setReceipts(newReceipts);
  }

  const handleRefund = (index) => {
    const newReceipts = [...receipts];
    newReceipts[index].paid = false;
    setReceipts(newReceipts);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Korilla</h1>
      </header>
      <div className="App-content">
        <h3>Paid receipts</h3>
        <div className="App-receipts">
          {receipts.filter(receipt => receipt.paid).length === 0 && <div className="App-message">No paid receipts</div>}
          {receipts.map((receipt, index) => {
            if (receipt.paid) {
              return <Receipt 
                        key={index} 
                        receiptData={receipt}   
                        payReceipt={() => handlePay(index)} 
                        refundReceipt={() => handleRefund(index)}
                     />
            }
          })}
        </div>
        
        <h3>Unpaid receipts</h3>
        <div className="App-receipts">
          {receipts.filter(receipt => !receipt.paid).length === 0 && <div className="App-message">No unpaid receipts</div>}
          {receipts.map((receipt, index) => {
            if (!receipt.paid) {
              return <Receipt 
                      key={index} 
                      receiptData={receipt}   
                      payReceipt={() => handlePay(index)} 
                      refundReceipt={() => handleRefund(index)}
                     />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
