import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'

import Updates from '../Updates/Updates'

const Home = () => {
  return (
    <div className="home">
      <Loader/>
      <About />
      <Perks />
      <Updates />
      <Contact />
    </div>
  )
}

export default Home
