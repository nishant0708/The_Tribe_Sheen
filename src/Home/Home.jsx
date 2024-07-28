import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'

import Sponsors from '../Sponsors/sponsors'

import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'


const Home = () => {
  return (
    <div className="home">
          <Loader/>
      <About />
      <Perks />
      <Contact />
      <Sponsors/>
    </div>
  )
}

export default Home
