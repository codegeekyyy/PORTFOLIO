import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Pro from './components/Pro/Pro'
import Mycerti from './components/Mycerti/Mycerti'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Pro/>
      <Mycerti/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App