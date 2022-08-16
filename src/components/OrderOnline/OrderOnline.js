import React from 'react'
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
        "-DqTEYSCXE7zt5HX")
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
    formContainer.classList.add('hidden')
    const successh1 = document.getElementById('successh1')
    successh1.classList.remove('hidden')
    const Redirecting = document.getElementById('Redirecting');
    Redirecting.classList.remove('hidden');
    const RedirectingTimer = document.getElementById('RedirectingTimer');
    RedirectingTimer.classList.remove('hidden');
    var timeleft = 4;
    setInterval(function () {
      document.getElementById("RedirectingTimer").innerHTML = timeleft + " seconds";
      // if (timeleft <= 0) {
      // } else {
      //   document.getElementById("RedirectingTimer").innerHTML = timeleft + " seconds";
      // }
      timeleft -= 1;
    }, 1000);

    window.setTimeout(function () {

      // Move to a new location or you can do something else
      window.location.href = "/theflouredflower";
    }, 4000);

    console.log('asd')
  }



  return (
    <>
      <h1 id='successh1' className='centerText hidden mt-10 flex justify-center text-6xl text-purple-400'>Thank you for your order! Check your email!</h1>
      <h2 className='centerText hidden flex justify-center text-6xl text-purple-400 mt-6' id='Redirecting'>Redirecting to home in</h2>
      <h3 className='centerText hidden flex justify-center text-6xl text-green-400' id='RedirectingTimer'></h3>
      <div className='container m-auto width' id='formContainer'>
        <div className="mt-6" id='order-online'>
          <label htmlFor="countries_multiple" className="block italic mb-2 text-4xl font-medium flex justify-center text-purple-600 centerText">What would you like to order?</label>
          <form onSubmit={sendEmail} className='text-center'>
            <div className='flex justify-center mb-5'>

              <select multiple="" id="bakeryItems" name='bakery-item' className="bg-purple-200 border border-purple-600 text-purple-900 text-sm rounded-lg focus:border-purple-500 block w-1/2 p-2.5" onChange={checkSelection}>
                <option defaultValue >Choose One</option>
                <option value="cupcakes">Cupcakes</option>
                <option value="cake">Cake</option>
                <option value="cookies">Cookies</option>
              </select>
            </div>


            <div className="relative z-0 mb-6 w-full group">
              <input name="first-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 rounded-lg border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>First Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input name="last-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 rounded-lg border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Last Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone-number" id="floating_phone" className="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Phone number: (123-456-7890)</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Email:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input name="flavor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic' id='bakeryItemFlavor'>{flavor}</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input name="event-date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label className='text-2xl text-purple-700 italic'>Event Date: (MM/DD/YYYY)</label>
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2" onClick={showSuccess}>Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}


export default OrderOnline