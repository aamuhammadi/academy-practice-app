import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // const nameInput = (e) => {
  //   setName(e.target.value);
  // };

  // const amountInput = (e) => {
  //   setAmount(e.target.value);
  // };

  const inputHandler = (type, basharat) => {
    if (type === "product") {
      setName(basharat);
    } else {
      setAmount(basharat);
    }
  };

  return (
    <div className="App">
      <form>
        <h2>Product Name</h2>
        <input
          type="text"
          onChange={(e) => inputHandler("product", e.target.value)}
        />
        <h2>Amount</h2>
        <input
          type="number"
          onChange={(e) => inputHandler("amount", e.target.value)}
        />
      </form>
      <h1>Products || Amount</h1>
      <h2>
        {name} || {amount}
      </h2>
    </div>
  );
}

export default App;
