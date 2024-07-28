import React from 'react'
import Slider from 'react-slick'
import './Perks.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import perks from '../assets/perks.svg'
import perks1 from '../assets/perks1.svg'
import perks2 from '../assets/perks2.svg'

// Sample data array
const perksData = [
  {
    image: perks,
    title: 'Professional Makeup and Fashion Tips',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
  {
    image: perks1,
    title: 'Expert Grooming Sessions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
  {
    image: perks2,
    title: 'Personality Development Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
  {
    image: perks,
    title: 'Professional Makeup and Fashion Tips',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
  {
    image: perks1,
    title: 'Expert Grooming Sessions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
  {
    image: perks2,
    title: 'Personality Development Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
]

const Perks = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 400,

    focusOnSelect: true,

    swipeToSlide: true,
    centerPadding: '0', // Ensure no padding for centering
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  }

  return (
    <div className="perks_main" id='perks'>
      <div className="perks_content">
        <div className="perks_Heading">
          <h1>Perks</h1>
        </div>
        <Slider {...settings} className="perks_slider">
          {perksData.map((perk, index) => (
            <div key={index} className="perks_box">
              <img
                src={perk.image}
                className="perks_img_container"
                alt="perks"
              />
              <div className="perks_box_content">
                <p className="perks_title">{perk.title}</p>
                <p className="perks_desc">{perk.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Perks
