import React, { useRef } from 'react'
import './teams.css' // Make sure the path is correct
import PinkFlwr from '../assets/pinkoutlineflower.png'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import { FaInstagram } from 'react-icons/fa6'
import Vinita from '../assets/dr_vinita(1).png'
import Ravina from '../assets/Ravina.png'
import Vrinda from '../assets/vrinda.png'
import Saanwari from '../assets/saanwari.png'
import Nidhi from '../assets/nidhi.png'

const slides = [
  {
    name: 'Dr. Vinita Raj',
    position: 'Founder',
    description:
      'Dr. Vinita Raj, a dynamic entrepreneur and the visionary behind *Word Dealers Pvt. Ltd., is a force to be reckoned with. She has started her career with IIM Indore and Narsee Monjee, Mumbai. Beyond her business acumen, Dr. Raj harbors a deep passion for fashion, a passion that culminated in her crowning as Mrs. Chennai 2023. She is also a Fashion Brand Ambassador of Research Foundation of India in 158 Countries. Multifaceted career as an entrepreneur, orator, and advocate is marked by a steadfast commitment to women&apos;s empowerment. Implementing a pioneering work-from-home policy exclusively for women at Word Dealers, Dr. Raj has carved a niche for herself as a champion of gender equality. This innovative approach has garnered international acclaim, with invitations to speak at the US Consulate and recognition as one of SheInspires, England Top 6 Change Making Women Entrepreneurs globally. Her exceptional leadership was further validated by the prestigious Economic Times Women Entrepreneur of the Year 2022 award.',
    image: Vinita,
    instagram:
      'https://www.instagram.com/mrs_vinita_raj?igsh=MXZvcHZ6cTNmc3cweQ==',
  },
  {
    name: 'Nidhi Hasija',
    position: 'Image Consultant',
    description:
      "Nidhi Hasija* is a seasoned writer, trainer, and educator with over 18 years of experience inspiring and empowering individuals. With a keen eye for potential and a compassionate ear, she has guided countless students and professionals to achieve their goals. She has also participated as a presenter in Cambridge University, London. The author of the 'Luminaries' book series, Nidhi shares her passion for learning and growth. Her extensive experience, encompassing prestigious institutions like Progressive Education, DPS, Amity, IIPM, and corporate training for ICAI, ICSI, Scientech, and Wittyfeed, positions her as a leading expert in her field. Dedicated to igniting the spark within others, she empowers individuals to realize their full potential.",
    image: Nidhi,
    instagram:
      'https://www.instagram.com/nidhihasija?igsh=MWp3eXh6bzd6cDUwYw==',
  },
  {
    name: 'Saanwari Sidhwani',
    position: 'Project Head',
    description:
      "As the CEO of Word Dealers Pvt. Ltd., the World's First All-Female Localization Company, she leads an innovative team dedicated to Empowering Women through Translation, Lingual Escorting, and Simultaneous Interpretation. With a creative flair for Fashion Designing, Jewellery Creation, Art, and Content Development, she showcases a Diverse Artistic Ability that sets her apart in the industry. Additionally, she is a Trained Classical Singer with over Seven years of experience and a Skilled Dancer. Her strong Communication and Public Speaking skills have earned her significant achievements, including being a Dignitary at Columbia University alongside Ms. Evelin Lindner, a three-time Nobel Peace Prize nominee, participating in the Generation Equality Forum in Paris (2021), and Competing in Regional-Level Debate Competitions.",
    image: Saanwari,
    instagram: 'https://www.instagram.com/saaworryy?igsh=MXViYjNrbTEyZWdsZg==',
  },

  {
    name: 'Vrinda Meena',
    position: 'Senior Makeover Consultant',
    description:
      'Vrinda Meena, a highly skilled makeup artist, has been crafting stunning looks for over 12 years. Her expertise extends beyond makeup to encompass hair and skin care, making her a well-rounded beauty expert. Recognized for her exceptional talent, Vrinda has been honored with prestigious awards including the Talent Award, Best Makeup Artist Award, Educator Award, and Achievement Award. Her work has garnered admiration from renowned celebrities such as Raveena Tandon, Bhagyashree, Sneha Ullal, and Ishani Koppikar, solidifying her position as a leading figure in the beauty industry.',
    image: Vrinda,
    instagram:
      'https://www.instagram.com/pari_makeover_studio_academy?igsh=Mzhqbmw3ZGI4OHpz',
  },
  {
    name: 'Ravina Kalra',
    position: 'CRM',
    description:
      "She brings over seven years of experience in the education sector, with a strong background in sales, counseling, team management, recruitment, and channel development. She has held leadership roles at top institutions such as IEPS, NMIMS Global, and Swastika Education Institute, where she consistently achieved and exceeded targets. Ravina's expertise in managing center operations, developing strategies, and building relationships has been instrumental in her success. As the CRM of Tribe Sheen, she is committed to leveraging her skills to ensure the pageant's success and the growth of its participants.",
    image: Ravina,
    instagram:
      '  https://www.instagram.com/thetribesheen?igsh=YmNmOXFzeXBwMzhw',
  },
]
function Teams() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <div className="ourteams">
      <motion.img
        src={PinkFlwr}
        alt="Pink Flower"
        className="pinkoutline"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      <div className="slider-container" id="teams">
        <h1 className="heading">Our Team</h1>

        <motion.div
          className="teams-carousel"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            style={{
              '--swiper-navigation-color': '#ff9bbd',
              '--swiper-navigation-size': '8px',
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={false}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide" key={index}>
                  <div className="slide_card">
                    <div className="text_content">
                      <div className="headers">
                        <h1>{slide.name}</h1>
                        <h3>{slide.position}</h3>
                        <FaInstagram
                          size={20}
                          style={{ marginTop: '5px', cursor: 'pointer' }}
                          onClick={() => {
                            window.location.href = slide.instagram
                          }}
                        />
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
      <div className="custom-navigation">
        <button ref={prevRef} className="nav-button prev">
          &lt;
        </button>
        <button ref={nextRef} className="nav-button next">
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Teams
