import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Team.css'; // Make sure the path is correct
import image from '../assets/vinita.png';

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      name: "Dr.Vinita Raj",
      position: "Co-Founder",
      description: "Dr. Vinita Raj, a dynamic entrepreneur and the visionary behind *Word Dealers Pvt. Ltd., is a force to be reckoned with. She has started her career with IIM Indore and Narsee Monjee, Mumbai. Beyond her business acumen, Dr. Raj harbors a deep passion for fashion, a passion that culminated in her crowning as Mrs. Chennai 2023. She is also a Fashion Brand Ambassador of Research Foundation of India in 158 Countries. Multifaceted career as an entrepreneur, orator, and advocate is marked by a steadfast commitment to women&apos;s empowerment. Implementing a pioneering work-from-home policy exclusively for women at Word Dealers, Dr. Raj has carved a niche for herself as a champion of gender equality. This innovative approach has garnered international acclaim, with invitations to speak at the US Consulate and recognition as one of SheInspires, England Top 6 Change Making Women Entrepreneurs globally. Her exceptional leadership was further validated by the prestigious Economic Times Women Entrepreneur of the Year 2022 award.",
      image: image,
    },
    {
      name: "Dr.Vinita Raj",
      position: "Co-Founder",
      description: "Dr. Vinita Raj, a dynamic entrepreneur and the visionary behind *Word Dealers Pvt. Ltd., is a force to be reckoned with. She has started her career with IIM Indore and Narsee Monjee, Mumbai. Beyond her business acumen, Dr. Raj harbors a deep passion for fashion, a passion that culminated in her crowning as Mrs. Chennai 2023. She is also a Fashion Brand Ambassador of Research Foundation of India in 158 Countries. Multifaceted career as an entrepreneur, orator, and advocate is marked by a steadfast commitment to women&apos;s empowerment. Implementing a pioneering work-from-home policy exclusively for women at Word Dealers, Dr. Raj has carved a niche for herself as a champion of gender equality. This innovative approach has garnered international acclaim, with invitations to speak at the US Consulate and recognition as one of SheInspires, England Top 6 Change Making Women Entrepreneurs globally. Her exceptional leadership was further validated by the prestigious Economic Times Women Entrepreneur of the Year 2022 award.",
      image: image,
    },
    {
      name: "Dr.Vinita Raj",
      position: "Co-Founder",
      description: "Dr. Vinita Raj, a dynamic entrepreneur and the visionary behind *Word Dealers Pvt. Ltd., is a force to be reckoned with. She has started her career with IIM Indore and Narsee Monjee, Mumbai. Beyond her business acumen, Dr. Raj harbors a deep passion for fashion, a passion that culminated in her crowning as Mrs. Chennai 2023. She is also a Fashion Brand Ambassador of Research Foundation of India in 158 Countries. Multifaceted career as an entrepreneur, orator, and advocate is marked by a steadfast commitment to women&apos;s empowerment. Implementing a pioneering work-from-home policy exclusively for women at Word Dealers, Dr. Raj has carved a niche for herself as a champion of gender equality. This innovative approach has garnered international acclaim, with invitations to speak at the US Consulate and recognition as one of SheInspires, England Top 6 Change Making Women Entrepreneurs globally. Her exceptional leadership was further validated by the prestigious Economic Times Women Entrepreneur of the Year 2022 award.",
      image: image,
    }]  

  return (
    <div className="slider-container">
      <h1 className="heading">Our Team</h1>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="slide_card">
              <div className="text_content">
                <div className="headers">
                  <h1>{slide.name}</h1><h1>|</h1>
                  <h3>{slide.position}</h3>
                </div>
                <p>{slide.description}</p>
              </div>
              <div className="image">
                <img src={slide.image} alt="team-member" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Team;
