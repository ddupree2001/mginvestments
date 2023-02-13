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
      <div>
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <div className="py-16 flex flex-col gap-y-10">
              <div className="w-[100px] bg-[#3095df] h-[3px]"></div>
              <div className="flex flex-col gap-y-5">
                <h2 className="text-[1.5rem] sm:text-[2rem] font-semibold text-[#3095df]">Let's Take The First Step!</h2>
                <p>Selling your house fast for a reasonable price starts here. To request your free consultation, tell us about yourself and your property below, and one of our property specialists will contact you. Your home will be the new place of residence for countless families and at risk youth facing housing instability. We can't wait to make you a happy seller who knows their home is going towards helping the community!</p>
              </div>
              <div className="flex justify-center">
              <form className="bg-white shadow-md rounded-lg w-full md:w-1/2 px-8 py-10 mb-4">
                <div className="mb-4 flex gap-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-base font-bold mb-2" for="fname">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="fname" type="text" placeholder="Full Name" required/>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-base font-bold mb-2" for="lname">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="lname" type="text" placeholder="Full Name" required/>
                  </div>
                </div>
                <div className="mb-4 flex gap-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-base font-bold mb-2" for="phone">
                      Phone
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="phone" type="tel" placeholder="Phone" required/>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-base font-bold mb-2" for="email">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="email" type="email" placeholder="Email" required/>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" for="email">
                    Type Your Questions or Comments Below and Hit Submit:
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="question" type="text" />
                </div>
                <button className="bg-[#3095df] text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Submit Your Question
                </button>
              </form>
              </div>
              <div className="flex flex-col gap-y-5">
                <p>Just give us a ring at our phone number or shoot us an email through the form. We’ll get back to you within 48 hours. If you need us quicker, make sure to call as we’re able to answer phone calls more quickly than we’re able to return emails.</p>
                <p>Chat with you soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact