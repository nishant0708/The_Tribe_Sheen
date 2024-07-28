import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'

import Sponsors from '../Sponsors/sponsors'

import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'
import Updates from '../Updates/Updates'
import Teams from '../Teams/Teams'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Loader/>
      <Navbar/>
      <About />
      <Perks />
      <Teams/>
      <Updates />
      <Contact />
      <Sponsors/>
    </div>
  )
}

export default Home
