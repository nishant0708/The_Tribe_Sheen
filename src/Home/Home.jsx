import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Home.css'
import Team from '../Our_Team/Team'
import  { BreakpointProvider } from 'react-socks';
import { DashboardComponent } from '../Dashboard/DashboardComponent';


const Home = () => {
  return (
    <div className="home">
      <BreakpointProvider>
      <DashboardComponent />
      </BreakpointProvider>
      <About />
      <Team />
      <Contact />
    </div>
  )  
}

export default Home
