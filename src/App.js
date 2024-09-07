import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="app-container">
      <div>
        <Sidebar />
      </div>
      <div className="app-right">

      <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/about" element={<About/>}></Route> */}
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          {/* <Route path="/task" element={<TaskBoard/>}></Route> */}
        </Routes>
      </div>
    </div>

    </Router>
  );
}

export default App;
