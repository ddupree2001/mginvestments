import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import founder from '../assets/founder.jpeg'
import '../App.css'

const Founder = () => {
  return (
    <div>
      <Header />
      <div className="about_background">
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px] relative">
            <Navbar />
            <div className="flex justify-center pt-4 pb-20 sm:pt-20 sm:pb-32">
                <h1 className="text-[2rem] sm:text-[3rem] font-bold text-[#3095df]">Meet The Founder</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="w-full max-w-[1000px] mx-[50px] relative">
            <div className="py-16 flex flex-col gap-y-10">
              <div className="w-[100px] bg-[#3095df] h-[3px]"></div>
              <div className="flex">
                <div className="w-1/2"></div>
                <h2 className="w-1/2 text-[1.5rem] sm:text-[2rem] font-semibold text-[#3095df]">Clarissa Wade</h2>
              </div>
             
              <div className="flex flex-col gap-y-5">
                <div>
                  <img src={founder} className="float-left w-1/2 max-w-[500px] px-4"/>
                  Clarissa began her entrepreneurial career in 2018 establishing MG Investments, LLC as a real estate investment company. In this role, Clarissa purchases properties for the purpose of renovating for resale or rental. She focuses on a unique business strategy whose purpose is to acquire rental properties to house women escaping a violent environment or high-risk population without an effective means for housing accommodations. Her belief is “stable housing is the foundation for a stable community”. She also believes it offers stable educational opportunities for children, provides opportunities to seek out gainful employment, and improves rental history to take advantage of home purchasing opportunities.
                  <div className="mb-5"></div>The name MG Investments, LLC pays tribute to the women who inspired the company’s creator Clarissa Wade; Mary Louise Wade and Gracie Mae Poole (MG), the mothers of Curtis and Clarissa Wade respectively. While her name is not reflected in the company name, Jann Anderson was also integral to the underlying spirit of the organization. These strong women laid the framework for this business and are the namesake of the organization.
                  <div className="mb-5"></div>During their lifetime, women have crossed their paths seeking refuge or assistance from unhealthy living situations in their homes. With damaged credit and having to flee homes with minimal personal items, they received compassionate guidance and, in some cases, temporary shelter at a time when institutionalized shelters were not available. These women provided help to victims of violent attacks in the home, when help was minimal or non-existent.
                  <div className="mb-5"></div>Clarissa's service is not limited to volunteer service. Her 24-year career with the State of California was equally rewarding prior to retirement. Her service to the State of California provided her the opportunity to be the Policy Development Branch Chief in the implementation of the 2010 Patient Protection and Affordable Care Act in California during the administration of former President Barack H. Obama. This experience afforded her the opportunity to work with various stakeholders in Sacramento.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Founder