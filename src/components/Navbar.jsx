import React from 'react'
import { NavLink } from 'react-router'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className="bg-[#FDFBF7] p-4 border-b border-[#E8E4DE] shadow-md">
      <div className="w-4/5 mx-auto justify-between flex flex-row items-center">
        <NavLink to="/">
          <img 
            src={logo} 
            alt="logo" 
            className="w-28 h-20"
          />
        </NavLink>
        <button className="py-2 px-4 text-md font-semibold text-white rounded-full bg-[#2C3E50] hover:bg-black ransform transition duration-300 hover:scale-105">Join the next edition</button>
      </div>
    </div>
  )
}

export default Navbar