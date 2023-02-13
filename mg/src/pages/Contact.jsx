import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact_background">
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <Navbar />
            <div className="flex justify-center pt-4 pb-20 sm:pt-20 sm:pb-32">
                <h1 className="text-[2rem] sm:text-[3rem] font-bold text-[#3095df]">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact