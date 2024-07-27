import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader'
import Updates from '../Updates/Updates'

const Home = () => {
  return (
    <div className="home">
          <Loader/>
      <About />
      <Contact />
      <Updates />
    </div>
  )
}

export default Home
