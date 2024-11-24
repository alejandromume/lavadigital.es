import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-creative">
      <div className="container ontop">
        <div className="row justify-content-center full-height">
          <div className="col-lg-3 d-flex align-items-end">
            <div className="img md-hide">
              <div className="img-assets1 parallax" data-speed="-0.01">
                <img src="/dark/assets/imgs/svg-assets/claw.svg" alt="" />
              </div>
              <img src="/dark/assets/imgs/header/c1.jpg" alt="" data-speed="0.01" className="parallax" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="caption text-center full-width md-mb50">
              <div className="mb-30">
                <svg className="svg-animation star" width="100" height="100" viewBox="0 0 100 100"
                  fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 1, "--transform": '30deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 2, "--transform": '60deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 3, "--transform": '90deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 4, "--transform": '120deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 5, "--transform": '150deg' }}></line>
                  <line y1="50" x2="100" y2="50" vectorEffect="non-scaling-stroke"
                    stroke="currentColor" style={{ "--index": 6, "--transform": '180deg' }}></line>
                </svg>
              </div>
              <h4 className="fw-300 mb-15">Digital agency studio</h4>
              <h1 className="fw-600 d-rotate wow">
                <span className="rotate-text">a creative digital</span>
                <span className="rotate-text">design studio</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img parallax" data-speed="0.01">
              <img src="/dark/assets/imgs/header/c2.jpg" alt="" />
            </div>
            <div className="mt-30 md-hide">
              <div className="text-center hover-this">
                <div className="circle-button hover-anim">
                  <div className="rotate-circle fz-30 text-u">
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path id="textcircle1"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                        </path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle1" textLength="900">Creative - Agency - Winner -</textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="in-circle text-center">
                    <h3>A <span className="fw-300 fz-30">+</span></h3>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h6>500k <span className="fz-14">Customers</span></h6>
                <p className="fz-13">Avg rating 4.8 makes us world best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header