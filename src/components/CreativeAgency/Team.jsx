import React from 'react';
//= Data
import data from '@/data/CreativeAgency/team.json';

function Team() {
  return (
    <section className="team-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Selected Projects</h6>
                <h2 className="fz-70 fw-700">Featured Works</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {
            data.map((member, index) => (
              <div className="col-lg-4" key={member.id}>
                <div className={`item ${index !== data.length - 1 ? 'md-mb50' : ''}`}>
                  <div className="img">
                    <img src={member.picture} alt="" />
                  </div>
                  <div className="info d-flex align-items-center">
                    <div>
                      <div className="circle-50">
                        <img src={member.picture} alt="" className="circle-img" />
                      </div>
                    </div>
                    <div className="cont ml-20">
                      <span className="fz-12 opacity-8">{member.position}</span>
                      <h6 className="fz-16">{member.name}</h6>
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