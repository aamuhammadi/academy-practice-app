import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);

  const addPendingTask = () => {
    setPendingTasks([...pendingTasks, newTask]);
    setNewTask("");
  };

  const handleAddTask = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className="App">
      <h1>To Do List App</h1>
      <input
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={handleAddTask}
      ></input>
      <button onClick={addPendingTask}>Add Task</button>
      <h3>Pending Tasks</h3>
      <ul>
        {pendingTasks.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
