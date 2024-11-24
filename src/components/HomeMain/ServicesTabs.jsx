import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function ServicesTabs({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
  }

  return (
    <section className="services-tab revers section-padding pt-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-12">
            <div className="full-width">
              <div className="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom">
                <div className="slide-har st1">
                  <div className="box">
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                  </div>
                  <div className="box">
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                    <div className="item">
                      <h4 className="d-flex align-items-center fz-70"><span>Amazing Design</span>
                        <span className="fz-50 ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" id="tabs">
          <div className="col-lg-5 valign">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80 wow fadeIn">
                <h6 className="dot-titl-non mb-15">Services</h6>
                <p>We help you to go online and increase your conversion rate Better design for your digital products. </p>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <ul className="rest">
                    <li className="item-link current mb-15 pb-15 bord-thin-bottom" data-tab="tabs-1" onClick={openTab}><span>01</span> UI/UX Design</li>
                    <li className="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-2" onClick={openTab}><span>02</span> Branding</li>
                    <li className="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-3" onClick={openTab}><span>03</span> Development</li>
                    <li className="item-link" data-tab="tabs-4" onClick={openTab}><span>04</span> Marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="serv-tab-cont">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/4.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                    <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/abstact-BG.png`}></div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/2.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/1.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/3.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/2.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/1.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
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

export default ServicesTabs