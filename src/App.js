import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const addPendingTask = () => {
    setPendingTasks([...pendingTasks, newTask]);
    setNewTask("");
  };

  const handleAddTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleCompleteTask = (index) => {
    const taskToComplete = pendingTasks[index];
    setCompleteTasks([...completeTasks, taskToComplete]);
    const updatedPendingTasks = pendingTasks.filter((_, i) => i !== index);
    setPendingTasks(updatedPendingTasks);
  };

  const deleteTask = (index, taskType) => {
    if (taskType === "pending") {
      const updatedPendingTasks = pendingTasks.filter((_, i) => i !== index);
      setPendingTasks(updatedPendingTasks);
    } else if (taskType === "complete") {
      const updatedCompleteTasks = completeTasks.filter((_, i) => i !== index);
      setCompleteTasks(updatedCompleteTasks);
    }
  };

  // const deletePendingTask = (index) => {
  //   const updatedPendingTasks = pendingTasks.filter((_, i) => i !== index);
  //   setPendingTasks(updatedPendingTasks);
  // };

  // const deleteCompleteTask = (index) => {
  //   const updatedCompleteTasks = completeTasks.filter((_, i) => i !== index);
  //   setCompleteTasks(updatedCompleteTasks);
  // };

  return (
    <div className="App">
      <h1 className="app-title">To Do List App</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={handleAddTask}
        />
        <button className="add-button" onClick={addPendingTask}>
          Add Task
        </button>
      </div>
      <div className="tasks-container">
        <div className="tasks-list">
          <h3>Pending Tasks</h3>
          <ul>
            {pendingTasks.map((pt, i) => (
              <li key={i}>
                {pt}
                <button
                  className="complete-button"
                  onClick={() => handleCompleteTask(i)}
                >
                  Complete
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(i, "pending")}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tasks-list">
          <h3>Complete Tasks</h3>
          <ul>
            {completeTasks.map((ct, i) => (
              <li key={i}>
                {ct}
                <button
                  className="delete-button"
                  onClick={() => deleteTask(i, "complete")}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
