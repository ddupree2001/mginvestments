import React, {useState} from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import houses from '../assets/houses.png'
import bigScreen from '../assets/bigScreen.png'
import closeUp from '../assets/closeUp.png'
import posterPic from '../assets/posterPic.png'
import greenRoom from '../assets/greenRoom.png'
import {Link} from 'react-router-dom'

const Home = () => {

  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? events.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === events.length - 1 ? 0 : curr + 1))

  const events = [
    {
      image: bigScreen
    },
    {
      image: closeUp
    },
    {
      image: posterPic
    },
    {
      image: greenRoom
    },
  ]

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
                <h1 className="text-[3rem] text-white font-bold">Sell Your House To Help Stabilize Families & Communities In Need</h1>
              </div>
              <form className="bg-white shadow-md rounded-lg w-full md:w-1/2 px-8 py-10 mb-4">
                <h2 className="text-[2rem] mb-4 font-bold">Ready To Sell? Receive An Offer Now...</h2>
                <p className="text-[1.25rem] mb-4">Our property specialists will give you a free, no-obligation consultation at your convenience. We buy houses all over the USA, and you choose the closing date! We are a black-owned, woman-owned business :)</p>
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-bold mb-2" for="name">
                    Full Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#3095df] focus:shadow-outline" id="name" type="text" placeholder="Full Name" required/>
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
          </div>
        </div>
      </div>
      <div className="bg-[#f0ffff]">
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <div className="flex justify-center pt-[10vh] pb-[5vh]">
              <div className="max-w-[700px]">
                <h1 className="text-[2.25rem] text-center mb-5">“ We provide housing stability for families and at risk youth that would otherwise have difficulty maintaining housing. ”</h1>
                <div className="flex items-center gap-x-5">
                  <div className="w-[50px] h-[1px] bg-black"></div>
                  <p>Clarissa Y. Wade, Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col gap-y-5 md:flex-row items-center py-[5vh] gap-x-5">
              <div className="w-full md:w-1/2">
                <h2 className="text-[2rem] mb-4 font-bold">Stabilizing families and communities by acquiring and renovating properties.</h2>
                <p className="text-[1.25rem] mb-10">MG Investments, LLC is a community conscious real estate investment company that seeks opportunities to help individuals facing housing instability to obtain stable housing through the purchase, rental and sale of property and learning strategies for wealth building through an educational platform.</p>
                <p className="text-[1.25rem] mb-10">MG Investments, LLC values the continuity of family and relationships and is driven by those values to create and maintain company financial stability and community housing stability through real estate investments and solid economic planning.</p>
                <div>
                  <Link to="/about"><button className="py-4 px-8 bg-[#3095df] rounded-full text-white">
                    Learn More
                  </button></Link>
                </div>
              </div>
              <img src={houses} alt="houses" className="hidden md:block w-full md:w-2/5"/>
            </div>
            <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-x-16 gap-y-10 py-[5vh]">
              <div className="relative flex overflow-hidden w-3/5 h-3/5 md:w-1/3 md:h-1/3 rounded-lg">
                {events.map((event, index) => (
                    <div className="flex-[0_0_100%] transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)`}} key={index}>
                      <img src={event.image} alt="event" className="h-full w-full"/>
                    </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-between p-1">
                  <button onClick={prev} className="bg-[rgb(48,149,223)]/80 rounded-full p-1">
                    <AiOutlineLeft size={30} color="black" />
                  </button>
                  <button onClick={next} className="bg-[rgb(48,149,223)]/80 rounded-full p-1">
                    <AiOutlineRight size={30} color="black"/>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-[2rem] mb-4 font-bold">Recent Events</h2>
                <p className="text-[1.25rem]">Our founder was honored to be selected to share her Small Business experience with the Intuit Leadership Team in Los Angeles, California. Intuit is the parent company for QuickBooks. As a QuickBooks user, she was blessed to be able to have the assistance of Live Experts to get her QuickBooks up and running and now she can maintain it. Thank you Intuit for believing in her and encouraging her to continue on her path.</p>
              </div>
            </div>
            <div className="flex flex-col items-center py-[5vh]">
              <h2 className="text-[2.25rem] mb-4 font-bold">Core Competencies</h2>
              <div className="w-[100px] h-[3px] bg-[#3095df] mb-16"></div>
              <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center place-items-center xl:justify-between gap-10">
                <div className="bg-white p-10 h-full group hover:bg-[#3095df]">
                  <h1 className="text-[3rem] text-gray-200 text-right mb-4 group-hover:text-white">01.</h1>
                  <h2 className="text-[1.5rem] mb-4 group-hover:text-white">Project Management</h2>
                  <p className="group-hover:text-white">We specialize in planning, schedule management, resource management, and collaboration for our clients. Our professionals are industry leaders in high quality development management to ensure that we locate the right sites for our projects.</p>
                </div>
                <div className="bg-white p-10 h-full group hover:bg-[#3095df]">
                  <h1 className="text-[3rem] text-gray-200 text-right mb-4 group-hover:text-white">02.</h1>
                  <h2 className="text-[1.5rem] mb-4 group-hover:text-white">Financial Planning</h2>
                  <p className="group-hover:text-white">Financial planning plays a big role in how we create our cash offers. Seeing that our main goal is to house those who can't afford to house themselves, we provide a great deal of attention towards financing our properties to ensure people will have stable homes.</p>
                </div>
                <div className="bg-white p-10 h-full group hover:bg-[#3095df]">
                  <h1 className="text-[3rem] text-gray-200 text-right mb-4 group-hover:text-white">03.</h1>
                  <h2 className="text-[1.5rem] mb-4 group-hover:text-white">REI Education</h2>
                  <p className="group-hover:text-white">We aren't interested in keeping all of the knowledge to ourselves. MG Investments, LLC is dedicated to showing our clients and others how to use fundamental analysis and financial modeling to make smart real estate decisions.</p>
                </div>
                <div className="bg-white p-10 h-full group hover:bg-[#3095df]">
                  <h1 className="text-[3rem] text-gray-200 text-right mb-4 group-hover:text-white">04.</h1>
                  <h2 className="text-[1.5rem] mb-4 group-hover:text-white">Consultation Services</h2>
                  <p className="group-hover:text-white">Our knowledge is yours! We provide expert advice and recommendations to our clients who are looking to purchase, sell, or develop property. Our consultation services are for people who are serious about growing their wealth through real estate.</p>
                </div>
                <div className="bg-white p-10 h-full group hover:bg-[#3095df]">
                  <h1 className="text-[3rem] text-gray-200 text-right mb-4 group-hover:text-white">05.</h1>
                  <h2 className="text-[1.5rem] mb-4 group-hover:text-white">Partnership Development</h2>
                  <p className="group-hover:text-white">We're always looking for new partners to assist us in purchasing, developing, and leasing property. If you think your skills complement ours, we'd love to have you reach out and contact us to have a conversation about how we can work together.</p>
                </div>
                <div className="bg-white p-10 h-full group hover:bg-[#3095df]">
                  <h1 className="text-[3rem] text-gray-200 text-right mb-4 group-hover:text-white">06.</h1>
                  <h2 className="text-[1.5rem] mb-4 group-hover:text-white">Customer Relations</h2>
                  <p className="group-hover:text-white">Our customers and clients are our number one priority. The relationships we build will last a lifetime and we're happy to make accommodations to ensure you're happy with our services.</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home