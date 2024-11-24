import React from 'react'

function Comments() {
  return (
    <div className="comments-post section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="text mb-60">
              <h3>Comments</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="item-box">
              <div className="row">
                <div className="col-lg-9">
                  <div className="flex">
                    <div className="user-img mr-30">
                      <div className="img circle-80 line-height-1">
                        <img src="/dark/assets/imgs/blog/author1.jpg" alt="" className="circle-img" />
                      </div>
                    </div>
                    <div className="cont">
                      <h6 className="line-height-1">Megan fox</h6>
                      <span className="fz-12 ls1 text-u mb-15">14 sept 2021, 07:00 AM</span>
                      <p className="fz-14">Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget
                        urna imperdiet, pellentesque nulla id, tempus mauris.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center">
                  <div className="replay-post ml-auto">
                    <a href="#0">
                      <span>Replay</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-box replayed">
              <div className="row">
                <div className="col-lg-9">
                  <div className="flex">
                    <div className="user-img mr-30">
                      <div className="img circle-80 line-height-1">
                        <img src="/dark/assets/imgs/blog/author1.jpg" alt="" className="circle-img" />
                      </div>
                    </div>
                    <div className="cont">
                      <h6 className="line-height-1">Megan fox</h6>
                      <span className="fz-12 ls1 text-u mb-15">14 sept 2021, 07:00 AM</span>
                      <p className="fz-14">Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget
                        urna imperdiet, pellentesque nulla id, tempus mauris.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center">
                  <div className="replay-post ml-auto">
                    <a href="#0">
                      <span>Replay</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments