import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-digital full-height valign bord-thin-bottom">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-6">
            <div className="caption">
              <h1>Better design for your digital products.</h1>
              <div className="text mt-30">
                <p>We are a creative studio specializing in UI/UX design, <br /> development and strategy.</p>
              </div>
              <Link href="/dark/page-services" className="butn butn-md butn-bg main-colorbg2 text-dark radius-30 mt-30">
                <span>Explore More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="half-img-right bg-img ontop md-hide" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/header1.png`}></div>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header