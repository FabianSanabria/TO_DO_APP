import React from 'react';

function TaskItem({ task, onDelete, onDetails, onComplete }) {
  return (
    <div className={`task-row ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          className="task-checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id, task.completed)}
        />
        <div className="task-text">
          <h3 className="task-title">{task.title}</h3>
          <span className="task-time">
            {new Date(task.created_at).toLocaleString()}
          </span>
        </div>
      </label>
      <button className="btn-delete" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
      <button className="btn-details" onClick={() =>
        onDetails(task.title, task.description, task.created_at, task.completed)
      }>
        ℹ️
      </button>
    </div>
  );
}

export default TaskItem;