import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import stairs from '../assets/stairs.jpeg'
import '../App.css'

const About = () => {
  return (
    <div>
      <Header />
      <div className="about_background">
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <Navbar />
            <div className="flex justify-center pt-4 pb-20 sm:pt-20 sm:pb-32">
                <h1 className="text-[2rem] sm:text-[3rem] font-bold text-[#3095df]">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <div className="py-16 flex flex-col gap-y-10">
              <div className="w-[100px] bg-[#3095df] h-[3px]"></div>
              <h2 className="text-[1.5rem] sm:text-[2rem] font-semibold text-[#3095df]">About MG Investments, LLC</h2>
              <div className="flex flex-col gap-y-5">
                <p>
                  <img src={stairs} className="float-right w-1/2 max-w-[500px] px-4"/>
                  MG Investments, LLC is a real estate investment company interested in acquiring properties for the purpose of renovating for resale or rental. Our unique business strategy is designed for acquiring rental properties to house women escaping a violent environment as well as the population transitioning from the foster care system without an effective means for housing accommodations. This fundamental precept is believed to offer the community; consistent educational opportunities for children, prospects for gainful employment, and improve the rental payment history for residents.
                  <div className="mb-5"></div>MG Investments’ primary target audiences are those that are currently housed in temporary shelters and/or served by the County Housing Department. In addition, MG Investments, LLC partners with a licensed therapist as an additional resource to the tenants to further assist with case management and counseling services to support the residents and their families.
                  <div className="mb-5">The type of housing units sought out by MG Investments, LLC is strategically considered when purchasing properties. Although all housing units are considered viable assets, MG Investments, LLC is first and foremost interested in multifamily units and small 8 to 15-unit apartment complexes. These housing options allow for a more efficient and effective use of community resources and security for the served populations.</div>
                  <div className="mb-5"></div>The organization is certified as a Minority, Woman-Owned Small Business, and regularly seeks opportunities for federal, state, local and private industry grants, and contracting options that align with the organization’s mission, vision and goals.
                  <div className="mb-5"></div>As a business that is established in its faith, MG Investments has future aspirations of offering qualified renters, assistance in obtaining access to available down payment assistance programs in support of home ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About