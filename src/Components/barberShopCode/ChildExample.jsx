import React from "react";
import Footer from "./footer";

function ChildExample({ children }) {
  return (
    <div>
      {children}
      {/* footter */}
      <Footer />
    </div>
  );
}

export default ChildExample;
