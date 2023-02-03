import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home_background">
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <Navbar />
            <div className="flex gap-x-5 items-center my-10">
              <div className="w-[75px] h-[1px] bg-white"></div>
              <a href="https://www.facebook.com/mginvestmentsLLC"><FaFacebookF size={30} color="white"/></a>
              <a href="https://www.linkedin.com/in/clarissa-wade-poole-58799837/"><FaLinkedinIn size={30} color="white"/></a>
              <a href="https://www.instagram.com/mginvestmentsca/"><AiFillInstagram size={30} color="white"/></a>
            </div>
            <div className="flex flex-col md:flex-row gap-x-16 items-center pb-[10vh]">
              <div className="p-4 bg-[rgb(48,149,223)]/80 rounded-lg mb-10 w-full md:w-1/2">
                <h1 className="text-[3rem] text-white">Sell Your House To Help Stabilize Families & Communities In Need</h1>
              </div>
              <form className="bg-white shadow-md rounded-lg w-full md:w-1/2 px-8 py-10 mb-4">
                <h2 className="text-[2rem] mb-4">Ready To Sell? Receive An Offer Now...</h2>
                <p className="text-[1.25rem] mb-4">Our property specialists will give you a free, no-obligation consultation at your convenience. We buy houses all over the USA, and you choose the closing date! We are a black-owned, woman-owned business :)</p>
                <div class="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" for="fname">
                    Full Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="fname" type="text" placeholder="Full Name" required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" for="address">
                    Property Address
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="address" type="text" placeholder="Property Address" required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" for="phone">
                    Phone
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="phone" type="tel" placeholder="Phone" required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" for="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="email" type="email" placeholder="Email" required/>
                </div>
                <div className="mb-6">
                  <p className="block text-gray-700 text-base font-bold mb-2">How Soon Do You Need To Sell?</p>
                  <div className="mb-1">
                    <input type="radio" id="immediately" name="howsoon" value="Immediately"/>
                    <label for="immediately" className="px-1">Immediately.</label><br/>
                  </div>
                  <div className="mb-1">
                    <input type="radio" id="immediately" name="howsoon" value="Immediately"/>
                    <label for="immediately" className="px-1">Soon. Next 30-60 Days.</label><br/>
                  </div>
                  <div className="mb-1">
                    <input type="radio" id="immediately" name="howsoon" value="Immediately"/>
                    <label for="immediately" className="px-1">No rush. Just exploring my options.</label><br/>
                  </div>
                </div>
                <button className="bg-[#3095df] text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Receive Our Fair Offer
                </button>

              </form>
            </div>
            {/* <div className="flex flex-col justify-around mt-10 w-full md:w-[50%]">
              <div className="flex gap-x-5 items-center mb-24">
                <div className="w-[75px] h-[1px] bg-white"></div>
                <FaFacebookF size={30} color="white"/>
                <FaLinkedinIn size={30} color="white"/>
                <AiFillInstagram size={30} color="white"/>
              </div>
              <div className="p-4 bg-[rgb(48,149,223)]/80 rounded-lg mb-10">
                <h1 className="text-[3rem] text-white">Sell Your House To Help Stabilize Families & Communities In Need</h1>
              </div>
              <div>
                <AwesomeButton type="primary" ripple>Join The Movement</AwesomeButton>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home