import React from 'react';
import Link from 'next/link';

function Cart({ lightMode }) {
  function decreaseCount(event) {
    let input = event.currentTarget.parentElement.querySelector('input');
    if (parseInt(input.value) === 1) return;
    input.value = parseInt(input.value) - 1;
  }

  function increaseCount(event) {
    let input = event.currentTarget.parentElement.querySelector('input');
    input.value = parseInt(input.value) + 1;
  }

  return (
    <section className={`shop-cart ${lightMode ? 'light' : ''} section-padding`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-column="Product">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img icon-img-80">
                            <img src="/dark/assets/imgs/shop/5.jpg" alt="" />
                          </div>
                        </div>
                        <div className="ml-30">
                          <h6>Men Hooded</h6>
                        </div>
                      </div>
                    </td>
                    <td data-column="price">
                      <h5 className="main-color4 fz-18">$130.00</h5>
                    </td>
                    <td data-column="	Quantity">
                      <div className="counter">
                        <span className="down" onClick={decreaseCount}>-</span>
                        <input type="text" defaultValue="1" />
                        <span className="up" onClick={increaseCount}>+</span>
                      </div>
                    </td>
                    <td data-column="Subtotal">
                      <h5 className="main-color4 fz-18">$130.00</h5>
                    </td>
                    <td className="remove">
                      <a href="#0">
                        <span className="pe-7s-close"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-column="Product">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img icon-img-80">
                            <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="ml-30">
                          <h6>Men Hooded</h6>
                        </div>
                      </div>
                    </td>
                    <td data-column="price">
                      <h5 className="main-color4 fz-18">$130.00</h5>
                    </td>
                    <td data-column="	Quantity">
                      <div className="counter">
                        <span className="down" onClick={decreaseCount}>-</span>
                        <input type="text" defaultValue="1" />
                        <span className="up" onClick={increaseCount}>+</span>
                      </div>
                    </td>
                    <td data-column="Subtotal">
                      <h5 className="main-color4 fz-18">$130.00</h5>
                    </td>
                    <td className="remove">
                      <a href="#0">
                        <span className="pe-7s-close"></span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row mt-80">
              <div className="col-lg-6">
                <div className="coupon mt-40">
                  <h4>Discount</h4>
                  <p className="fz-13">Enter your coupon code if you have one.</p>
                  <form action="contact.php">
                    <div className="form-group d-flex mt-30">
                      <input type="text" name="coupon_code" />
                      <button type="submit" className="butn butn-md butn-bord">
                        <span>Apply</span>
                      </button>
                    </div>
                    <span className="fz-13 opacity-7 mt-10">Coupon code</span>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-2">
                <div className="total mt-40">
                  <h4>Cart totals</h4>
                  <ul className="rest mt-30">
                    <li className="mb-5">
                      <h6>Subtotal : <span className="fz-16 main-color4 ml-10">$130.00</span></h6>
                    </li>
                    <li>
                      <h6>Total : <span className="fz-16 main-color4 ml-10">$260.00</span></h6>
                    </li>
                  </ul>
                  <Link href="/dark/shop-checkout" className={`${lightMode ? 'main-colorbg4' : 'bg-white'} butn butn-md butn-bg text-dark mt-30`}>
                    <span className="text-u fz-13 fw-600">Proceed to checkout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart