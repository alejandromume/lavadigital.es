import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Architecture/blog.json';

function Blog() {
  return (
    <section className="blog-list-half crev section-padding sub-bg">
      <div className="container mb-30">
        <div className="sec-leter-head mb-80">
          <div className="d-flex align-items-center">
            <div className="leter">
              <h4>B</h4>
            </div>
            <div className="line"></div>
          </div>
          <div className="title">
            <h6 className="sub-title">Our Blog.</h6>
          </div>
        </div>
        <div className="row">
          {
            data.map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div className="item md-mb80">
                  <div className="row rest">
                    <div className="col-md-6">
                      <div className="img">
                        <img src={item.cover} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 valign">
                      <div className="cont">
                        <span className="date fz-12 ls1 text-u opacity-7 mb-15">{item.date}</span>
                        <h5>
                          <Link href="/dark/blog-details">{item.title}</Link>
                        </h5>
                        <div className="tags colorbg mt-15">
                          {
                            item.tags.map(tag => <Link href="/dark/blog-half-img" key={tag}>{tag}</Link>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog