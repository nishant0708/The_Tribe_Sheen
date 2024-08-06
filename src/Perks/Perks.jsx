import React from 'react'
import Slider from 'react-slick'
import './Perks.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import perks2 from '../assets/perks2.svg'
import media from '../assets/perk_media().svg'
import ramp from '../assets/perk_ramp().svg'
import Apparel from '../assets/perk_apparel().svg'
import perks from '../assets/perks.svg'
import photo from '../assets/perk_photo().svg'
import personality from '../assets/perk_personality().svg'
import YellowFlwr from '../assets/yellowflwr.png'
import PinkFlwr from '../assets/pinkflwr.png';
import { motion } from 'framer-motion'

// Sample data array
const perksData = [
  {
    image: ramp,
    title: 'Ramp Walk Sessions',
    description:
      'Master the art of graceful walking and captivating presence with our expert-led ramp walk sessions. Our trainers will guide you on how to command the stage with confidence and poise.',
  },
  {
    image: Apparel,
    title: ' Apparel and Attire Sense Grooming',
    description:
      'Elevate your style with personalized guidance on selecting the perfect wardrobe that complements your unique personality. Learn how to make impactful fashion choices for any occasion.',
  },
  {
    image: perks2,
    title: ' Yoga and Fitness Workshop',
    description:
      'Achieve balance and well-being through our yoga and fitness workshops designed to enhance both physical and mental strength. These sessions will help you maintain a healthy lifestyle and radiant energy.',
  },
  {
    image: photo,
    title: 'Photography Workshop',
    description:
      'Unleash your inner model as you learn the art of posing and presentation in front of the camera. Our photography experts will teach you how to create stunning images that capture your essence.',
  },
  {
    image: media,
    title: 'Media Interaction Session',
    description:
      'Gain valuable insights into effective communication and public speaking in our media interaction sessions. You’ll learn how to express yourself confidently and make a lasting impression in interviews.',
  },
  {
    image: personality,
    title: ' Personality Development',
    description:
      'Build a strong foundation of self-awareness and confidence with our personality development sessions. We focus on enhancing your interpersonal skills, self-esteem, and overall presence.',
  },
  {
    image: perks,
    title: ' Professional Makeup and Fashion Tips',
    description:
      'Discover the secrets of flawless makeup application and fashion styling with guidance from industry professionals. These tips will ensure you always look your best, on and off the stage.',
  },
  {
    image: perks2,
    title: 'Expert Grooming Session',
    description:
      'Refine your elegance and charm with our expert grooming sessions tailored to accentuate your individuality. Our specialists will help you develop a polished image that resonates with your personal brand.',
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
        <motion.img
          src={YellowFlwr}
          alt="Yellow Flower"
          className='yellowflwrp'
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 200 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <motion.img
          src={PinkFlwr}
          alt="Pink Flower"
          className='pinkflwrp'
          initial={{ opacity: 0, rotate: 180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />


        {/* </div> */}
        <div className="perks_Heading">
          <h1>Perks</h1>
        </div>
        <Slider {...settings} className="perks_slider">
          {perksData.map((perk, index) => (
            <motion.div key={index} className="perks_box"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={perk.image}
                className="perks_img_container"
                alt="perks"
              />
              <div className="perks_box_content">
                <p className="perks_title">{perk.title}</p>
                <p className="perks_desc">{perk.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Perks
