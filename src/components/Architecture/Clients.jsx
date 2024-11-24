import React, { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
//= Data
import data from '@/data/Architecture/clients.json';

const swiperOptions = {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  speed: 1000,
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
    <section className="clients-carso section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="swiper5">
              <div id="content-carousel-container-unq-clients" className="swiper-container" data-swiper="container">
                {
                  loadSwiper &&
                  <Swiper {...swiperOptions} className="swiper-container" id="content-carousel-container-unq-clients">
                    {
                      data.map((item) => (
                        <SwiperSlide key={Math.floor(Math.random() * 100000)}>
                          <div className="item">
                            <div className="img icon-img-100">
                              <img src={`${lightMode ? '/light' : '/dark'}/${item}`} alt="" />
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
    </section>
  )
}

export default Clients;