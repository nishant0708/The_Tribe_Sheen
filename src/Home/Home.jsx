import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Sponsors from '../Sponsors/sponsors'
import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'
import Updates from '../Updates/Updates'
import Teams from '../Teams/Teams'
import Navbar from '../Navbar/Navbar'
import Newpaper from '../assets/newspaper.png'
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Loader />
      <Navbar />
      <About />
      <Perks />
      <Sponsors />
      <Teams />
      <Updates />
      <Contact />
      <div className="newspaper-container">
        <img src={Newpaper} alt="newspaper" className='newspaper' />
      </div>
    </div>
  )
}

export default Home
