function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <p>{message}</p>
          <div className="modal-buttons">
            <button onClick={onConfirm} className="btn-confirm">Sí</button>
            <button onClick={onCancel} className="btn-cancel">Cancelar</button>
          </div>
        </div>
      </div>
    );
}

export default ConfirmModal;
