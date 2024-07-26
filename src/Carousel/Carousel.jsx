
import { useState } from "react";
import './Carousel.css';
import image from '../assets/vinita.png';


function Carousel() {
    const slides = [
        {
          src: image,
          title: "Mrs. VINITA",
          description: "is a force to be reckoned with. She has started her career with IIM Indore and Narsee Monjee, Mumbai. Beyond her business acumen, Dr. Raj harbors a deep passion for fashion, a passion that culminated in her crowning as Mrs. Chennai 2023. She is also a Fashion Brand Ambassador of Research Foundation of India in 158 Countries. Multifaceted career as an entrepreneur, orator, and advocate is marked by a steadfast commitment to women’s empowerment. Implementing a pioneering work-from-home policy exclusively for women at Word Dealers, Dr. Raj has carved a niche for herself as a champion of gender equality. This innovative approach has garnered international acclaim, with invitations to speak at the US Consulate and recognition as one of SheInspires, England Top 6 Change Making Women Entrepreneurs globally. Her exceptional leadership was further validated by the prestigious Economic Times Women Entrepreneur of the Year 2022 award.",
          position: "Director",
        },
        
        {
            src: image,
            title: "Mrs. VINITA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            position: "Director",
          },

          {
            src: image,
            title: "Mrs. VINITA",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            position: "Director",
          }, 
      ];
      

  let [current, setCurrent] = useState(0);

  

  return (
    <div style={{width: "100%", height: "100vw", overflow: "hidden"}}>
    <div className="carousel-container">
      <div
        className="carousel-slide-wrapper"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-caption">
              <div className='titleandposition'>
                <h2 className="carousel-title">{slide.title}</h2>
                <div className='full_stop'></div>
                <p className="carousel-position">{slide.position}</p>
              </div>
              <p className="carousel-description">{slide.description}</p>
            </div>
            <img src={slide.src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`carousel-indicator ${i === current ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}


export default Carousel;
