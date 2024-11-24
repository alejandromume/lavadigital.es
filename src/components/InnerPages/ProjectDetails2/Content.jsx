import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperOptions = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 80,
  centeredSlides: true,
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
      slidesPerView: 4,
    },
  }
}

function Content() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div className="section-padding pt-0">
      <div className="container-fluid rest">
        <div className="swiper4">
          {
            loadSwiper &&
            <Swiper div id="content-carousel-container-unq-img" className="swiper-container" {...swiperOptions}>
              <SwiperSlide>
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/3.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/4.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/5.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/6.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/4.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/dark/assets/imgs/works/projects/2/5.jpg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          }
        </div>
      </div>
      <div className="container mt-100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h5 className="fw-300">
                Visual hierarchy is the principle of arranging elements to show their order of importance. Designers structure visual characteristics—e.g., menu icons—so users can understand information easily. By laying out elements logically and strategically, designers influence users’ perceptions and guide them to desired actions. Users notice larger elements more easily can convert.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content