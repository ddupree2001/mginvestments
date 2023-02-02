import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div className="flex justify-between items-center gap-x-16 py-[20px]">
        <Link to="/" className="text-[1rem] font-bold hover:text-[#3095df]">Home</Link>
        <Link to="/about" className="text-[1rem] font-bold hover:text-[#3095df]">About Us</Link>
        <Link to="/contact" className="text-[1rem] font-bold hover:text-[#3095df]">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar