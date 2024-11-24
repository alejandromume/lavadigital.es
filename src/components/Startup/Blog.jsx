import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Startup/blog.json';

function Blog() {
  return (
    <section className="blog-list2 section-padding">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <h6><span className="fz-14">08 . </span> Latest News</h6>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="text">
              <h3>We create <span className="sub-font">experiences</span> and turn ideas into reality.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="items">
              {
                data.map(item => (
                  <div className="item" key={item.id}>
                    <div className="row">
                      <div className="col-lg-2 d-flex align-items-center">
                        <div className="categ fz-13 md-mb30">
                          <Link href="/dark/blog-classic">{item.tag}</Link>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="title">
                          <h5>
                            <Link href="/dark/blog-details">{item.title}</Link>
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-2 position-re">
                        <div className="img">
                          <img src={item.cover} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-3 d-flex align-items-center justify-end">
                        <div className="info fz-13 ml-auto opacity-7">
                          <span>{item.date}</span>
                          <span className="ml-15 mr-15">/</span>
                          <span>By {item.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog