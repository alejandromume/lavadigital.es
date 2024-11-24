import React, { useState } from 'react';
import Link from 'next/link';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';
//= Data
import data from '@/data/Startup/process.json';

function Process() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <div className="intro-feat section-padding ontop">
      <div className="container section-padding pb-0 bord-thin-top bord-dark">
        <div className="row justify-content-around">
          <div className="col-lg-6">
            <div className="cont md-mb50">
              <h6 className="mb-15"><span className="fz-14">03 . </span>Our Process</h6>
              <h3 className="mb-30">We help you to go online and increase your <span className="sub-font">Conversion rate.</span></h3>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="text">
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="bg-img full-width d-flex align-items-center justify-content-center" data-background="/dark/assets/imgs/background/13.jpg">
              <div>
                <div className="play-button">
                  <a href="https://youtu.be/AzwC6umvd1s" className="btn vid" onClick={openVideo}>
                    <div className="butn-ply">
                      <svg width="80px" height="80px" viewBox="0 0 80 80" preserveAspectRatio="none">
                        <circle className="circle" cx="40" cy="40" r="38" stroke="#c9f31d" strokeWidth="2" fill="none"></circle>
                      </svg>
                      <i className="fas fa-play"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="process-crev mt-100">
          <div className="row">
            {
              data.map(item => (
                <div className="item col-lg-3 col-md-6" key={item.id}>
                  <h6 className="mb-10">{item.number} .</h6>
                  <h5 className="fw-600">{item.title}</h5>
                  <p>{item.text}</p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-12 text-u">Read More</span>
                    <span className="circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </div>
  )
}

export default Process