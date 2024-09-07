import React from "react";
import TaskCard from "./TaskCard";
import "./TaskBoard.css";

const TaskBoard = () => {
  const tasks = [
    {
      id: 1,
      title: "Test Task",
      priority: "HIGH PRIORITY",
      dueDate: "9-Feb-2024",
      description: "Task manager youtube tutorial",
      members: ["AJ", "JS", "CA"],
      category: "To Do",
    },
    {
      id: 2,
      title: "Duplicate - Review Code",
      priority: "MEDIUM PRIORITY",
      dueDate: "9-Feb-2024",
      description: "Blog App Admin Dashboard",
      members: ["EW", "AJ"],
      category: "In Progress",
    },
    // Add more tasks as needed
  ];

  const categories = ["To Do", "In Progress", "Completed"];

  return (
    <div className="task-board">
      <div className="button-container">
        <button className="filter-button">🔵To Do</button>
        <button className="filter-button">🟡In Progress</button>
        <button className="filter-button">🟢Completed</button>
      </div>
      <div>

      </div>
      <div className="task-cards">
      {categories.map((category) => (
        <div className="task-column" key={category}>
          <h3>{category}</h3>
          {tasks
            .filter((task) => task.category === category)
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      ))}
      </div>
      
      {/* New div with buttons */}
    </div>
  );
};

export default TaskBoard;
