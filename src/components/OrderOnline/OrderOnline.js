import React from 'react'
import Navigation from '../Navigation/Navigation'
import emailjs from 'emailjs-com'




const OrderOnline = () => {

  const [flavor, setFlavor] = React.useState('Flavor:')

  function checkSelection() {
    const selection = document.getElementById('bakeryItems').value
    if (selection === 'cupcakes') {
      setFlavor('Cupcake Flavor:')
    } else if (selection === 'cookies') {
      setFlavor('Cookie Flavor:')
    } else if (selection === 'cakes') {
      setFlavor('Cake Flavor:')
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm
      ("service_zr4kcnh",
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

  }

  function showSuccess() {
    const formContainer = document.getElementById('formContainer')
    const menuBtn = document.getElementById('menuBtn')
    formContainer.classList.add('hidden')
    menuBtn.classList.add('hidden')
    const successh1 = document.getElementById('successh1')
    const successh2 = document.getElementById('successh2')
    successh1.classList.remove('hidden')
    successh2.classList.remove('hidden')

  

  }



  return (
    <>
      <Navigation />
      <h1 id='successh1' className='centerText hidden mt-10 flex justify-center text-6xl text-purple-400'>Thank you for your order! I will be in touch in the next 1-2 business days.</h1>
      <h2 id='successh2'className='centerText hidden flex justify-center text-purple-400 text-4xl mt-10'>In the meantime check out my past work in the<a href="/gallery" className='text-purple-900 text-4xl ml-2'>Gallery</a></h2>
      <div className='container m-auto width' id='formContainer'>
        <div className="mt-6">
          <label htmlFor="countries_multiple" className="block italic mb-2 text-4xl font-medium flex justify-center text-purple-600 centerText">What would you like to order?</label>
          <form onSubmit={sendEmail}>
            <div className='flex justify-center mb-5'>

              <select multiple="" id="bakeryItems" name='bakery-item' className="bg-purple-200 border border-purple-600 text-purple-900 text-sm rounded-lg focus:border-purple-500 block w-1/2 p-2.5" onChange={checkSelection}>
                <option defaultValue >Choose One</option>
                <option value="cupcakes">Cupcakes</option>
                <option value="cake">Cake</option>
                <option value="cookies">Cookies</option>
              </select>
            </div>


            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 rounded-lg border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>First Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 rounded-lg border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Last Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Phone number: (123-456-7890)</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Email:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" name="flavor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic' id='bakeryItemFlavor'>{flavor}</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" name="event-date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Event Date: (MM/DD/YYYY)</label>
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={showSuccess}>Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}


export default OrderOnline