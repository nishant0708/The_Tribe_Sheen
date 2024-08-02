import React from 'react'
import './teams.css' // Make sure the path is correct
import PinkFlwr from '../assets/pinkoutlineflower.png';
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Vinita from '../assets/vinita.png'
import Yogita from '../assets/yogita.png'
import Vrinda from '../assets/vrinda.png'
import Saanwari from '../assets/saanwari.png'
import Nidhi from '../assets/nidhi.png'

const slides = [
  {
    name: 'Dr.Vinita Raj',
    position: 'Co-Founder',
    description:
      'Dr. Vinita Raj, a dynamic entrepreneur and the visionary behind *Word Dealers Pvt. Ltd., is a force to be reckoned with. She has started her career with IIM Indore and Narsee Monjee, Mumbai. Beyond her business acumen, Dr. Raj harbors a deep passion for fashion, a passion that culminated in her crowning as Mrs. Chennai 2023. She is also a Fashion Brand Ambassador of Research Foundation of India in 158 Countries. Multifaceted career as an entrepreneur, orator, and advocate is marked by a steadfast commitment to women&apos;s empowerment. Implementing a pioneering work-from-home policy exclusively for women at Word Dealers, Dr. Raj has carved a niche for herself as a champion of gender equality. This innovative approach has garnered international acclaim, with invitations to speak at the US Consulate and recognition as one of SheInspires, England Top 6 Change Making Women Entrepreneurs globally. Her exceptional leadership was further validated by the prestigious Economic Times Women Entrepreneur of the Year 2022 award.',
    image: Vinita,
  },
  {
    name: 'Saanwari Sidhwani',
    position: 'Project Head',
    description:
      "As the CEO of Word Dealers Pvt. Ltd., the World's First All-Female Localization Company, she leads an innovative team dedicated to Empowering Women through Translation, Lingual Escorting, and Simultaneous Interpretation. With a creative flair for Fashion Designing, Jewellery Creation, Art, and Content Development, she showcases a Diverse Artistic Ability that sets her apart in the industry. Additionally, she is a Trained Classical Singer with over Seven years of experience and a Skilled Dancer. Her strong Communication and Public Speaking skills have earned her significant achievements, including being a Dignitary at Columbia University alongside Ms. Evelin Lindner, a three-time Nobel Peace Prize nominee, participating in the Generation Equality Forum in Paris (2021), and Competing in Regional-Level Debate Competitions.",
    image: Saanwari,
  },
  {
    name: 'Nidhi Hasija',
    position: 'Image Consultant',
    description:
      "Nidhi Hasija* is a seasoned writer, trainer, and educator with over 18 years of experience inspiring and empowering individuals. With a keen eye for potential and a compassionate ear, she has guided countless students and professionals to achieve their goals. She has also participated as a presenter in Cambridge University, London. The author of the 'Luminaries' book series, Nidhi shares her passion for learning and growth. Her extensive experience, encompassing prestigious institutions like Progressive Education, DPS, Amity, IIPM, and corporate training for ICAI, ICSI, Scientech, and Wittyfeed, positions her as a leading expert in her field. Dedicated to igniting the spark within others, she empowers individuals to realize their full potential.",
    image: Nidhi,
  },
  {
    name: 'Yogita Thakur',
    position: 'CRM',
    description:
      "Miss Yogita Thakur, a graduate of St. Paul Institute of Professional Studies, Indore, is a dedicated professional with a keen eye for detail and a passion for continuous learning. Her customized approach to tasks has proven invaluable at Word Dealers Pvt Ltd, where she has excelled for over a year. With exceptional research and communication skills, Yogita has successfully expanded the company's market reach. Her expertise in customer relationship management makes her uniquely qualified to guide and support beauty pageant contestants, understanding their specific needs and aspirations.",
    image: Yogita,
  },
  {
    name: 'Vrinda Meena',
    position: 'Senior Makeover Consultant',
    description:
      "Vrinda Meena, a highly skilled makeup artist, has been crafting stunning looks for over 12 years. Her expertise extends beyond makeup to encompass hair and skin care, making her a well-rounded beauty expert. Recognized for her exceptional talent, Vrinda has been honored with prestigious awards including the Talent Award, Best Makeup Artist Award, Educator Award, and Achievement Award. Her work has garnered admiration from renowned celebrities such as Raveena Tandon, Bhagyashree, Sneha Ullal, and Ishani Koppikar, solidifying her position as a leading figure in the beauty industry.",
    image: Vrinda,
  },
]
function Teams() {
  

  return (
    <div className='ourteams'>
      <motion.img
          src={PinkFlwr}
          alt="Pink Flower"
          className='pinkoutline'
          initial={{ opacity: 0, rotate: 0}}
          whileInView={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true, amount: 0.5 }}
        />
    <div className="slider-container" id="teams">
      <h1 className="heading">Our Team</h1>

      <motion.div className="teams-carousel"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500 }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide" key={index}>
                <div className="slide_card">
                  <div className="text_content">
                    <div className="headers">
                      <h1>{slide.name}</h1>
                      <h3>{slide.position}</h3>
                    </div>
                    <p>{slide.description}</p>
                  </div>
                  <div className="image">
                    <img src={slide.image} alt="team-member" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
    </div>
  )
}

export default Teams
