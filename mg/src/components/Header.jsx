import React from 'react'
import logo from '../assets/logo.png'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import '../App.css'
import {AiFillMail, AiFillPhone} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-between items-center w-full max-w-[1400px] mx-[50px] my-[20px]">
            <Link to="/"><img src={logo} alt="MG Investments, LLC" className="h-[80px]" /></Link>
            <div className="hidden lg:flex justify-between items-center w-[700px] text-center text-[0.75rem]">
                <a href="mailto:admin@mginvestments.com" target="_blank" className="shadow-[0_4px_4px_#3095df] p-2 w-[200px] h-[70px] flex flex-col items-center justify-center cursor-pointer">
                    <p className="font-bold">Email:</p>
                    <p>admin@mginvestments.com</p>
                </a>
                <a href="tel:9169697408" target="_blank" className="shadow-[0_4px_4px_#3095df] p-2 w-[200px] h-[70px] flex flex-col items-center justify-center cursor-pointer">
                    <p className="font-bold">Call Us:</p>
                    <p>(916) 969-7408</p>
                </a>
                <a href="https://www.google.com/maps/place/9630+Bruceville+Rd,+Elk+Grove,+CA+95757/@38.4080479,-121.422363,17z/data=!3m1!4b1!4m5!3m4!1s0x809ac7b783680f79:0x87b73814eb80a79d!8m2!3d38.4080437!4d-121.4201743" target="_blank" className="shadow-[0_4px_4px_#3095df] p-2 w-[200px] h-[70px] flex flex-col items-center justify-center cursor-pointer">
                    <p className="font-bold">Address:</p>
                    <p>9630 Bruceville Road Suite 372</p>
                    <p>Elk Grove, CA 95757</p>
                </a>
            </div>
            <div className="hidden sm:flex lg:hidden justify-between items-center gap-x-10">
                <a href="mailto:admin@mginvestments.com" target="_blank"><AiFillMail size={40} color="#3095df"/></a>
                <a href="tel:9169697408" target="_blank"><AiFillPhone size={40} color="#3095df"/></a>
                <a href="https://www.google.com/maps/place/9630+Bruceville+Rd,+Elk+Grove,+CA+95757/@38.4080479,-121.422363,17z/data=!3m1!4b1!4m5!3m4!1s0x809ac7b783680f79:0x87b73814eb80a79d!8m2!3d38.4080437!4d-121.4201743" target="_blank"><IoLocationSharp size={40} color="#3095df"/></a>
            </div>
        </div>
    </div>
  )
}

export default Header