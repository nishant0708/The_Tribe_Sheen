import React from 'react'
import './About.css'

const About = () => {
  // const updateMargin = () => {
  //   const aboutMain = document.querySelector('.about_main')
  //   const aboutUs = document.querySelector('.About_us')
  //   const aboutMainHeight = aboutMain.offsetHeight
  //   aboutUs.style.marginBottom = aboutMainHeight + 'px'
  // }

  // useEffect(() => {
  //   updateMargin()
  //   window.addEventListener('resize', updateMargin)

  //   return () => {
  //     window.removeEventListener('resize', updateMargin)
  //   }
  // }, [])

  return (
    <div className="About_us" id="about">
      <div className="about_main">
        <div className="about_content">
          <h2>ABOUT US</h2>
          <p>
            Tribe Sheen is powered by <b>Word Dealers</b>, an All-Female
            Localization Firm renowned for its Prowess in Translation,
            Interpretation, and Content Creation. Our shared Goal is to{' '}
            <b>establish a Stage</b> on which Women can exhibit their{' '}
            <b>Elegance, Beauty, and Uniqueness.</b> Our pageant is a
            celebration of <b>women, ethnic pride,</b> and{' '}
            <b>personal development</b> rather than just a competition.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
