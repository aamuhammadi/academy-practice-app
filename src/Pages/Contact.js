import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Contact;
