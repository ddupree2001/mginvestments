import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div className="relative flex justify-end">
      <div className="hidden sm:flex justify-between items-center gap-x-16 py-[20px]">
        <Link to="/" className="text-[1.25rem] hover:text-[#3095df]">Home</Link>
        <Link to="/about" className="text-[1.25rem] hover:text-[#3095df]">About Us</Link>
        <Link to="/contact" className="text-[1.25rem] hover:text-[#3095df]">Contact</Link>
      </div>
      <div className="relative block sm:hidden py-[20px]">
        <FiMenu size={40} color="white" className="p-2 bg-[#3095df] rounded cursor-pointer" onClick={() => setMenu(!menu)}/>
        {menu && <div className="absolute top-[70px] right-0 flex flex-col gap-y-4 w-[100px] z-10 bg-slate-100 p-2 rounded">
          <Link to="/" className="text-[1rem] hover:text-[#3095df]">Home</Link>
          <Link to="/about" className="text-[1rem] hover:text-[#3095df]">About Us</Link>
          <Link to="/contact" className="text-[1rem] hover:text-[#3095df]">Contact</Link>
        </div> }
      </div>
      
    </div>
  )
}

export default Navbar