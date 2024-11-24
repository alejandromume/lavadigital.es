import React, { useState, useEffect } from 'react';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Block({ lightMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="block-img sub-bg">
      <div className="container section-padding position-re">
        <div className="half-img-left bg-img md-hide" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/a1.svg`}></div>
        <div className="row justify-content-around">

          <div className="col-lg-5 offset-lg-6">
            <div className="cont">
              <div className="vid-circle main-bg mb-40">
                <a href="https://youtu.be/AzwC6umvd1s" className="vid" onClick={openVideo}>
                  <span className="icon">
                    <svg className="default" width="13" height="20" viewBox="0 0 13 20"
                      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20L13 10L0 0V20Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="text">
                <h3>We grow brands through bold & strategic creative</h3>
              </div>
              <div className="accordion bord mt-40">

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Website & Mobile App Design</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                  </div>
                </div>

                <div className="item mb-15 active wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Motion Graphics & Animation</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info active">
                    <p className="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">User Experience</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shap1 opacity-4">
        <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/shap1.png`} alt="" />
      </div>
      <div className="shap2 opacity-4">
        <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/shap2.png`} alt="" />
      </div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </section>
  )
}

export default Block