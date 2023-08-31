import React, { useState, createContext } from "react";

const TaskCtx = createContext();

function GetNewTask({ children }) {
  const [newTask, setNewTask] = useState("");

  return (
    <TaskCtx.Provider
      value={{
        newTask,
        setNewTask,
      }}
    >
      {children}
    </TaskCtx.Provider>
  );
}

export { GetNewTask, TaskCtx };
