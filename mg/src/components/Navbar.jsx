import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const [arrow, setArrow] = useState(false)

  return (
    <div className="relative flex justify-end">
      <div className="hidden sm:flex justify-between items-center gap-x-16 py-[20px]">
        <Link to="/" className="text-[1.25rem] hover:text-[#3095df]">Home</Link>
        <div className="relative group">
          <Link to="/about" className="text-[1.25rem] hover:text-[#3095df]">About Us</Link>
          <Link to="/founder" className="text-[1.25rem] absolute w-[180px] hover:text-[#3095df] bg-[#f0ffff] py-1 px-2 rounded hidden group-hover:block">Meet The Founder</Link>
        </div>
        <Link to="/contact" className="text-[1.25rem] hover:text-[#3095df]">Contact</Link>
      </div>
      <div className="relative block sm:hidden py-[20px]">
        <FiMenu size={40} color="white" className="p-2 bg-[#3095df] rounded cursor-pointer" onClick={() => setMenu(!menu)}/>
        {menu && <div className="absolute top-[70px] right-0 flex flex-col gap-y-4 z-10 bg-slate-100 w-[200px] p-4 rounded ">
          <Link to="/" className="text-[1rem] hover:text-[#3095df]">Home</Link>
          <div className="flex items-center gap-x-1">
            <Link to="/about" className="text-[1rem] hover:text-[#3095df] ">About Us</Link>
            <AiFillCaretDown onClick={() => setArrow(!arrow)} className={arrow ? "rotate-0" : "rotate-90"}/>
          </div>
          {arrow && <Link to="/founder" className="text-[1rem] hover:text-[#3095df] bg-[#f0ffff] py-1 px-2 rounded">Meet The Founder</Link>}
          <Link to="/contact" className="text-[1rem] hover:text-[#3095df]">Contact</Link>
        </div> }
      </div>
      
    </div>
  )
}

export default Navbar