import React from 'react'
import Navigation from '../Navigation/Navigation'
import MenuModal from '../../components/MenuModal/MenuModal'

const OrderOnline = () => {


  return (
    <>
      <Navigation />
      <div className='flex justify-center mt-9'>
      <MenuModal />
      </div>
      
      <div className='container m-auto'>
        <div className="mt-6">
        <label for="countries_multiple" class="block italic mb-2 text-4xl font-medium flex justify-center text-purple-600">What would you like to order?</label>
          <div className='flex justify-center mb-5'>
            
            <select multiple="" id="countries_multiple" class="bg-purple-200 border border-purple-600 text-purple-900 text-sm rounded-lg focus:border-purple-500 block w-1/2 p-2.5">
              <option selected="cupcakes">Cupcakes</option>
              <option value="cakes">Cakes</option>
              <option value="cookies">Cookies</option>
            </select>
          </div>
          <div>
            <form>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" name="first-name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 rounded-lg border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>First Name:</label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" name="last-name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 rounded-lg border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>Last Name:</label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone-number" id="floating_phone" class="block py-2.5 px-0 w-full rounded-lg text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>Phone number: (123-456-7890)</label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>Email:</label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" name="event-date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>Event Date:</label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" name="event-date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>Flavor:</label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input type="tel" name="event-date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-purple-200 border-0 border-b-2 border-purple-600 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label className='text-2xl text-purple-700 italic'>Event Date: (MM/DD/YYYY)</label>
              </div>
              <button type="submit" class="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}


export default OrderOnline