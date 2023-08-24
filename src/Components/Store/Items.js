import React from "react";
import { Link } from "react-router-dom";

function Items() {
  const products = [
    { id: 1, name: "mouse", price: 300 },
    { id: 2, name: "keyboard", price: 500 },
    { id: 3, name: "mobile", price: 24500 },
    { id: 4, name: "laptop", price: 35000 },
    { id: 5, name: "microphone", price: 750 },
    // { id: 6, name: "chair", price: 1000 },
  ];

  const newProduct = "";

  // const productName = () => {
  //   if (newProduct === "table") {
  //     console.log("Office items");
  //   } else if (newProduct === "") {
  //     console.log("Product not found");
  //   } else {
  //     console.log("This is not office item");
  //   }
  // };

  let productsList;

  if (products.length < 6) {
    productsList = "Products are less than 6";
  } else {
    productsList = products.map((prod) => (
      <ul>
        <li key={prod.id}>
          <Link to={`/items/${prod.id}`}>
            {prod.name} | {prod.price}
          </Link>
        </li>
      </ul>
    ));
  }

  const ternaryOptTest = () => {
    products.length < 5
      ? console.log("products are less than 5")
      : console.log(products[1].name);
  };
  ternaryOptTest();
  return (
    <div>
      <h1>Items</h1>
      {productsList}
    </div>
  );
}

export default Items;
