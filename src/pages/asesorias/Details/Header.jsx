import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function Header() {
  useEffect(() => {
    parallaxie('.bg-img.parallaxie', 0.4);
  }, []);

  return (
    <header className="page-header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <h1 className="fz-55 mt-30">Asesoramiento profesional a empresas</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="background bg-img parallaxie mt-80" data-background="/dark/assets/imgs/blog/b2.jpg"></div>
    </header>
  )
}

export default Header