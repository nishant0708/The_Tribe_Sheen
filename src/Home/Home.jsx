import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'


const Home = () => {
  return (
    <div className="home">
          <Loader/>
      <About />
      <Perks />
      <Contact />
    </div>
  )
}

export default Home
