import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div>
          <Sidebar />
      </div>
      <div className = "app-right">
          <Header />
          <TaskBoard />
      </div>
    </div>
  );
}

export default App;
