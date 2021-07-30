import React from "react";
import Modal from "react-modal";
import ImageGallery from 'react-image-gallery';
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

function ModalComponent({modalIsOpen, setIsOpen, children,handleSubmit}) {
  function closeModal() {
    setIsOpen(false);
  }

  const buttonClick=()=>{
    if(handleSubmit) handleSubmit();
    closeModal();
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
        {handleSubmit?<center>
          <button style={{marginTop: "10px"}} type="submit" onClick={buttonClick} className="btn btn-success">
            Post review
          </button>
        </center>:null}
      </Modal>
    </div>
  );
}

export default ModalComponent;
