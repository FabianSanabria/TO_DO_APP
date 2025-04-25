import React from 'react';

function AlertModal({ message, type , onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
    <div className={`modal alert-modal ${type === 'success' ? 'success' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="alert-icon">
          {type ? '✅' : '⚠️'}
        </div>
        <h3>{type ? '¡Éxito!' : 'Atención'}</h3>     
        <p>{message}</p>

        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>Entendido</button>
        </div>
      </div>
    </div>
  );
}

export default AlertModal;