import React, { useState, useEffect } from 'react';
import { Controller, EffectFade, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductInfo() {
  const [loadSwiper, setloadSwiper] = useState(false);
  const [galleryThumbs, setGalleryThumbs] = useState(null);

  const galleryThumbsOptions = {
    modules: [Controller],
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    onSwiper: function (swiper) {
      setGalleryThumbs(swiper)
    }
  }

  const galleryTopOptions = {
    modules: [EffectFade, Controller, Thumbs],
    spaceBetween: 0,
    effect: 'fade',
    speed: 1000
  }

  useEffect(() => {
    setloadSwiper(true);
  }, []);

  function decreaseCount(event) {
    let input = event.currentTarget.parentElement.querySelector('input');
    if (parseInt(input.value) === 1) return;
    input.value = parseInt(input.value) - 1;
  }

  function increaseCount(event) {
    let input = event.currentTarget.parentElement.querySelector('input');
    input.value = parseInt(input.value) + 1;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <div className="img-preview md-mb50">
          <div className="gallery-top">
            {
              galleryThumbs &&
              <Swiper {...galleryTopOptions} thumbs={{ swiper: galleryThumbs }}>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/2.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/4.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            }
          </div>
          <div className="gallery-thumb mt-10">
            {
              loadSwiper &&
              <Swiper {...galleryThumbsOptions}>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/2.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img">
                    <img src="/dark/assets/imgs/shop/4.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            }
          </div>
        </div>
      </div>
      <div className="col-lg-6 offset-lg-1">
        <div className="product-info">
          <div className="top-info">
            <h6 className="main-color4">$130.00</h6>
            <div className="d-flex align-items-center">
              <div>
                <h4 className="line-height-1">Men Hooded</h4>
              </div>
              <div className="ml-auto">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="rate fz-12 opacity-7">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <div className="ml-10">
                    <p className="fz-13">(1 Review)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text mt-30">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
                pellentesque ante. Quisque at viver neque. Duis consectetur nisl at
                vehicular.</p>
            </div>
            <div className="dot-list mt-30">
              <ul className="rest">
                <li className="mb-15">Adjustable drawstrings at the hood</li>
                <li>Welt pockets at waist</li>
              </ul>
            </div>
          </div>
          <div className="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom">
            <div className="d-flex align-items-center">
              <div>
                <div className="counter">
                  <span className="down" onClick={decreaseCount}>-</span>
                  <input type="text" defaultValue="1" />
                  <span className="up" onClick={increaseCount}>+</span>
                </div>
              </div>
              <div className="ml-auto">
                <a href="#0" className="butn butn-md butn-bord">
                  <span className="text-u fz-13">Add To Cart</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-40">
            <ul className="rest">
              <li className="d-flex align-items-center mb-15">
                <strong>SKU :</strong>
                <span className="ml-10">8552635</span>
              </li>
              <li className="d-flex align-items-center mb-15">
                <strong>CATEGORY :</strong>
                <span className="ml-10"><a href="#0">Clothes</a></span>
              </li>
              <li className="d-flex align-items-center">
                <strong>TAG :</strong>
                <span className="ml-10"><a href="#0">Men</a> , <a href="#0">Women</a> , <a
                  href="#0">Jacket</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo