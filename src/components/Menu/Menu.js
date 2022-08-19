import React from 'react'
import './Menu.css'
import uniqid from 'uniqid'
import { cakes, cupcakes, cookies } from '../../menuItems'
import Slide from 'react-reveal/Slide';


const Menu = () => {
  return (
    <>
    <Slide left>
    <section className='bg-purple-200 container m-auto rounded-xl mb-2' id='menu'>
      <h1 className='text-purple-800 text-7xl text-center ffLobsterTwo mb-10'>Menu</h1>
      <div className='text-purple-800 text-5xl text-center ffLobsterTwo italic' id='cakes'>Cakes</div>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cakes.flavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Premium Flavors</div>
      <ul className='cakesUL'>
        {cakes.premiumFlavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Sizes</div>
      <ul className='cakesUL'>
        {cakes.sizes.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Sheet Cakes</div>
      <ul className='cakesUL'>
        {cakes.sheetCakes.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <p className='text-purple-800 text-1xl text-center mt-3 italic font-bold pl-2 pr-2 pb-2'>Includes white icing with a border and personalized name or quote like "Happy Birthday"</p>
    </section>
    </Slide>
    <Slide right>
    <section className='bg-purple-300 container m-auto rounded-xl mb-2'>
      <div className='text-purple-800 text-5xl text-center ffLobsterTwo pt-3 italic' id='cupcakes'>Cupcakes</div>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cupcakes.flavors.map((item) => (
          <li key={uniqid()} className='cupcakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Premium Flavors</div>
      <ul className='cakesUL'>
        {cupcakes.premiumFlavors.map((item) => (
          <li key={uniqid()} className='cupcakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo' >Pricing</div>
      <p className='text-purple-800 text-1xl text-center mt-3 italic font-bold pl-2 pr-2'>Classic Cupcakes are $18.00/dozen which includes a classic flavor and a single color icing swirl.</p>
      <p className='text-purple-800 text-1xl text-center mt-3 italic font-bold pl-2 pr-2'>Premium Cupcakes are $21.00/dozen which includes a premium flavor and a single or multi colored icing swirl.</p>
      <p className='text-purple-800 text-1xl text-center mt-3 italic font-bold pl-2 pr-2 pb-3'>Decorative Cupcakes are $2.25/cupcake which includes a premium flower, personal name, date, and any other information wanted. Also includes icing or fondant flavors. </p>
    </section>
    </Slide>
    <Slide left>
    <section className='bg-purple-200 container m-auto rounded-xl'>
      <div className='text-purple-800 text-5xl text-center ffLobsterTwo italic' id='cookies'>Cookies</div>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cookies.flavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Pricing</div>
      <p className='text-purple-800 text-1xl text-center mt-3 italic font-bold'>Classic cookies are all $9.00/dozen.</p>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo'>Decorative Sugar Cookies</div>
      <div className='text-purple-800 text-2xl text-center mt-7 ffLobsterTwo'>Flavors</div>
      <ul className='cakesUL'>
        {cookies.premiumCookiesFlavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <p className='text-purple-800 text-1xl text-center mt-3 italic font-bold pb-2'>These cookies are special ordered with royal icing designs. These cookies are more complex and require a phone consultation before a price can be quoted.</p>
    </section>
    </Slide>
    </>
  )
}

export default Menu