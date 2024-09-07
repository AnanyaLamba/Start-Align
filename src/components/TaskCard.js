import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  return (
    <div className={`task-card ${task.priority.toLowerCase().replace(' ', '-')}`}>
      <h4>{task.title}</h4>
      <p>{task.dueDate}</p>
      <p>{task.description}</p>
      <div className="task-members">
        {task.members.map((member) => (
          <span className="member-avatar" key={member}>
            {member}
          </span>
        ))}
      </div>
      <button className="add-subtask-btn">+ Add Subtask</button>
    </div>
  );
};

export default TaskCard;
