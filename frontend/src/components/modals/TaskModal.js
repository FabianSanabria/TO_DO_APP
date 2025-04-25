import React, { useState } from 'react';

function TaskModal({ onClose, onSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) 
            return;
        const taskData = {  title, description, completed: false };
        onSubmit(taskData);
        setTitle('');
        setDescription('');
    };
    return (
        <div className="modal-backdrop" onClick={onClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <h2>Nueva Tarea</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Descripción"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Agregar Tarea
            </button>
          </form>
          <button
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>
    );
}

export default TaskModal;