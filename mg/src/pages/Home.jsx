import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import inside from '../assets/inside.jpg'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home_background">
        <div className="flex justify-center">
          <div className="w-full max-w-[1400px] mx-[50px]">
            <Navbar />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home