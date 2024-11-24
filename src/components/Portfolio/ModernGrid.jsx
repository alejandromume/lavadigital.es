import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Portfolio/modern-grid.json'

function ModernGrid() {
  return (
    <section className="portfolio section-padding">
      <div className="container">
        <div className="row justify-content-center">
          {
            data.map(item => (
              <div className={`col-lg-${item.style.width} ${item.style.align ? item.style.align : ''}`} key={item.id}>
                <div className={`item md-mb80 ${item.style.isFullWidth ? 'full-width' : ''} ${item.style.mt ? 'mt-' + item.style.mt : ''} ${item.style.mb ? 'mb-' + item.style.mb : ''}`}>
                  {
                    item.style.innerCol ?
                      <div className="row justify-content-center">
                        <div className={`col-lg-${item.style.innerCol}`}>
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="cont mt-30 d-flex">
                            <div>
                              <h6 className="line-height-1">
                                <Link href="/dark/project-details2">From our gallery</Link>
                              </h6>
                              <p>{item.type}</p>
                            </div>
                            <div className="ml-auto">
                              <p className="fz-14">© {item.year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      :
                      <>
                        <div className="img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="cont mt-30 d-flex">
                          <div>
                            <h6 className="line-height-1">
                              <Link href="/dark/project-details2">From our gallery</Link>
                            </h6>
                            <p>{item.type}</p>
                          </div>
                          <div className="ml-auto">
                            <p className="fz-14">© {item.year}</p>
                          </div>
                        </div>
                      </>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ModernGrid