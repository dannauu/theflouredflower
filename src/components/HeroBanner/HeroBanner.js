import React from 'react'

const HeroBanner = () => {
  function handleClick() {
    window.location = '#holidayMenu'
  }
  return (
    <div class="hero-image">
      <div class="hero-text">
        <h1></h1>
        <p className='italic text-xl pb-10'>The holidays are here! Want to enjoy these moments without the stress of baking until the early hours? Let me handle it for you. Click the holiday menu button below and order your sweet treats a week in advance. Kick your feet up, drink that coco and enjoy your Hallmark movies while I whip up some magic to help you this holiday season.  </p>
        <a href='#holidayMenu'><button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Holiday Menu</button></a>
      </div>
    </div>
  )
}

export default HeroBanner