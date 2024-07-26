import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './perks.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
     responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true }
        }
      ]
  };

  return (
    <div className="carousel">
      <h1>PERKS</h1>
      <Slider {...settings}>
        <div className="container">
          <div className="img_container">
            <img src="../assets/untitled design(2).svg" alt="Expert Grooming Sessions" />
          </div>
          <h3>Expert Grooming Sessions</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu.</p>
        </div>
        <div className="container">
          <div className="img_container">
            <img src="../assets/untitled design(3).svg" alt="Professional make up and Fashion Tips" />
          </div>
          <h3>Professional make up and Fashion Tips</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu.</p>
        </div>
        <div className="container">
          <div className="img_container">
            <img src="../assets/untitled design.svg" alt="Personality Development Classes" />
          </div>
          <h3>Personality Development Classes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu.</p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
