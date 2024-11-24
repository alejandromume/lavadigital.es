import React from 'react';

function Intro() {
  return (
    <section className="intro-imgs section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img1 md-mb50">
              <img src="/dark/assets/imgs/about/sq1.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont md-mb50">
              <h6 className="mb-15"><span className="fz-14">01 . </span> Company</h6>
              <p>We craft premium digital work for web, mobile and experiential with creative agencies and
                global brands alike – putting passion, pride and plenty of elbow</p>

              <div className="stauts d-flex align-items-center mt-80">
                <div>
                  <h2>20k</h2>
                  <p className="fz-14">Satisfied Clients</p>
                </div>
                <div className="ml-auto">
                  <h2>500 +</h2>
                  <p className="fz-14">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img1 mt-30">
              <img src="/dark/assets/imgs/about/1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro