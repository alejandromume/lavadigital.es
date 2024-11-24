import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function CallToAction({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="panel call-action-center sub-bg">
      <div className="container mt-60">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="sec-lg-head text-center">
              <h6 className="dot-titl mb-10">Call to Action</h6>
              <h2 className="fz-70 fw-700">
                <span>Have a project in mind?</span>
                <br />
                <span>Let’s get to work.</span>
              </h2>
              <Link href={`/${lightMode ? 'light' : 'dark'}/page-contact`}
                className="butn-circle colorbg-2 d-flex align-items-center text-center mt-50 m-auto">
                <div className="full-width">
                  <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                  </svg></span>
                  <span className="full-width">Get In Touch</span>
                </div>
                <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/circle-star.svg`} alt="" className="circle-star" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </div>
  )
}

export default CallToAction