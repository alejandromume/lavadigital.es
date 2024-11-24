import React, { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import testimonialsData from '@/data//OnePage/testimonials.json';
import brandsData from '@/data/OnePage/brands.json';
import appData from '@/data/app-data.json';

const testimonialsSwiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  }
}
const brandsSwiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
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

function Testimonials({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
    loadBackgroudImages();
  }, []);

  return (
    <section className="testim-crv section-padding main-colorbg text-dark position-re">
      <div className="container ontop">
        <div className="row">
          <div className="col-md-6">
            <div className="sec-head md-mb50">
              <h6 className="sub-title wow fadeInUp">What Clients Says?</h6>
              <h2 className="d-rotate wow">
                <span className="rotate-text">Testimonials</span>
              </h2>
            </div>
          </div>
          <div className="col-md-6 valign">
            <div className="swiper-controls testim-controls arrow-out d-flex justify-content-end justify-end-sm full-width">
              <div className="d-flex ">
                <div className="swiper-button-prev">
                  <span className="left">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="#1d1d1d"></path>
                    </svg>
                  </span>
                </div>
                <div className="swiper-button-next ml-50">
                  <span className="right">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="#1d1d1d"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-80">
            <div className="testim-swiper testim-swiper3 to-out">
              {
                loadSwiper &&
                <Swiper {...testimonialsSwiperOptions} id="content-carousel-container-unq-testim" className="swiper-container">
                  {
                    testimonialsData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="item bg-white">
                          <div className="cont mb-40">
                            <div className="rate-stars mb-20 fz-12">
                              <span className="rate">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </div>
                            <p className="fw-400">{item.content}</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="img circle-60">
                                <img src={lightMode ? '/dark/' + item.image : '/light/' + item.image} alt="" className="circle-img" />
                              </div>
                            </div>
                            <div className="ml-30">
                              <div className="info">
                                <h6 className="fz-16">{item.author}</h6>
                                <span className="opacity-7 sub-title">{item.position}</span>
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
      <div className="clients-carso section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper5" data-carousel="swiper" data-items="6" data-loop="true" data-space="30"
                data-speed="1000">
                {
                  loadSwiper &&
                  <Swiper {...brandsSwiperOptions} id="content-carousel-container-unq-clients">
                    {
                      brandsData.map((item) => (
                        <SwiperSlide key={item}>
                          <div className="item">
                            <div className="img icon-img-100">
                              <a href={appData.author_link}>
                                <img src={'/dark/' + item} alt="" />
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
      <div className="bg-pattern bg-img bg-repeat" data-background="/dark/assets/imgs/patterns/noise.png"></div>
    </section>
  )
}

export default Testimonials;