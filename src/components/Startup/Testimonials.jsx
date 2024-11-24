import React, { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
//= Data
import data from '@/data/Startup/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.testim-controls .swiper-button-next',
    prevEl: '.testim-controls .swiper-button-prev'
  }
}

function Testimonials({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className={`testim-clasic section-padding sub-bg ${lightMode ? 'light' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="testim">
              <div className="testim-swiper">
                {
                  loadSwiper &&
                  <Swiper {...swiperOptions} id="content-carousel-container-unq-testim" className="swiper-container">
                    {
                      data.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="item">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="author-info valign">
                                  <div className="full-width">
                                    <div className="img circle-120 m-auto mb-30">
                                      <img src={item.picture} alt=""
                                        className="circle-img" />
                                    </div>
                                    <div className="info">
                                      <h6>{item.name}</h6>
                                      <p className="sub-title">{item.position}</p>
                                    </div>
                                    <div className="arrow sub-bg"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="cont">
                                  <div className="mb-30 icon-img-80 opacity-1">
                                    <img src="/dark/assets/imgs/svg-assets/quote.png" alt="" />
                                  </div>
                                  <h4 className="fw-300">{item.content}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                }
              </div>
              <div className="swiper-controls">
                <div className="row">
                  <div className="col-md-8 offset-md-4">
                    <div className="arrows-carsouel testim-controls">
                      <div className="swiper-controls">
                        <div className="swiper-button-prev">
                          <span className="left">
                            <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`} alt="" />
                          </span>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next">
                          <span className="right">
                            <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`} alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;