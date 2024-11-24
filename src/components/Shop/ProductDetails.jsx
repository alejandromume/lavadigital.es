import React from 'react';

function ProductDetails() {
  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.classList.remove('current'));
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).classList.add('current');
  }

  return (
    <div className="row justify-content-center mt-100">
      <div className="col-lg-11">
        <div className="overview" id="tabs">
          <ul className="rest tab-links mb-30">
            <li className="item-link current" data-tab="tabs-1" onClick={openTab}>
              <h6>Description</h6>
            </li>
            <li className="item-link" data-tab="tabs-2" onClick={openTab}>
              <h6>Information</h6>
            </li>
            <li className="item-link" data-tab="tabs-3" onClick={openTab}>
              <h6>Reviews (1)</h6>
            </li>
          </ul>
          <div className="tab-cont">
            <div className="tab-content current" id="tabs-1">
              <div className="item">
                <div className="text">
                  <p className="mb-15">Percentage off promotions, discounts, or sale
                    markdowns are most customarily based on our own opinion of the
                    value of this product, which is not intended to reflect a former
                    price at which this product has sold in the recent past.</p>
                  <p>Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam eget neque eu ipsum laoreet
                    molestie nec vel nulla. Aenean iaculis, neque ultricies
                    efficitur ultricies, risus sapien dapibus ante, ac venenatis
                    nisi est nec sem. Vestibulum blandit tincidunt felis a cursus.
                    Donec eu tortor vitae metus scelerisque sollicitudin ut congue
                    est.</p>
                </div>
              </div>
            </div>
            <div className="tab-content" id="tabs-2">
              <div className="item info">
                <ul className="rest">
                  <li className="d-flex align-items-center mb-15">
                    <span className="text-u fw-500">Color</span>
                    <span className="line"></span>
                    <span className="ml-auto">Blue, Gray, Green, Red</span>
                  </li>
                  <li className="d-flex align-items-center mb-15">
                    <span className="text-u fw-500">Size</span>
                    <span className="line"></span>
                    <span className="ml-auto">Large, Medium, Small</span>
                  </li>
                  <li className="d-flex align-items-center mb-15">
                    <span className="text-u fw-500">Material</span>
                    <span className="line"></span>
                    <span className="ml-auto">Cotton, Lather, Silk</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content" id="tabs-3">
              <div className="item reviews">
                <div className="reviews-area">
                  <div className="d-flex">
                    <div>
                      <div className="img circle-100">
                        <img src="/dark/assets/imgs/testim/1.jpg" alt=""
                          className="circle-img" />
                      </div>
                    </div>
                    <div className="cont ml-30">
                      <div className="rate fz-12 opacity-7 mb-10">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h6 className="fz-17 fw-400">Evie Howarth – <span
                        className="fz-14 opacity-7">February 10, 2023</span>
                      </h6>
                      <p>Aenean iaculis, neque ultricies efficitur ultricies,
                        risus sapien dapibus ante, ac venenatis nisi est nec
                        sem. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vestibulum ut pellentesque ante.</p>
                    </div>
                  </div>
                </div>
                <div className="add-review mt-50">
                  <div>
                    <h6>Add a review</h6>
                    <p className="fz-14">Your email address will not be published.
                      Required fields are marked *</p>
                  </div>
                  <div className="d-flex align-items-center mt-30">
                    <div>
                      <p className="fz-13">Your Rating</p>
                    </div>
                    <div>
                      <div className="star-rating ml-10">
                        <input id="star-5" type="radio" name="rating"
                          defaultValue="star-5" />
                        <label htmlFor="star-5" title="5 stars">
                          <i className="active fas fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating"
                          defaultValue="star-4" />
                        <label htmlFor="star-4" title="4 stars">
                          <i className="active fas fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating"
                          defaultValue="star-3" />
                        <label htmlFor="star-3" title="3 stars">
                          <i className="active fas fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating"
                          defaultValue="star-2" />
                        <label htmlFor="star-2" title="2 stars">
                          <i className="active fas fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating"
                          defaultValue="star-1" />
                        <label htmlFor="star-1" title="1 star">
                          <i className="active fas fa-star" aria-hidden="true"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form mt-50">
                    <form action="contact.php">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group mb-30">
                            <input type="text" name="name" placeholder="Your Name*" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-30">
                            <input type="email" name="email" placeholder="Your Email*" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea name="comment" placeholder="Your Review*"></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="checkbox mt-10">
                            <input type="checkbox" id="saveInfo" name="userinfo" defaultValue="userinfo" />
                            <label htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center mt-40">
                            <button type="submit" className="butn butn-md butn-bord">
                              <span>Submit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default ProductDetails