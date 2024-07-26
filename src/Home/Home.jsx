import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Home.css'
import { Dashboard } from '../Dashboard/Dashboard'

const Home = () => {
  return (
    <div className="home">
      <Dashboard  />
      <About />
      <Contact />
    </div>
  )  
}

export default Home
