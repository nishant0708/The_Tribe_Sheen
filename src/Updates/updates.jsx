import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './updates.css'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
        <h1>Updates</h1>
        <p>Registration form, other updates</p>
      <Slider {...settings}>
        <div className='updates_container'>
        <div>
          <img src="../assets/MISS&MRS(1).png" alt="Slide 1" />
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
