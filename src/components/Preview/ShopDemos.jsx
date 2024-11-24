import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Preview/shop-demos.json';

function ShopDemos() {
  return (
    <section className="shop-demos section-padding sub-bg">
      <div className="container">
        <div className="sec-lg-head text-center mb-50">
          <h2 className="fz-50 d-rotate wow">
            <span className="rotate-text">Carefully crafted.</span>
            <span className="rotate-text">Woocommerce Demos.</span>
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-3 col-md-6" key={item.id}>
                <div className="item">
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <h6>{item.title}</h6>
                  <Link href={item.link} target="_blank"></Link>
                  {
                    item.new &&
                    <span className="new">New</span>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ShopDemos