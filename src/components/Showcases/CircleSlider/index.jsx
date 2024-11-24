import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import data from '@/data/Showcases/circle-slider.json';

function FrameSlider({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className={`position-re ${lightMode ? 'bg-dark' : ''}`}>
      <div className="frame">
        <nav className="slides-nav">
          <div className="slide-nav-butn">
            <button className="slides-nav__button slides-nav__button--prev" aria-label="Previous slide">
              <svg>
                <path d="M1.176 11.532a.5.5 0 00-.352.936c5.228 1.96 9.475 5.555 12.752 10.797a.5.5 0 00.848-.53c-3.39-5.424-7.81-9.163-13.248-11.203z">
                </path>
                <path d="M1.176 12.468a.5.5 0 01-.352-.936C6.052 9.572 10.3 5.978 13.576.735a.5.5 0 01.848.53c-3.39 5.424-7.81 9.163-13.248 11.203z">
                </path>
                <path d="M1 12.5a.5.5 0 110-1h53a.5.5 0 110 1H1z"></path>
              </svg>
            </button>
            <button className="slides-nav__button slides-nav__button--next" aria-label="Next slide">
              <svg>
                <path d="M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z">
                </path>
                <path d="M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z">
                </path>
                <path d="M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z"></path>
              </svg>
            </button>
          </div>
          <div className="slides-nav__index">
            <span className="slides-nav__index-current"><span>1</span></span>
            &mdash;
            <span className="slides-nav__index-total">5</span>
          </div>
        </nav>
      </div>
      <div className="slideshow">
        {
          data.map((item, index) => (
            <figure className={`slide ${index === 0 ? 'slide--current' : ''}`} key={item.id}>
              <div className="slide__img-wrap">
                <div className="slide__img bg-img" data-background={item.background}></div>
              </div>
              <figcaption className="slide__caption">
                <h1 className="slides__caption-headline">
                  <span className="text-row sub-title mb-15"><span>© {item.year} {item.type}</span></span>
                  <span className="text-row"><span>{item.title}</span></span>
                </h1>
                <Link className="slides__caption-link sub-title mt-30" href="/dark/project-details1"><span>Explore</span></Link>
              </figcaption>
            </figure>
          ))
        }
      </div>
    </section>
  )
}

export default FrameSlider