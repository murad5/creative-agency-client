import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const style = {
  width: '100%',
  height: '80%',
  marginTop: '15%',
}

const Portfolio = () => {

  return (
    <section className="portfolio mt-5 mb-5 text-md-left text-center" style={{ backgroundColor: '#111430'}} >
      <div className="text-center text-white text-bold pt-5">
        <h1 >Here are some fo <span className="text-success">our works</span> </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides= 'true'
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="img-fluid "><img style={style} src={carousel1} alt="" /></SwiperSlide>
        <SwiperSlide className="img-fluid "><img style={style} src={carousel2} alt="" /></SwiperSlide>
        <SwiperSlide className="img-fluid "><img style={style} src={carousel3} alt="" /></SwiperSlide>
        <SwiperSlide className="img-fluid "><img style={style} src={carousel4} alt="" /></SwiperSlide>
        
        
   
    </Swiper>
    </section>

  );
};

export default Portfolio;