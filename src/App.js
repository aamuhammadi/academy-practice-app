import React, { useState } from "react";
import "./App.css";
import ReactConfetti from "react-confetti";

function App() {
  const [title, setTitle] = useState(
    "Listening to Events & Working with Event Handlers"
  );

  const clickMe = () => {
    setTitle("Muhammadi Clicked Me!");
  };

  return (
    <div className="App">
      {/* <h1>Welcome to the Confetti Party!</h1> */}
      {/* <ReactConfetti /> */}
      <h1>{title}</h1>
      <button className="edit-button" onClick={clickMe}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
