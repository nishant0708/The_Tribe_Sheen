import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Home.css'
import Team from '../Our_Team/Team'
import  { BreakpointProvider } from 'react-socks';
import { DashboardComponent } from '../Dashboard/DashboardComponent';


import Sponsors from '../Sponsors/sponsors'

import Loader from '../Loader/Loader'
import Perks from '../Perks/Perks'
import Updates from '../Updates/Updates'
import Teams from '../Teams/Teams'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Loader />
        <BreakpointProvider>
      <DashboardComponent />
      </BreakpointProvider>
      <About />
      <Navbar />
      <About />
      <Perks />
      <Sponsors />
      <Teams />
      <Updates />
      <Contact />
    </div>
  )  
}

export default Home
