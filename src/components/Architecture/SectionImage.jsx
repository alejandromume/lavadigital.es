import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function SectionImage() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="sec-img section-padding bg-img" data-background="/dark/assets/imgs/arch/slid/2.jpg" data-overlay-dark="5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="expr-box md-mb50">
              <h6 className="text-u fz-16 mb-40">Europe's Leading <br /> Architectural</h6>
              <div>
                <p className="fz-14 fw-600 line-height-1 mb-15">Years <br /> Experience</p>
                <h2 className="fz-80 line-height-1">25</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="cont">
              <h3 className="text-u">Design With <span className="main-color">Community</span> <br /> In Mind.</h3>
              <p>Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world className infrastructure.</p>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          <div className="col-lg-7 offset-lg-5">
            <div className="numbers">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="item sm-mb50">
                    <h4 className="fz-40">450</h4>
                    <h6 className="sub-title ls2">Projects</h6>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item sm-mb50">
                    <h4 className="fz-40">70</h4>
                    <h6 className="sub-title ls2">Clients</h6>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item">
                    <h4 className="fz-40">20</h4>
                    <h6 className="sub-title ls2">Countries</h6>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="item">
                    <h4 className="fz-40">7</h4>
                    <h6 className="sub-title ls2">Awards</h6>
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

export default SectionImage