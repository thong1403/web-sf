import React from 'react'
import './ButtonTop.css'
import { Link } from 'react-router-dom'

export default function ButtonTop() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
  return (
    <>
    <button onClick={handleClick} className='btn-top-click'><i class="fa-sharp fa-solid fa-arrow-up"></i></button>
    </>
  )
}
