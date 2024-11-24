import React, { useState } from 'react';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';
//= Data
import data from '@/data/app-data.json';

function Video({ lightMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <div className="row lg-marg">
      <div className="col-lg-7 valign">
        <div className="clients md-mb50">
          <div className="mb-20">
            <h6 className="sub-title mb-15">Check Out All</h6>
            <h3>Successful Our Reputation</h3>
          </div>
          <div className="row">
            <div className="col-md-4 col-6">
              <div className="item mt-30 wow fadeIn" data-wow-delay=".6s">
                <div className="img">
                  <a href={data.author_link}>
                    <img src={`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/01.png`} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="item mt-30 wow fadeIn" data-wow-delay=".6s">
                <div className="img">
                  <a href={data.author_link}>
                    <img src={`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/02.png`} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="item mt-30 wow fadeIn" data-wow-delay=".8s">
                <div className="img">
                  <a href={data.author_link}>
                    <img src={`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/03.png`} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="item mt-30 wow fadeIn" data-wow-delay=".3s">
                <div className="img">
                  <a href={data.author_link}>
                    <img src={`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/04.png`} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="item mt-30 wow fadeIn" data-wow-delay=".4s">
                <div className="img">
                  <a href={data.author_link}>
                    <img src={`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/05.png`} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="item mt-30 wow fadeIn" data-wow-delay=".7s">
                <div className="img">
                  <a href={data.author_link}>
                    <img src={`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/06.png`} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="img-vid">
          <img src="/dark/assets/imgs/about/1.jpg" alt="" />
          <div className="rota-vid">
            <a href="https://youtu.be/AzwC6umvd1s" className="vid" onClick={openVideo}>
              <div className="circle-button in-bord">
                <div className="rotate-circle fz-30 text-u">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                      </path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900">Explore More - Explore More -</textPath>
                    </text>
                  </svg>
                </div>
                <div className="arrow text-dark">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </div>
  )
}

export default Video