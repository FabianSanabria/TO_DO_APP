import React from 'react';

function DetailsModal({ title, description, created_at, completed, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
    <div className="modal details-modal" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>×</button>
      <h3>{title}</h3>
      <p>{description || "Sin descripción"}</p>
      <div className="timestamp">Creado el: {new Date(created_at).toLocaleString()}</div>
      <div className={`status-badge ${completed ? 'completed' : 'incomplete'}`}>  {completed ? 'Completado' : 'Incompleta'}</div>
    </div>
  </div>
  );
}

export default DetailsModal;