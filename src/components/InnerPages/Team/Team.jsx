import React from 'react';
//= Data
import data from '@/data/InnerPages/Team/team.json';

function Team() {
  return (
    <section className="team-crev section-padding sub-bg">
      <div className="container">
        <div className="row md-marg">
          {
            data.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <div className="swiper-slide mb-50">
                  <div className="item">
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="info">
                      <div className="main-marq team-position">
                        <div className="slide-har st1 non-strok">
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.position}</h4>
                                </div>
                              ))
                            }
                          </div>
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.position}</h4>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                      <div className="main-marq team-name">
                        <div className="slide-har st1 non-strok">
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.name}</h4>
                                </div>
                              ))
                            }
                          </div>
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.name}</h4>
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
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team