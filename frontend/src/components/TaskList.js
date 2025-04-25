import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onDetails, onComplete }) {
  return (
    <div className="task-container">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDetails={onDetails}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;