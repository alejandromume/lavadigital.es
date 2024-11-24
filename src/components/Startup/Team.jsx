import React, { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
//= Data
import data from '@/data/Startup/team.json';

const swiperOptions = {
  slidesPerView: 4,
  loop: 1000,
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
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

function Team() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyScroll);
    return () => window.removeEventListener('scroll', handleStickyScroll);
  }, []);

  function handleStickyScroll() {
    const sticky_item = document.getElementById('sticky_item');
    if (!sticky_item) return;
    const width = sticky_item.getBoundingClientRect().width;
    const height = sticky_item.getBoundingClientRect().height;
    const parent = document.querySelector('.team-crev').getBoundingClientRect();

    if (parent.top < -30 && parent.height / 2 < parent.bottom) {
      sticky_item.style.position = 'fixed';
      sticky_item.style.top = '0px';
      sticky_item.style.width = width + 'px';
      sticky_item.classList.add('is_stuck');
      if (sticky_item.nextElementSibling.id !== "placeholder") {
        const placeholderElement = document.createElement('div');
        placeholderElement.id = "placeholder";
        placeholderElement.style.height = height + 'px';
        placeholderElement.style.width = width + 'px';
        sticky_item.after(placeholderElement);
      }
    } else if (parent.height / 2 > parent.bottom) {
      sticky_item.style.position = 'absolute';
      sticky_item.style.top = 'auto';
      sticky_item.style.bottom = '0';
      sticky_item.style.width = width + 'px';
    } else {
      sticky_item.style.position = 'unset';
      sticky_item.style.top = 'unset';
      sticky_item.style.bottom = 'unset';
      sticky_item.style.width = 'auto';
      sticky_item.classList.remove('is_stuck');
      if (sticky_item.nextElementSibling.id === "placeholder") sticky_item.nextElementSibling.remove();
    }
  }

  return (
    <section className="team-crev section-padding pb-0 bord-thin-bottom">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12" style={{ position: 'relative' }}>
            <div className="sec-head-lg text-center text-u mb-80" id="sticky_item">
              <h2>Team</h2>
            </div>
            <div className="swiper4"
            >
              {
                loadSwiper &&
                <Swiper {...swiperOptions} id="content-carousel-container-unq-team" className="swiper-container">
                  {
                    data.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="item">
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="info">
                            <div className="main-marq team-position">
                              <div className="slide-har st1 non-strok">
                                <div className="box">
                                  {
                                    new Array(5).fill().map((_, i) => (
                                      <div className="item" key={i}>
                                        <h4>{item.position}</h4>
                                      </div>
                                    ))
                                  }
                                </div>
                                <div className="box">
                                  {
                                    new Array(5).fill().map((_, i) => (
                                      <div className="item" key={i}>
                                        <h4>{item.position}</h4>
                                      </div>
                                    ))
                                  }
                                </div>
                              </div>
                            </div>
                            <div className="main-marq team-name">
                              <div className="slide-har st1 non-strok">
                                <div className="box">
                                  {
                                    new Array(5).fill().map((_, i) => (
                                      <div className="item" key={i}>
                                        <h4>{item.name}</h4>
                                      </div>
                                    ))
                                  }
                                </div>
                                <div className="box">
                                  {
                                    new Array(5).fill().map((_, i) => (
                                      <div className="item" key={i}>
                                        <h4>{item.name}</h4>
                                      </div>
                                    ))
                                  }
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;