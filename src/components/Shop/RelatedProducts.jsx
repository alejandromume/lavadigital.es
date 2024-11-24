import React from 'react';
//= Data
import data from '@/data/Shop/related-products.json';

function RelatedProducts() {
  return (
    <div className="row justify-content-center mt-100">
      <div className="col-lg-11">
        <div className="main-shop">
          <div className="shop-products">
            <div>
              <h4>Related products</h4>
            </div>
            <div className="row">
              {
                data.map(item => (
                  <div className="col-lg-3 col-md-6" key={item.id}>
                    <div className="item mt-50">
                      <div className="img">
                        <img src={item.image} alt="" />
                        <a href="#0" className="add-cart">Add to Cart</a>
                        <span className="fav"><i className="far fa-heart"></i></span>
                      </div>
                      <div className="cont">
                        <div className="rate">
                          {
                            new Array(item.stars).fill().map((_, i) => <i className="fas fa-star" key={i}></i>)
                          }
                          {
                            new Array(5 - item.stars).fill().map((_, i) => <i className="far fa-star" key={i}></i>)
                          }
                        </div>
                        <h6>{item.name}</h6>
                        <h5>${item.price}</h5>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts