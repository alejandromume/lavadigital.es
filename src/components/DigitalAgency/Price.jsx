import React from 'react';
import Link from 'next/link';

function Price() {
  return (
    <section className="price-hr">
      <div className="container section-padding pt-20 bord-thin-bottom">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont full-width md-mb50">
              <div>
                <h6 className="sub-title mb-15">Over 150.000+ Clients</h6>
                <h3>Affordable pricing. <br /> Easy scaling.</h3>
                <div className="text mt-30 pt-30 bord-thin-top">
                  <p>Things go wrong have questions. We’ve understand. So we have people</p>
                </div>
                <ul className="rest list-arrow mt-30">
                  <li>
                    <span className="icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <h6 className="inline fz-18">Amazing communication.</h6>
                  </li>
                  <li className="mt-10">
                    <span className="icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <h6 className="inline fz-18">Best trendinf designing experience.</h6>
                  </li>
                  <li className="mt-10">
                    <span className="icon">
                      <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <h6 className="inline fz-18">Email & Live chat.</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <div className="item sub-bg radius-10 d-flex mb-30">
                <div className="type">
                  <h5 className="fw-600">Advanced</h5>
                  <h6 className="fz-14">14 days free</h6>
                </div>
                <div className="cont ml-30">
                  <ul className="dot-list rest">
                    <li className="mb-10">Guarenteed quality control</li>
                    <li className="mb-10">Top quality service</li>
                    <li>Best experts at your lease</li>
                  </ul>
                </div>
                <div className="mount ml-auto text-center">
                  <h3><span className="fz-20">$</span> 19</h3>
                  <div>
                    <Link href="/dark/page-contact" className="butn butn-md butn-bord radius-30">
                      <span className="fz-13">Sign Up</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item main-colorbg2 radius-10 text-dark d-flex">
                <div className="type">
                  <h5 className="fw-600">Enterprise</h5>
                  <h6 className="fz-14">7 days free</h6>
                </div>
                <div className="cont ml-30">
                  <ul className="dot-list rest">
                    <li className="mb-10">Guarenteed quality control</li>
                    <li className="mb-10">Top quality service</li>
                    <li>Best experts at your lease</li>
                  </ul>
                </div>
                <div className="mount ml-auto text-center">
                  <h3><span className="fz-20">$</span> 49</h3>
                  <div>
                    <Link href="/dark/page-contact" className="butn butn-md butn-bord text-dark radius-30">
                      <span className="fz-13">Sign Up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price