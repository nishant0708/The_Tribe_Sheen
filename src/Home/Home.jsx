import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Loader from '../Loader/Loader'

const Home = () => {
  return (
    <div className="home">
          <Loader/>
      <About />
      <Contact />
    </div>
  )
}

export default Home
