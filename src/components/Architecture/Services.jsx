import React from 'react';
//= Data
import data from '@/data/Architecture/services.json';

function Services({ lightMode }) {
  return (
    <section className="serv-box section-padding pt-0">
      <div className="container">
        <div className="sec-leter-head mb-80">
          <div className="d-flex align-items-center">
            <div className="leter">
              <h4>S</h4>
            </div>
            <div className="line"></div>
          </div>
          <div className="title">
            <h6 className="sub-title">Services.</h6>
          </div>
        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-3 col-md-6" key={item.id}>
                <div className="serv-item md-mb50">
                  <div className="icon-img-60 mb-40">
                    <img src={`/${lightMode ? 'light' : 'dark'}${item.image}`} alt="" />
                  </div>
                  <h5 className="mb-20">{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services