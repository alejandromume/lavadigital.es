import React from 'react';
//= Data
import data from '@/data/DigitalAgency/testimonials.json';

function Testimonials({ mainColor }) {
  return (
    <section className="testim-vrt sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont">
              <div>
                <h6 className="sub-title mb-15">Since From 2008</h6>
                <h3>Keep pushing forward. We've got your back.</h3>
                <div className="text mt-10 pb-30 bord-thin-bottom">
                  <p>Things go wrong have questions. We’ve understand. So we have people</p>
                </div>
                <div className="stauts d-flex mt-20">
                  <div className="item d-flex align-items-center mt-30">
                    <h2 className="mr-20">12k</h2>
                    <p className="fz-14">Happy Users <br /> Around World</p>
                  </div>
                  <div className="item d-flex align-items-center ml-auto mt-30">
                    <h2 className="mr-20">150k</h2>
                    <p className="fz-14">Projects <br /> Already Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div>
              <div className="main-marqv">
                <div className="slide-vertical st1">
                  <div className="box">
                    {
                      data.map(item => (
                        <div className="item radius-30 mt-30" key={item.id}>
                          <div className="cont mb-40">
                            <div className="rate-stars mb-30 fz-12">
                              <span className={`rate ${mainColor ? 'main-color' : 'main-color2'}`}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </div>
                            <p className="fw-400">{item.content}</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="img circle-80">
                                <img src={`/dark/${item.image}`} alt="" className="circle-img" />
                              </div>
                            </div>
                            <div className="ml-30">
                              <div className="info">
                                <h6>{item.author}</h6>
                                <span className={`${mainColor ? 'main-color' : 'main-color2'} sub-title`}>{item.position}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="box">
                    {
                      data.map(item => (
                        <div className="item radius-30 mt-30" key={item.id}>
                          <div className="cont mb-40">
                            <div className="rate-stars mb-30 fz-12">
                              <span className="rate ${mainColor ? 'main-color' : 'main-color2'}">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </div>
                            <p className="fw-400">{item.content}</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div>
                              <div className="img circle-80">
                                <img src={`/dark/${item.image}`} alt="" className="circle-img" />
                              </div>
                            </div>
                            <div className="ml-30">
                              <div className="info">
                                <h6>{item.author}</h6>
                                <span className="${mainColor ? 'main-color' : 'main-color2'} sub-title">{item.position}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
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

export default Testimonials