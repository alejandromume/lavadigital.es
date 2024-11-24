import React from 'react';

function Intro() {
  return (
    <section className="intro-imgs section-padding">
      <div className="container">
        <div className="sec-leter-head mb-80">
          <div className="d-flex align-items-center">
            <div className="leter">
              <h4>A</h4>
            </div>
            <div className="line"></div>
          </div>
          <div className="title">
            <h6 className="sub-title">About Us.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 valign">
            <div className="img1 to-up full-width md-mb50">
              <img src="/dark/assets/imgs/arch/intro/1.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width md-mb50">
              <h3 className="mb-15">Geekfolio <br /> Architects studio</h3>
              <p>Through a unique combination of engineering, construction and design disciplines and
                expertise, Concor delivers world class infrastructure.</p>

              <div className="stauts d-flex align-items-center mt-40">
                <div>
                  <h4>20k</h4>
                  <p>Satisfied Clients</p>
                </div>
                <div className="ml-auto">
                  <h4>500+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img1">
              <img src="/dark/assets/imgs/arch/intro/2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro