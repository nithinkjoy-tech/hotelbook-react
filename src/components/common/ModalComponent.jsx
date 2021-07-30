import React from "react";
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

function ModalComponent({modalIsOpen, setIsOpen, children,handleSubmit}) {
  function closeModal() {
    setIsOpen(false);
  }

  const postReview=()=>{
    // console.log("rv")
    // console.log(handleSubmit,"hs")
    handleSubmit();

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
          <button style={{marginTop: "10px"}} type="submit" onClick={postReview} className="btn btn-success">
            Post review
          </button>
        </center>
      </Modal>
    </div>
  );
}

export default ModalComponent;
