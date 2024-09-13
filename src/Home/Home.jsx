import React from 'react'
import { motion } from 'framer-motion'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Sponsors from '../Sponsors/sponsors'
import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'
import Updates from '../Updates/Updates'
import Teams from '../Teams/Teams'
import Navbar from '../Navbar/Navbar'
import Newpaper from '../assets/newspaper.png'
import Flower from '../assets/flowoutline.png'
import './Home.css'

import { Dashboard } from '../Dashboard/Dashboard'
import Join from '../Why_to_Join_Us/Join'

const Home = () => {
  return (
    <div className="home" id="home">
      <Loader />
      <Navbar />
      <Dashboard />
      <About />

      <Perks />
      <Sponsors />
      <Teams />
      <Join />
      <Updates />
      <Contact />
      <div className="newspaper-container">
        <img src={Newpaper} alt="newspaper" className="newspaper" />
      </div>
      <motion.img
        src={Flower}
        alt="Flower"
        className="floweroutline"
        initial={{ opacity: 0, rotate: 180 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />
    </div>
  )
}

export default Home
