import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
//= Data
import data from '@/data/CreativeAgency/testimonials.json';

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
    <section className="testim-creative sub-bg o-hidden">
      <div className="container">
        <div className="sec-lg-head section-padding pb-80 bord-thin-bottom o-hidden">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re inline">
                <h6 className="dot-titl mb-10">What's People Says?</h6>
                <h2 className="fz-70 fw-700">Our Clients</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-end">
              <div className="arrows-carsouel testim-controls">
                <div className="swiper-controls">
                  <div className="swiper-button-prev">
                    <span className="left">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`} alt="" />
                    </span>
                  </div>
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
        <div className="row">
          <div className="col-lg-3">
            <div className="mt-80 md-hide" id="sticky_item">
              <Link href="/dark/page-contact" className="butn butn-md butn-bg main-colorbg2 radius-30 mb-80">
                <span>Become a Client</span>
                <span className="icon ml-10">
                  <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`} alt="" />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="testim-items section-padding">
              <div className="testim-swiper">
                {
                  loadSwiper &&
                  <Swiper {...swiperOptions} id="content-carousel-container-unq-testim" className="swiper-container">
                    {
                      data.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="item">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color2">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <h3 className="fw-400">{item.content}</h3>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <img src={item.picture} alt="" className="circle-img" />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>{item.author}</h6>
                                  <span className="main-color2 sub-title">{item.position}</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;