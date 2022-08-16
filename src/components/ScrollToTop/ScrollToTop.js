import React, { useEffect, useState } from 'react'
import { BsFillCaretUpFill } from "react-icons/bs";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top  rounded-xl'>
      <a href='#top'>
        <BsFillCaretUpFill className='text-6xl' />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
