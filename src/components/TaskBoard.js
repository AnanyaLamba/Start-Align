import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import "./TaskBoard.css";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://hb-2srp.onrender.com/tasks";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error("Data is not fetched from the API");
  //       }
  //     })
  //     .then((data) => {
  //       setTasks(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, []);

  const task = [
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1",
      category: "To Do",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
      category: "In Progress",
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is task 3",
      category: "Completed",
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is task 4",
      category: "To Do",
    },
    {
      id: 5,
      title: "Task 5",
      description: "This is task 5",
      category: "In Progress",
    },
    {
      id: 6,
      title: "Task 6",
      description: "This is task 6",
      category: "Completed",
    },
  ];

  const categories = ["To Do", "In Progress", "Completed"];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="task-board">
      <div className="button-container">
        <button className="filter-button">🔵To Do</button>
        <button className="filter-button">🟡In Progress</button>
        <button className="filter-button">🟢Completed</button>
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
    </div>
  );
};

export default TaskBoard;
