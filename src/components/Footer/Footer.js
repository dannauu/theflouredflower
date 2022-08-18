import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (

    <footer className="p-4 bg-white border-t-4 border-purple-400 sm:p-6 flex justify-center">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-purple-500">© 2022 <a href="/" className="hover:underline">The Floured Flower ™</a>. All Rights Reserved</span>
        </div>
    </footer>

  )
}

export default Footer