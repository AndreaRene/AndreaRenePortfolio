import './ComicModal.scss';

const ComicModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="comic-modal-overlay" onClick={onClose}>
      <div className="comic-modal-content" onClick={onClose}>
        {children}
      </div>
    </div>
  );
};

export default ComicModal;
