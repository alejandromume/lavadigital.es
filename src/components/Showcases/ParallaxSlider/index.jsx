import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Parallax } from 'swiper';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import data from '@/data/Showcases/parallax-slider.json';

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
    el: '.showcase-full .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.showcase-full .swiper-button-next',
    prevEl: '.showcase-full .swiper-button-prev'
  }
}

function ParallaxSlider() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    if (loadSwiper) loadBackgroudImages();
  }, [loadSwiper]);

  return (
    <header className="slider showcase-full">
      {
        loadSwiper &&
        <Swiper {...swiperOptions} className="swiper-container parallax-slider">
          {
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-img valign" data-background={item.background} data-overlay-dark="3">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-11 offset-lg-1">
                        <div className="caption">
                          <h6 className="sub-title mb-30" data-swiper-parallax="-1000">© {item.year} <br /> {item.type}</h6>
                          <h1>
                            <Link href="/dark/project-details1">
                              <span data-swiper-parallax="-2000">{item.title}</span>
                            </Link>
                          </h1>
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
      <div className="slider-contro">
        <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div><i className="fas fa-chevron-right"></i></div>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div><i className="fas fa-chevron-left"></i></div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
      <div className="swiper-pagination dots"></div>
    </header>
  )
}

export default ParallaxSlider;