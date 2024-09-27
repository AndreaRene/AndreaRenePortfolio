import React from 'react';
// import './Modals.scss';

const ComicModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={onClose}>
        {children}
      </div>
    </div>
  );
};

export default ComicModal;
