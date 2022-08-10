import React from 'react'
import { BiHomeHeart } from 'react-icons/bi'

const Navigation = () => {


  return (

    <nav className="bg-white border-purple-400 px-2 sm:px-4 py-2.5 border-b-4 navbar">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-4xl font-semibold whitespace-nowrap logo text-purple-600 hover:text-purple-400 logo image">The Floured Flour</span>
        </a>
        <div className="w-full md:block md:w-auto centerContent" id="mobile-menu">
          <ul className="flex navbar flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/" className="block text-3xl py-2 mr-6 pl-33 md:p-0 text-purple-800 homeButton"><BiHomeHeart/></a>
            </li>
            <li>
              <a href="/menu" className="block text-2xl py-2 pr-4 pl-33 border-b border-gray-100 hover:bg-gray-50 md:p-0 text-purple-800 ffLobsterTwo hover:text-purple-400">Menu</a>
            </li>
            <li>
              <a href="/order-online" className="block text-2xl py-2 pr-4 pl-33 border-b border-gray-100 hover:bg-gray-50 md:p-0 text-purple-800 ffLobsterTwo hover:text-purple-400">Order Online</a>
            </li>
            <li>
              <a href="/gallery" className="block text-2xl py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:p-0 text-purple-800 ffLobsterTwo hover:text-purple-400">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navigation