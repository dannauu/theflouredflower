import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='mx-auto flex justify-between'>
        <Link to='/menu' className=' text-5xl text-pink-500'>Menu</Link>
        <Link to='/order-online' className=' text-5xl  text-pink-500'>Order Online</Link>
        <Link to='/' className=' text-5xl text-pink-500 italic'>The Floured Flower</Link>
        <Link to='/contact' className=' text-5xl text-pink-500'>Contact</Link>
        <Link to='/gallery' className=' text-5xl text-pink-500'>Gallery</Link>
    </div>
  )
}

export default Navigation

