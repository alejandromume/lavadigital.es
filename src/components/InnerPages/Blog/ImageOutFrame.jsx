import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/InnerPages/Blog/half-img.json';

function ImageOutFrame() {
  return (
    <section className="blog-list-half crev section-padding sub-bg">
      <div className="container">
        <div className="row">
          {
            data.map((item, index) => (
              <div className="col-lg-6" key={item.id}>
                <div className={`item ${index !== data.length - 1 ? 'mb-80' : ''}`}>
                  <div className="row rest">
                    <div className="col-md-6">
                      <div class="img">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div class="col-md-6 valign">
                      <div class="cont">
                        <span className="date fz-12 ls1 text-u opacity-7 mb-15">{item.date}</span>
                        <h5>
                          <Link href="/dark/blog-details">{item.title}</Link>
                        </h5>
                        <div class="tags colorbg mt-15">
                          {
                            item.tags.map((tag, i) => (<Link href="/dark/blog-list" className="me-1" key={i}>{tag}</Link>))
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

export default ImageOutFrame