import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/OnePage/team.json';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperOptions = {
  slidesPerView: 2,
  loop: 1000,
  spaceBetween: 500,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView:3,
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
    <section className="team section-padding">
      <center>
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="">
              <h6 className="sub-title opacity-8 wow fadeInUp">conoce a</h6>
              <h2 className="d-rotate wow">
                <span className="rotate-text">Nuestro equipo.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {
          /*loadSwiper &&
          <Swiper {...swiperOptions} id="content-carousel-container-unq-team" className="swiper-container">
            {
              data.map(member => (
                  <SwiperSlide key={member.id}>
                
                  <div className="item mb-50">
                    <div className="img">
                      <img src={member.picture} alt="" />
                    </div>
                    <div className="info mt-20">
                      <span className="fz-12 opacity-8">{member.position}</span>
                      <h6 className="fz-18">{member.name}</h6>
                    </div>
                  </div>
                
                </SwiperSlide>
              ))
            }
            </Swiper>*/
          <div style={{ display: "flex", alignContent: "center", flexWrap: "wrap" }} className="responsive-container">
          <div className="item mb-50">
                    <div className="img">
                      <img src={"dark/assets/imgs/alejandro.avif"} style={{width:"60%"}} alt="" />
                    </div>
                    <div className="info mt-20">
                      <span className="fz-12 opacity-8">{"Desarrollador web y SEO/SEM"}</span>
                      <h6 className="fz-18">{"Alejandro Müller"}</h6>
                    </div>
                  </div>
            <div className="item mb-50">
                    <div className="img">
                      <img src={"dark/assets/imgs/javier.avif"} style={{width:"60%"}} alt="" />
                    </div>
                    <div className="info mt-20">
                      <span className="fz-12 opacity-8">{"Especialista en Marketing"}</span>
                      <h6 className="fz-18">{"Javier Rodriguez"}</h6>
                    </div>
                  </div>
            </div>

                  
        }
          
        </div>
        
      </div>
      </center>
    </section>
  )
}

export default Team