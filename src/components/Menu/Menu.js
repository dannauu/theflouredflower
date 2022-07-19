import React from 'react'
import Navigation from '../Navigation/Navigation'
import menu from '../../assets/img/menu.png'

const Menu = () => {
  return (
    <>
    <Navigation />
    <div className='flex justify-center'>
      <img src={menu} alt="" className=''/>
    </div>
    </>
  )
}

export default Menu