import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {Home, About, Founder, Contact, Terms, Privacy} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App