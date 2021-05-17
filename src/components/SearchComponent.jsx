// import React from 'react'
// import DatePicker from './DatePicker'
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   };

// function SearchComponent() {
//     var subtitle;
//     const [modalIsOpen,setIsOpen] = React.useState(false);
//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       subtitle.style.color = '#f00';
//     }
  
//     function closeModal(){
//       setIsOpen(false);
//     }


//     return (
//         <div>
//             <input type="text" placeholder="search a place"/>
//             <DatePicker/>
//             <input type="text" placeholder="search a place" onClick={openModal}/>
//           <Modal
//             isOpen={modalIsOpen}
//             onAfterOpen={afterOpenModal}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//             ariaHideApp={false}
//           >
//             <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//             <button onClick={closeModal}>close</button>
//             <div>I am a modal</div>
//             <form>
//               <input />
//               <button>tab navigation</button>
//               <button>stays</button>
//               <button>inside</button>
//               <button>the modal</button>
//             </form>
//           </Modal>
//         </div>
//     )
// }

// export default SearchComponent


import React,{useState} from 'react'
import DatePicker from './DatePicker'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalComponent from './common/ModalComponent';


function SearchComponent() {
    const [modalIsOpen,setIsOpen] = React.useState(false);

    return (
        <div>
            <input type="text" placeholder="search a place"/>
            <DatePicker />
            <input type="text" placeholder="selct rooms" onClick={()=>setIsOpen(true)}/>
            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}><h1>Nithin K Joy</h1></ModalComponent>
        </div>
    )
}

export default SearchComponent

