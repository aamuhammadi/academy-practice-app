import React, { useState } from "react";
import "./App.css";
import { message } from "antd";

function App() {
  const [newTask, setNewTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [eptIndex, setEptIndex] = useState(-1);
  const [epTask, setEpTask] = useState("");
  const [ectIndex, setEctIndex] = useState(-1);
  const [ecTask, setEcTask] = useState("");

  const cttEdit = (index, task) => {
    setEctIndex(index);
    setEcTask(task);
  };

  const updateCTask = () => {
    const updatedCTask = [...completeTasks];
    updatedCTask[ectIndex] = ecTask;
    setCompleteTasks(updatedCTask);
    setEctIndex(-1);
    setEcTask("");
    message.success("Your Task Has Been Updated!");
  };

  const pttEdit = (index, task) => {
    setEptIndex(index);
    setEpTask(task);
  };

  const updatePTask = () => {
    const updatedPTask = [...pendingTasks];
    updatedPTask[eptIndex] = epTask;
    setPendingTasks(updatedPTask);
    setEptIndex(-1);
    setEpTask("");
    message.success("Your Task Has Been Updated!");
  };

  const addPendingTask = () => {
    setPendingTasks([...pendingTasks, newTask]);
    setNewTask("");
    message.success("Your Task Has Been Added!");
  };

  const handleAddTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleCompleteTask = (index) => {
    const taskToComplete = pendingTasks[index];
    setCompleteTasks([...completeTasks, taskToComplete]);
    const updatedPendingTasks = pendingTasks.filter((_, i) => i !== index);
    setPendingTasks(updatedPendingTasks);
    message.success("Your Task Has Been Moved to Complete!");
  };

  const handleCTPendingTask = (index) => {
    const taskToPending = completeTasks[index];
    setPendingTasks([...pendingTasks, taskToPending]);
    const updatedCompleteTasks = completeTasks.filter((_, i) => i !== index);
    setCompleteTasks(updatedCompleteTasks);
    message.success("Your Task Has Been Moved to Pending!");
  };

  const deleteTask = (index, taskType) => {
    if (taskType === "pending") {
      const updatedPendingTasks = pendingTasks.filter((_, i) => i !== index);

      setPendingTasks(updatedPendingTasks);
      message.success("Your Task Has Been Deleted!");
    } else if (taskType === "complete") {
      const updatedCompleteTasks = completeTasks.filter((_, i) => i !== index);
      setCompleteTasks(updatedCompleteTasks);
      message.success("Your Task Has Been Deleted!");
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
                {eptIndex === i ? (
                  <>
                    <input
                      type="text"
                      value={epTask}
                      onChange={(e) => setEpTask(e.target.value)}
                    />
                    <button className="update-button" onClick={updatePTask}>
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    {`${i + 1}. ${pt}`}
                    <button
                      className="complete-button"
                      onClick={() => handleCompleteTask(i)}
                    >
                      Complete
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => pttEdit(i, pt)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(i, "pending")}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="tasks-list">
          <h3>Complete Tasks</h3>
          <ul>
            {completeTasks.map((ct, i) => (
              <li key={i}>
                {ectIndex === i ? (
                  <>
                    <input
                      type="text"
                      value={ecTask}
                      onChange={(e) => setEcTask(e.target.value)}
                    />

                    <button className="update-button" onClick={updateCTask}>
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    {`${i + 1}. ${ct}`}
                    <button
                      className="complete-button"
                      onClick={() => handleCTPendingTask(i)}
                    >
                      Pending
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => cttEdit(i, ct)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => deleteTask(i, "complete")}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
