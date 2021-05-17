import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalComponent({modalIsOpen, setIsOpen, children}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {children}
        <center>
          <button style={{marginTop: "10px"}} onClick={closeModal} className="btn btn-success">
            Done
          </button>
        </center>
      </Modal>
    </div>
  );
}

export default ModalComponent;
