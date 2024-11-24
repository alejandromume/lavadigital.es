import React, { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
//= Data
import data from '@/data/HomeMain/clients.json';

const swiperOptions = {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }
}

function Clients({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div className="clients-carso2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="swiper5">
              {
                loadSwiper &&
                <Swiper {...swiperOptions} id="content-carousel-container-unq-clients" className="swiper-container">
                  {
                    data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="item">
                          <div className="img icon-img-100">
                            <a href="#0">
                              <img src={`/${lightMode ? 'light' : 'dark'}/${item}`} alt="" />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients;