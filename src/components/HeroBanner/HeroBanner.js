import React from 'react'

const HeroBanner = () => {
  function handleClick() {
    window.location = '#holidayMenu'
  }
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 className='self-center text-4xl font-semibold whitespace-nowrap logo text-rose-400 hover:text-rose-400 mb-2'>The Floured Flower</h1>
        <p className='italic text-xl pb-10 textMobile heroBannerFont'>The holidays are here! Want to enjoy these moments without the stress of baking until the early hours? Let me handle it for you. Click the holiday menu button below and order your sweet treats a week in advance. Kick your feet up, drink that hot cocoa and enjoy your Hallmark movies while I whip up some magic to help you out this holiday season.  </p>
        <a href='#holidayMenu'><button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Holiday Menu</button></a>
      </div>
    </div>
  )
}

export default HeroBanner