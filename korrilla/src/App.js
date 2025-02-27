import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const receipt1 = {
    person: "Ben",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Korchata",
      cost: 22
    },
    paid: false
  };
  const receipt2 = {
    person: "Michael",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19
    },
    paid: false
  };
  const receipt3 = {
    person: "John",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: true
  };

  const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3]);

  return (
    <div className="App">
      <ul>
        {receipts.map((receipt, index) => (
          <li key={index}>
            <div>Receipt for: {receipt.person}</div>
            <div>Main: {receipt.order.main}</div>
            <div>Protein: {receipt.order.protein}</div>
            <div>Rice: {receipt.order.rice}</div>
            <div>Sauce: {receipt.order.sauce}</div>
            <div>Toppings: {receipt.order.toppings.join(", ")}</div>
            <div>Drink: {receipt.order.drink}</div>
            <div>Cost: {receipt.order.cost}</div>
            <div>Paid: {receipt.paid ? "Yes" : "No"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
