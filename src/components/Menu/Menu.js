import React from 'react'
// import Menu1 from '../../assets/img/1.png'
import './Menu.css'
import uniqid from 'uniqid'
import { cakes, cupcakes, cookies } from '../../menuItems'


const Menu = () => {
  return (
    <>
    <section className='bg-purple-200 container m-auto rounded-xl mb-2' id='menu'>
      <h1 className='text-purple-800 text-6xl text-center ffLobsterTwo mb-10'>Menu</h1>
      <div className='text-purple-800 text-5xl text-center ffLobsterTwo underline underline-offset-4'>Cakes</div>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Flavors</div>
      <ul className='cakesUL'>
        {cakes.flavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Premium Flavors</div>
      <ul className='cakesUL'>
        {cakes.premiumFlavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Sizes</div>
      <ul className='cakesUL'>
        {cakes.sizes.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
    </section>
    <section className='bg-purple-300 container m-auto rounded-xl mb-2'>
      <div className='text-purple-800 text-5xl text-center ffLobsterTwo pt-3 underline underline-offset-4'>Cupcakes</div>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Flavors</div>
      <ul className='cakesUL'>
        {cakes.flavors.map((item) => (
          <li key={uniqid()} className='cupcakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Premium Flavors</div>
      <ul className='cakesUL'>
        {cakes.premiumFlavors.map((item) => (
          <li key={uniqid()} className='cupcakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4' >Pricing</div>
      <p className='text-purple-800 text-1xl text-center mt-3 italic'>Classic Cupcakes are $18.00/dozen which includes a classic flavor and a single color icing swirl.</p>
      <p className='text-purple-800 text-1xl text-center mt-3 italic'>Premium Cupcakes are $21.00/dozen which includes a premium flavor and a single or multi colored icing swirl.</p>
      <p className='text-purple-800 text-1xl text-center mt-3 italic pb-3'>Classic Cupcakes are $2.25/cupcake which includes a premium personalized name, date, and any other information wanted. Also includes icing or fondant flavors. </p>
    </section>
    <section className='bg-purple-200 container m-auto rounded-xl'>
      <div className='text-purple-800 text-5xl text-center ffLobsterTwo underline underline-offset-4'>Cookies</div>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Flavors</div>
      <ul className='cakesUL'>
        {cookies.flavors.map((item) => (
          <li key={uniqid()} className='cakes-list-item'>
            {item}
          </li>
        ))}
      </ul>
      <div className='text-purple-800 text-3xl text-center mt-7 ffLobsterTwo underline underline-offset-4'>Pricing</div>
      <p className='text-purple-800 text-1xl text-center mt-3 italic'>Classic cookies are all $9.00/dozen.</p>
      <p className='text-purple-800 text-1xl text-center mt-3 italic pb-3'>Premium cookies all require a phone consultation to dictact pricing and design.</p>
    </section>
    </>
  )
}

export default Menu