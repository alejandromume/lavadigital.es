import React from 'react';

function Header() {
  return (
    <header className="land-header valign">
      <div className="container ontop">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="caption text-center">
              <h6 className="sub-title">
                <span className="icon-img-20 mr-10">
                  <img src="/landing-preview/img/star.svg" alt="" />
                </span>
                Awesome Template
              </h6>
              <h1>A <span>perfect</span> Place for Your Creative <span>Portfolio</span>.</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header