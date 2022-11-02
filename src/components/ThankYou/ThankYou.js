import React from 'react'
import { BsFillBagCheckFill } from "react-icons/bs";
import Gallery from '../Gallery/Gallery'

const ThankYou = () => {
  return (
    <div className='text-center bg-rose-200 p-20 h-full'>
        <h1 className='text-4xl textMobile'>Thank you for ordering, Kaylynn will be in contact with you in the next 2 business days</h1>
        <h1 className='text-2xl mt-4 pb-10 italic textMobile2'>Check your email for confirmation of your order</h1>
        <BsFillBagCheckFill className='text-9xl m-auto mobileLogo'/>
    </div>

  )
}

export default ThankYou