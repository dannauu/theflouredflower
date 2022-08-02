import React from 'react'
import Navigation from '../Navigation/Navigation'
import Menu1 from '../../assets/img/1.png'
import './Menu.css'


const Menu = () => {
  return (
    <>
    <Navigation />
    <div className='flex justify-center'>
      <img src={Menu1} alt="" className='menuImg'/>
    </div>
    </>
  )
}

export default Menu