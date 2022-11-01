import React from 'react'
import emailjs from 'emailjs-com'
import MenuModal from '../MenuModal/MenuModal'
import ThankYou from '../ThankYou/ThankYou';
import Modal from 'react-modal';




const OrderOnline = () => {
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


  function sendEmail(e) {

    emailjs
      .sendForm
      ("service_6j0akr8",
        "template_2egf2sb",
        e.target,
        "-DqTEYSCXE7zt5HXg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
       e.preventDefault()

  }


  return (
    <>
      <h1 id='successh1' className='centerText hidden mt-10 flex justify-center text-6xl text-purple-400 mb-10'>Thank you for your order! Check your email!</h1>
      <MenuModal />
      <div className='container m-auto width' id='formContainer'>
        <div className="mt-6" id='order-online'>
          <label htmlFor="countries_multiple" className="block italic mb-2 text-4xl font-medium flex justify-center text-rose-900 centerText">What would you like to order?</label>
          <form onSubmit={sendEmail} className='text-center'>





            <div className="relative z-0 mb-6 w-full group">
              <label className='text-2xl text-rose-900 italic'>First Name:</label>
              <input name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 rounded-lg border-b-2 border-rose-900 appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer" required />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label className='text-2xl text-rose-900 italic'>Last Name:</label>
              <input name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 rounded-lg border-rose-900 appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer" required />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label className='text-2xl text-rose-900 italic'>Phone number:</label>
              <input type="tel" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-white border-0 border-b-2 border-rose-900 appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer" placeholder='555-555-5555' />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label className='text-2xl text-rose-900 italic'>Email:</label>
              <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-rose-900 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer" required="" />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              {/* <input name="flavor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-rose-900 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer" placeholder=" " required="" /> */}
              <label className='text-2xl text-rose-900 italic' id='bakeryItemFlavor'>Bakery Item: <br/><span className='text-sm'>(Make sure and be very descriptive, including flavor, color, design etc)</span></label>
              <textarea name='flavor' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-rose-900 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer"></textarea>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label className='text-2xl text-rose-900 italic'>Event Date:</label>
              <input type="date" name="event-date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-rose-900 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-rose-300 peer" placeholder=" " required="" id='date' />
            </div>
            <button type="submit" onClick={openModal} className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2">Submit</button>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"><ThankYou/></Modal>
    </>
  )
}


export default OrderOnline