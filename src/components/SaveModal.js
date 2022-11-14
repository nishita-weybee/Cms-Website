import Modal from "react-bootstrap/Modal";

function SaveModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Saved!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>You can now preview your template.</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="comman-btn" onClick={props.onHide}>
          Okay
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SaveModal;
