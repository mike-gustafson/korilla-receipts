import React from 'react';
import { useState } from 'react';
import './App.css';
import Receipt from './components/Receipt';
import receiptsData from './data/receipts';

function App() {

  const [receipts, setReceipts] = useState(receiptsData);

  const handlePay = (index) => {
    const newReceipts = [...receipts];
    newReceipts[index].paid = !newReceipts[index].paid;
    setReceipts(newReceipts);
  }

  const handleRefund = (index) => {
    const newReceipts = [...receipts];
    newReceipts[index].paid = false;
    setReceipts(newReceipts);
  }

  // const togglePaymentStatus = (index) => { 
  //   setReceipts(receipts.map((receipt, i) => i === index ? { ...receipt, paid: !receipt.paid } : receipt )); };

  // const renderReceipts = (isPaid) => {
  //   const filteredReceipts = receipts.filter(receipt => receipt.paid === isPaid);

  //   return filteredReceipts.length > 0 ? (
  //     filteredReceipts.map((receipt, index) => (
  //       <Receipt 
  //         key={index} 
  //         receiptData={receipt}   
  //         togglePayment={() => togglePaymentStatus(index)} 
  //       />
  //     ))
  //   ) : (
  //     <div className="App-message">{isPaid ? "No paid receipts" : "No unpaid receipts"}</div>
  //   );
  // };

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
