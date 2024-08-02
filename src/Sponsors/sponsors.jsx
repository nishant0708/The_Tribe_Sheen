import React from 'react';
import './sponsors.css';
import sponsor1 from '../assets/s(1).png';
import sponsor2 from '../assets/s(2).png';
import sponsor3 from '../assets/s(3).png';
import Bow from '../assets/pinkbow.png';
import {motion} from 'framer-motion'
const sponsors = [
  { id: 1, name: 'Sponsor 1', imgSrc: sponsor1 },
  { id: 2, name: 'Sponsor 2', imgSrc: sponsor2 },
  { id: 3, name: 'Sponsor 3', imgSrc: sponsor3 },
];

const Sponsors = () => {
  return (
    <div className='sponsor-main'>
      <div className="sponsors-page">
        <h1 className="sponsor-heading">Sponsors</h1>
        <img src={Bow} alt="Pink Bow" className='pinkbow' />
        <div className="sponsors-grid">
          {sponsors.map(sponsor => (
            <motion.div key={sponsor.id} className="sponsor-block"
              initial={{ opacity: 0, transform: 'translateY(100px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={sponsor.imgSrc} alt={sponsor.name} className="sponsor-image" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
