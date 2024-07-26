import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to="/register" className="register-link">Register</Link>
      <About />
      <Contact />
    </div>
  )
}

export default Home
