import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Data
import data from '@/data/Preview/pages.json';

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 60,
  speed: 1000
}

function Pages() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="pages section-padding position-re ontop">
      <div className="container-fluid">
        <div className="swiper3">
          {
            loadSwiper &&
            <Swiper {...swiperOptions}>
              {
                data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="item">
                      <Link href={item.link}>
                        <img src={item.image} alt="" />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          }
        </div>
      </div>
    </section>
  )
}

export default Pages;