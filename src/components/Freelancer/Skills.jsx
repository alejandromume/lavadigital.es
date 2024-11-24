import React from 'react';
import Link from 'next/link';

function Skills({ lightMode }) {
  return (
    <section className="skills-exp section-padding sub-bg" data-scroll-index="4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-lg-head mb-80">
              <div className="position-re">
                <h6 className="dot-titl-non mb-10">Skills & Experience</h6>
                <h2 className="fz-50">My Experience</h2>
              </div>
            </div>
            <div className="skill-item d-flex justify-content-between md-mb50">
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/figma.png`} alt="" />
                </div>
                <span className="mt-15">Figma</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/wordpress.png`} alt="" />
                </div>
                <span className="mt-15">WordPress</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/angular.png`} alt="" />
                </div>
                <span className="mt-15">Angular</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/webflow.png`} alt="" />
                </div>
                <span className="mt-15">Webflow</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="exp-items full-width">
              <div className="item d-flex pb-30 pt-30 mb-30 bord-thin-top bord-thin-bottom">
                <div className="title">
                  <h6>Android Studio</h6>
                  <p className="fz-12">Junior Product Designer</p>
                </div>
                <div className="date ml-auto text-right">
                  <span className="icon">
                    <Link href="/dark/page-about">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </span>
                  <p className="fz-12">2014 - 2015</p>
                </div>
              </div>
              <div className="item d-flex pb-30 mb-30 bord-thin-bottom">
                <div className="title">
                  <h6>Slack</h6>
                  <p className="fz-12">UI/UX Designer & Developer</p>
                </div>
                <div className="date ml-auto text-right">
                  <span className="icon">
                    <Link href="/dark/page-about">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </span>
                  <p className="fz-12">2015 - 2019</p>
                </div>
              </div>
              <div className="item d-flex pb-30 bord-thin-bottom">
                <div className="title">
                  <h6>Apple</h6>
                  <p className="fz-12">ios Developer</p>
                </div>
                <div className="date ml-auto text-right">
                  <span className="icon">
                    <Link href="/dark/page-about">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </span>
                  <p className="fz-12">2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills