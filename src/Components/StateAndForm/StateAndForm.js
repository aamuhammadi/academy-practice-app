import React, { useState } from "react";

function StateAndForm() {
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

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      amount,
    };
    console.log(formData);
    setName("");
    setAmount("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Product Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => inputHandler("product", e.target.value)}
        />
        <h2>Amount</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => inputHandler("amount", e.target.value)}
        />
        <button type="submit" className="complete-button">
          Submit
        </button>
      </form>
      <h1>Products || Amount</h1>
      <h2>
        {name} || {amount}
      </h2>
    </div>
  );
}

export default StateAndForm;
