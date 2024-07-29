import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './updates.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import UpdateImage from '../assets/updates.png';
import PinkFlwr from '../assets/pinkflwr.png';

const updates = [UpdateImage, UpdateImage, UpdateImage, UpdateImage];


export default function Updates() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='updatescontainer' id='updates'>
            <h1 className='updatetitle'>
                Updates
            </h1>
            <img src={PinkFlwr} alt="Pink Flower" className='pinkflwr' />
            <div className="carousel">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    style={{
                        "--swiper-navigation-color": "#ff9bbd",
                        "--swiper-navigation-size": "8px",
                      }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    {updates.map((update, index) => (
                        <SwiperSlide key={index}>
                            <img src={update} alt={`Update ${index + 1}`} className='updateimg' />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-navigation">
                    <button ref={prevRef} className="nav-button prev">&lt;</button>
                    <button ref={nextRef} className="nav-button next">&gt;</button>
                </div>
            </div>
        </div>
    )
}