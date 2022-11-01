import React from 'react'
import HomepageCardImg1 from '../../assets/img/christmasCake.jpg'
import HomepageCardImg2 from '../../assets/img/snowmenCookies.jpg'
import HomepageCardImg3 from '../../assets/img/christmasCupcake.jpg'

const HomepageMain = () => {
  return (
    <div className='flex justify-evenly mt-2 mb-5 margin'>
        <a href="#cakes" className="imageA flex flex-col items-center border-purple-800 bg-rose-100 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-rose-400">
          <img className="image object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={HomepageCardImg1} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="textA mb-2 text-4xl font-bold tracking-tight text-rose-900 flex justify-center ffLobsterTwo">Cakes</h5>
            <p className="textp mb-3 font-normal text-gray-700 dark:text-gray-400 centerText text-center">Bring your online cake inspirations to life for yourself or a special someone.</p>
          </div>
        </a>
        <a href="#cookies" className="imageA flex flex-col items-center bg-rose-100 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-rose-400">
        <img className="image object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={HomepageCardImg2} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="textA mb-2 text-4xl font-bold tracking-tight text-rose-900 flex justify-center ffLobsterTwo">Cookies</h5>
            <p className="textp mb-3 font-normal text-gray-700 dark:text-gray-400 centerText text-center">My custom cookies range from homemade chocolate chip to a decorated holiday event or party.</p>
          </div>
      </a>
      <a href="#cupcakes" className="imageA flex flex-col items-center bg-rose-100 rounded-lg border-purple-400 shadow-md md:flex-row md:max-w-xl hover:bg-rose-400">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="textA mb-2 text-4xl font-bold tracking-tight text-rose-900 flex justify-center ffLobsterTwo">Cupcakes</h5>
            <p className="textp mb-3 font-normal text-gray-700 dark:text-gray-400 centerText text-center">Let me bake your cupcakes as simple or gourmet as you want them to be. </p>
          </div>
          <img className="image object-cover w-full h-96 rounded-r-lg md:h-auto md:w-48" src={HomepageCardImg3} alt=""/>
      </a>
      </div>
  )
}

export default HomepageMain