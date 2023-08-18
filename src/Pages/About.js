import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Us Page</h1>
      <Link to="/">Home</Link>
      <Link to="/contct">Contact</Link>
    </div>
  );
}

export default About;
