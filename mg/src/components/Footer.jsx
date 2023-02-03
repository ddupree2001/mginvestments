import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="bg-[#f0ffff]">
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-5 w-full max-w-[1400px] mx-[50px] md:mx-[100px] my-[20px]">
                <div className="w-full md:w-1/2">
                    <p className="text-[1.25rem] font-bold mb-5">About Us</p>
                    <p>MG Investments, LLC is a real estate investment company interested in acquiring properties for the purpose of renovating for resale or rental. Our unique business strategy is designed for acquiring rental properties to house women escaping a violent environment as well as the population transitioning from the foster care system without an effective means for housing accommodations.</p>
                </div>
                <div className="flex justify-between w-full md:w-[300px]">
                    <div>
                        <p className="text-[1.25rem] font-bold mb-5">Legal</p>
                        <Link to="/"><p className="mb-3">Terms of Use</p></Link>
                        <Link to="/"><p>Privacy Policy</p></Link>
                    </div>
                    <div>
                        <p className="text-[1.25rem] font-bold mb-5">Quick Tabs</p>
                        <Link to="/"><p className="mb-3">Home</p></Link>
                        <Link to="/about"><p className="mb-3">About Us</p></Link>
                        <Link to="/contact"><p>Contact</p></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-5 gap-y-10 w-full max-w-[1400px] px-[50px] md:px-[100px] pt-[20px] pb-[60px]">
            <p className="w-full md:w-1/3 text-center">Copyright @ MG Investments, LLC 2022 All Rights Reserved</p>
            <div className="flex justify-between w-[200px]">
                <a href="https://www.facebook.com/mginvestmentsLLC"><FaFacebookF size={25}/></a>
                <a href="https://www.linkedin.com/in/clarissa-wade-poole-58799837/"><FaLinkedinIn size={25}/></a>
                <a href="https://www.instagram.com/mginvestmentsca/"><AiFillInstagram size={25}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer