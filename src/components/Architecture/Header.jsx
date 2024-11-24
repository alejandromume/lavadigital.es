import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Parallax } from 'swiper';
//= Components
import StatementSplitter from '../Common/StatementSplitter';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import data from '@/data/Architecture/header.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax],
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].querySelector('.bg-img').setAttribute('data-swiper-parallax', 0.75 * swiper.width);
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: '.slider-prlx .swiper-pagination',
    type: 'fraction',
    clickable: true
  },
  navigation: {
    nextEl: '.slider-prlx .next-ctrl',
    prevEl: '.slider-prlx .prev-ctrl'
  }
}

function Header() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    if (loadSwiper) loadBackgroudImages();
  }, [loadSwiper]);

  return (
    <header className="slider arch-slider slider-prlx">
      {
        loadSwiper &&
        <Swiper {...swiperOptions} className="swiper-container parallax-slider">
          {
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-img valign" data-background={item.background} data-overlay-dark="5">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="caption mt-30">
                          <h5 className="main-colorbg inline">
                            <span>{item.number}</span>
                          </h5>
                          <h1><StatementSplitter statement={item.title} /></h1>
                          <p>{item.text}</p>
                        </div>
                      </div>
                      <div className="col-lg-3 offset-lg-1 valign">
                        <div className="ml-auto explore">
                          <Link href="/dark/project-details1">
                            <div className="circle-button">
                              <div className="rotate-circle fz-30 text-u">
                                <svg className="textcircle" viewBox="0 0 500 500">
                                  <defs>
                                    <path id="textcircle1" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                                    </path>
                                  </defs>
                                  <text>
                                    <textPath xlinkHref="#textcircle1" textLength="900"> Explore More - Explore More -</textPath>
                                  </text>
                                </svg>
                              </div>
                              <div className="arrow">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      }
      <div className="setting">
        <div className="controls">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="ion-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="ion-chevron-left"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;