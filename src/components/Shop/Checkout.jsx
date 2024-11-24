import React from 'react';

function Checkout({ lightMode }) {
  return (
    <section className={`shop-checkout ${lightMode ? 'light' : ''} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="order-form md-mb50">
              <h4 className="mb-40">Billing Details</h4>
              <form action="contact.php">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">First Name *</label>
                      <input type="text" name="first_name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">last Name *</label>
                      <input type="text" name="last_name" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Your Email *</label>
                      <input type="email" name="email" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Country *</label>
                      <input type="text" name="country" required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">City / Town *</label>
                      <input type="text" name="city" required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">Area *</label>
                      <input type="text" name="area" required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">Postal Code *</label>
                      <input type="text" name="postal_code" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Address *</label>
                      <input type="text" name="address" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Phone *</label>
                      <input type="text" name="phone" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Company Name</label>
                      <input type="text" name="company_name" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="checkout-order-info">
              <h4 className="mb-40">Your Order</h4>
              <div>
                <ul className="rest">
                  <li className="mb-5">
                    <div className="d-flex align-items-center">
                      <div>
                        <p>Men Hooded</p>
                      </div>
                      <div className="ml-auto">
                        <h5 className="fz-18">$130.00</h5>
                      </div>
                    </div>
                  </li>
                  <li className="mb-5">
                    <div className="d-flex align-items-center">
                      <div>
                        <p>Wooden Coffee Table</p>
                      </div>
                      <div className="ml-auto">
                        <h5 className="fz-18">$85.00</h5>
                      </div>
                    </div>
                  </li>
                  <li className="mb-15">
                    <div className="d-flex align-items-center">
                      <div>
                        <p>Colored Belt Bag</p>
                      </div>
                      <div className="ml-auto">
                        <h5 className="fz-18">$60.00</h5>
                      </div>
                    </div>
                  </li>
                  <li className="pt-10 bord-thin-top">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6>Subtotal</h6>
                      </div>
                      <div className="ml-auto">
                        <h5 className="main-color4 fz-20">$275.00</h5>
                      </div>
                    </div>
                  </li>
                  <li className="pt-10 bord-thin-top bord-thin-bottom">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6>Total</h6>
                      </div>
                      <div className="ml-auto">
                        <h5 className="main-color4 fz-20">$275.00</h5>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="text mt-40">
                  <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#0">privacy policy</a>.</p>
                </div>
                <div className="mt-30">
                  <button type="submit" className="main-colorbg4 butn butn-md butn-bg text-dark">
                    <span className="text-u fw-600">Place Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout