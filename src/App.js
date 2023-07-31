import React, { useState } from "react";
// import Navbar from "./Components/Nav/navbar";
import BarberShop from "./Components/barberShopCode";

function App() {
  const MainHeading = "Hair Studio";
  const SubHeading = "Style Your Hair is Style Your Life";

  return (
    <div className="App">
      <BarberShop MainHeading={MainHeading} SubHeading={SubHeading} />
    </div>
  );
}

export default App;
