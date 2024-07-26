import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Sponsor from '../Sponsor/Sponsor'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <About />
      <Contact />
      <Sponsor />
    </div>
  )
}

export default Home
