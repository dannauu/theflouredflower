import React from 'react';
import Modal from 'react-modal';
import HolidayMenu from '../HolidayMenu/HolidayMenu';
import Menu from '../Menu/Menu';

const MenuModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='mb-4 font-medium rounded-md text-white bg-rose-900 w-1/4 m-auto text-center'>
      <button onClick={openModal}>Open Menu</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"><HolidayMenu /><Menu /></Modal>
    </div>
  );
}

export default MenuModal