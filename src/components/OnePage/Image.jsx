import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function Image() {
  useEffect(() => {
    parallaxie('.back-image.parallaxie');
  }, []);

  return (
    <div className="back-image states bg-img parallaxie" data-background="/dark/assets/imgs/background/13.jpg"
      data-overlay-dark="3">
      <div className="container box position-re">
        <ul className="rest">
          <li className="sd-dark">
            <span className="numb">5920</span>
            <h5>Succeeded <br /> Projects</h5>
          </li>
          <li className="blur">
            <h5>
              Huge template <br /> collection.</h5>
            <span className="icon pe-7s-paper-plane"></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Image