import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h6 className="sub-title">{data.subTitle}</h6>
              <h1 className="fz-70 fw-100" style={{fontFamily: "Satoshi-Light"}}>Llevamos tu negocio al <span className='gradient'>siguiente nivel</span></h1>
            </div>
          </div>
        </div>
        
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header