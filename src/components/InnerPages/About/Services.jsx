import React from 'react';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Data
import data from '@/data/InnerPages/About/services.json';

function Services({ lightMode }) {
  return (
    <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl-non colorbg-3 mb-10">PRINCIPIOS</h6>
                <h2 className="fz-60 fw-700">Nuestros principios</h2>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="serv-item md-mb50 radius-10">
                  <div className="icon-img-60 mb-40">
                    <img src={`/${lightMode ? 'light' : 'dark'}/${item.image}`} alt="" />
                  </div>
                  <h5 className="mb-30 pb-30 bord-thin-bottom"><StatementSplitter statement={item.title} /></h5>
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