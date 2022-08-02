import React from 'react';
import Modal from 'react-modal';
import Menu1 from '../../assets/img/1.png'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const MenuModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-800 shadow hover:bg-fuchsia-200 md:py-4 md:text-lg md:px-10 text-2xl'>Open Menu</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex justify-center bg-purple-200'>
        {/* <button onClick={closeModal}>close</button> */}
        <img src={Menu1} alt="" className='menuImg'/>
        </div>
      </Modal>
    </div>
  );
}

export default MenuModal