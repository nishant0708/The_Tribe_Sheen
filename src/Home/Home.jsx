import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Perks from '../Perks/Perks'

const Home = () => {
  return (
    <div className="home">
      <About />
      <Perks />
      <Contact />
    </div>
  )
}

export default Home
