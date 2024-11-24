import React from 'react';
import Link from 'next/link';

function Awards({ lightMode }) {
  return (
    <div className="panel awards-list main-bg">
      <div className="container mt-60">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <div className="position-re">
                <div className="fz-80">
                  <h6 className="dot-titl mb-10">ACHIEVEMENTS</h6>
                  <h2 className="fz-70 fw-700">Our Awards</h2>
                </div>
                <div className="text mt-15">
                  <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
                </div>
                <div className="exp-box sub-bg mt-50 inline">
                  <div className="d-flex align-items-center">
                    <div className="numb">
                      <h2 className="fz-60">20</h2>
                    </div>
                    <div className="cont ml-30">
                      <h6 className="sub-title">Years of <br /> Experience</h6>
                    </div>
                  </div>
                  <div className="img-icon">
                    <img src="/dark/assets/imgs/svg-assets/star.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="cont">
              <ul className="rest">
                <li className="d-flex">
                  <div>
                    <h6>Independent of the year nomination</h6>
                    <span className="fz-14 opacity-8"><span className="date">2020</span> Awwwards</span>
                  </div>
                  <div className="ml-auto">
                    <Link href="/dark/page-about" className="arrow-icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill={lightMode ? '#fff' : '#000'}></path>
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <h6>Awwwards Site of the Day</h6>
                    <span className="fz-14 opacity-8"><span className="date">2020</span> Awwwards</span>
                  </div>
                  <div className="ml-auto">
                    <Link href="/dark/page-about" className="arrow-icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill={lightMode ? '#fff' : '#000'}></path>
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <h6>CSSDA Website of the Day</h6>
                    <span className="fz-14 opacity-8"><span className="date">2020</span> Awwwards</span>
                  </div>
                  <div className="ml-auto">
                    <Link href="/dark/page-about" className="arrow-icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill={lightMode ? '#fff' : '#000'}></path>
                      </svg>
                    </Link>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <h6>Sydney Design Awards – Silver</h6>
                    <span className="fz-14 opacity-8"><span className="date">2020</span> Awwwards</span>
                  </div>
                  <div className="ml-auto">
                    <Link href="/dark/page-about" className="arrow-icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill={lightMode ? '#fff' : '#000'}></path>
                      </svg>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards;