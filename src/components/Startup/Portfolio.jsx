import React from 'react';
//= Data
import data from '@/data/Startup/portfolio.json';

function Portfolio() {
  return (
    <section className="portfolio section-padding">
      <div className="container">
        <div className="sec-head md-mb80">
          <div className="row">
            <div className="col-lg-4">
              <h6><span className="fz-14">04 . </span> Our Portfolio</h6>
            </div>
            <div className="col-lg-5 offset-lg-3">
              <div className="text">
                <h3 className="lg-text text-u">Case Studies</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="item md-mb80">
              <div className="o-hidden">
                <div className="img imago wow">
                  <img src={data[0].image} alt="" />
                </div>
              </div>
              <div className="cont mt-30 d-flex">
                <div>
                  <h6 className="line-height-1">From our gallery</h6>
                  <p>{data[0].type}</p>
                </div>
                <div className="ml-auto">
                  <p className="fz-14">© {data[0].year}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="item full-width">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="o-hidden">
                    <div className="img imago wow">
                      <img src={data[1].image} alt="" />
                    </div>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">From our gallery</h6>
                      <p>{data[1].type}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="fz-14">© {data[1].year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="item mt-80 full-width">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="o-hidden">
                    <div className="img imago wow">
                      <img src={data[2].image} alt="" />
                    </div>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">From our gallery</h6>
                      <p>{data[2].type}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="fz-14">© {data[2].year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item mt-80">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="o-hidden">
                    <div className="img imago wow">
                      <img src={data[3].image} alt="" />
                    </div>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">From our gallery</h6>
                      <p>{data[3].type}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="fz-14">© {data[3].year}</p>
                    </div>
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

export default Portfolio