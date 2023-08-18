import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Homepage of my App</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Home;
