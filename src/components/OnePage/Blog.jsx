import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import data from '@/data/OnePage/blog.json';

function Blog() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <h6 className="sub-title wow fadeInUp">Featured Stories</h6>
              <h2 className="d-rotate wow">
                <span className="rotate-text">Latest News</span>
              </h2>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="full-width d-flex justify-content-end justify-end">
                <div className="vew-all wow fadeIn">
                  <Link href="/dark/blog-classic">View All Our News
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          data.map((item, index) => (
            <div className={`item bord-thin-top ${index === data.length - 1 ? 'bord-thin-bottom' : ''} wow fadeInUp`} data-wow-delay={`${index * 0.1 + 0.2}s`} key={item.id}>
              <div className="row">
                <div className="col-lg-3">
                  <div className="info md-mb30">
                    <div className="d-flex align-items-center">
                      <div className="author">
                        <div className="img">
                          <img src={item.author.picture} alt="" />
                        </div>
                      </div>
                      <div className="author-info">
                        <span className="fz-13 opacity-8 mb-5">Posted by</span>
                        <h6 className="fz-18">{item.author.name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cont">
                    <h5 className="mb-10 underline">
                      <Link href="/dark/blog-details">{item.title}</Link>
                    </h5>
                    <div className="tags">
                      {
                        item.tags.map((tag, idx) => <Link href="/dark/blog-classic" key={idx}>{tag}</Link>)
                      }
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center justify-end">
                  <div className="ml-auto">
                    <span className="date sub-title fz-13 opacity-8 mb-30">{item.date}</span>
                  </div>
                </div>
              </div>
              <div className="background bg-img valign text-center" data-background={item.image} data-overlay-dark="4">
                <div className="more ontop full-width">
                  <Link href="/dark/blog-details">
                    <span>Read More <i className="fas fa-arrow-right ml-10"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Blog