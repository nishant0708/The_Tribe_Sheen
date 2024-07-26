import React from 'react'
import './Sponsor.css'
import logo from '../assets/girls.png'
const Sponsor = () => {
  return (
    <div className="sponsor_container">
      <div className="sponsor_main">
        <div className="sponsor_content">
          <div className="sponsor_heading">
            <h3>SPONSORS</h3>
          </div>
          <div className="images">
            <img></img>
            <img src={logo} />
            <img />
          </div>
          <div className="images">
            <img></img>
            <img></img>
            <img></img>
          </div>
          <div className="images">
            <img></img>
            <img></img>
            <img></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
