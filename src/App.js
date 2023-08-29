import React from "react"
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext"

function App() {
  return (
    <TaskListContextProvider>
      <TaskForm/>
      <TaskList/>
    </TaskListContextProvider>
  );
}

export default App;
