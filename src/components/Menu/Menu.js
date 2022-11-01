import React from 'react'
// import Menu1 from '../../assets/img/1.png'
import './Menu.css'
import uniqid from 'uniqid'
import { cakes, cupcakes, cookies } from '../../menuItems'


const Menu = () => {
  return (
    <>
    <section className='menuBackground container m-auto rounded-xl mb-2' id='menu'>
      <h1 className='maroon text-7xl text-center ffLobsterTwo mb-10'>Menu</h1>
      <div className='maroon text-5xl text-center ffLobsterTwo italic' id='cakes'>Cakes</div>
      <div className='maroon text-3xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cakes.flavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='maroon text-3xl text-center mt-7 ffLobsterTwo'>Premium Flavors</div>
      <ul className='cakesUL'>
        {cakes.premiumFlavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='maroon text-3xl text-center mt-7 ffLobsterTwo'>Sizes</div>
      <ul className='cakesUL'>
        {cakes.sizes.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
    </section>
    <section className='menuBackground container m-auto rounded-xl mb-2'>
      <div className='green text-5xl text-center ffLobsterTwo pt-3 italic' id='cupcakes'>Cupcakes</div>
      <div className='green text-3xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cupcakes.flavors.map((item) => (
          <li key={uniqid()} className='cupcakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='green text-3xl text-center mt-7 ffLobsterTwo'>Premium Flavors</div>
      <ul className='cakesUL'>
        {cupcakes.premiumFlavors.map((item) => (
          <li key={uniqid()} className='cupcakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='green text-3xl text-center mt-7 ffLobsterTwo' >Pricing</div>
      <p className='green text-1xl text-center mt-3 italic font-bold pl-2 pr-2'>Classic Cupcakes are $18.00/dozen which includes a classic flavor and a single color icing swirl.</p>
      <p className='green text-1xl text-center mt-3 italic font-bold pl-2 pr-2'>Premium Cupcakes are $21.00/dozen which includes a premium flavor and a single or multi colored icing swirl.</p>
      <p className='green text-1xl text-center mt-3 italic font-bold pl-2 pr-2 pb-3'>Classic Cupcakes are $2.25/cupcake which includes a premium personal name, date, and any other information wanted. Also includes icing or fondant flavors. </p>
    </section>
    <section className='menuBackground container m-auto rounded-xl'>
      <div className='maroon text-5xl text-center ffLobsterTwo italic' id='cookies'>Cookies</div>
      <div className='maroon text-3xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cookies.flavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='maroon text-3xl text-center mt-7 ffLobsterTwo'>Pricing</div>
      <p className='maroon text-1xl text-center mt-3 italic font-bold'>Classic cookies are all $9.00/dozen.</p>
      <p className='maroon text-1xl text-center mt-3 italic font-bold pb-3'>Premium cookies all require a phone consultation to dictate pricing and design.</p>
    </section>
    </>
  )
}

export default Menu