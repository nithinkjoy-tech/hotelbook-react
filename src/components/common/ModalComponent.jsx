import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function ModalComponent({modalIsOpen,setIsOpen,children}) {
  
    function closeModal(){
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
          </Modal>
        </div>
    )
}

export default ModalComponent
