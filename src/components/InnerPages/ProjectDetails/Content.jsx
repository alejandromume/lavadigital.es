import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function Content() {
  useEffect(() => {
    parallaxie('.back-image.parallaxie', 0.4);
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="text">
              <h3>We create everything digital, printable and analytical.</h3>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="text">
              <p className="mb-50">Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="rest dot-list">
                    <li className="mb-15">Brand Development</li>
                    <li className="mb-15">Art Direction</li>
                    <li className="mb-15">Marketing Strategy</li>
                    <li className="mb-15">Mobile App Design</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="rest dot-list">
                    <li className="mb-15">Content Management</li>
                    <li className="mb-15">System & Guides</li>
                    <li className="mb-15">Graphic Design</li>
                    <li className="mb-15">Brand Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg mt-50">
          <div className="col-lg-4">
            <div className="img mb-50">
              <img src="/dark/assets/imgs/works/projects/1/2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img mb-50">
              <img src="/dark/assets/imgs/works/projects/1/3.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img mb-50">
              <img src="/dark/assets/imgs/works/projects/1/4.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="back-image bg-img parallaxie" data-background="/dark/assets/imgs/works/projects/1/5.jpg"></div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mt-50">
              <h5 className="fw-200">Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience.</h5>
            </div>
          </div>
        </div>

        <div className="row mt-100">
          <div className="col-lg-4">
            <div className="img md-mb50">
              <img src="/dark/assets/imgs/works/projects/1/3.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="text">
              <h5 className="fw-200">Working collaboratively with brands and agencies worldwide. Designing and developing websites and applications with a focus on interaction, motion and visual experience.</h5>
              <ul className="rest list-arrow mt-50">
                <li>
                  <span className="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <h6 className="inline fz-18">Amazing communication.</h6>
                </li>
                <li className="mt-10">
                  <span className="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <h6 className="inline fz-18">Best trendinf designing experience.</h6>
                </li>
                <li className="mt-10">
                  <span className="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <h6 className="inline fz-18">Email &amp; Live chat.</h6>
                </li>
                <li className="mt-10">
                  <span className="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <h6 className="inline fz-18">Amazing communication.</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content