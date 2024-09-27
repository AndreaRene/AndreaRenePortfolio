const AvatarModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Choose your avatar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AvatarPicker />
      </Modal.Body>
    </Modal>
  );
};

export default AvatarModal;
