import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BannerSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://img.freepik.com/free-photo/retro-comics-speech-bubble-composition_23-2149006223.jpg?w=826&t=st=1699991099~exp=1699991699~hmac=882b874ba4bc983e5bb5cafc72874658620f5a3503b79e4471358ca4818e071f" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/retro-comics-speech-bubble-composition_23-2149006221.jpg?w=826&t=st=1699990900~exp=1699991500~hmac=2ff291aee24415c3ccc874f6dec71dd0cc8c170f0fdf3dc051b35e36876fc893" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/retro-comics-speech-bubble-composition_23-2149006222.jpg?w=826&t=st=1699991079~exp=1699991679~hmac=63ea99abe3310db1d4fc526e7b0f75edce2006e1700441f33288c3a800faf1fa" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
