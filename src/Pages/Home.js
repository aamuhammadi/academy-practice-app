import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskCtx } from "../Components/Context";

function Home() {
  const { newTask } = useContext(TaskCtx);

  return (
    <div>
      <h1>Homepage of my App</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <h1>{newTask}</h1>
      </div>
    </div>
  );
}

export default Home;
