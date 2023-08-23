import React from "react";
import { Link } from "react-router-dom";

function Items() {
  const products = [
    { id: 1, name: "mouse", price: 300 },
    { id: 2, name: "keyboard", price: 500 },
    { id: 3, name: "mobile", price: 24500 },
    { id: 4, name: "laptop", price: 35000 },
    { id: 5, name: "microphone", price: 750 },
  ];

  return (
    <div>
      <h1>Items</h1>
      {products.map((prod) => (
        <ul>
          <li>
            <Link to={`/items/${prod.id}`}>
              {prod.name} | {prod.price}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Items;
