import React from 'react';
import Link from 'next/link';
//= Data
import data from '@/data/Corporate/services.json';

function Services({ lightMode }) {
  return (
    <section className="serv-box section-padding" style={{backgroundColor: "#1D1D1D"}}>
      <div className="container">
        <div className="sec-lg-head mb-80">
        <center>
          <div className="row">
            <div className="">
              <div className="position-re">
                
                <h2 className="fz-48 fw-100 d-slideup wow" style={{fontFamily: "Satoshi-Regular"}}>
                  <span className='sideup-text'>
                    <span className='up-text'>¿Qué somos?</span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="">
              <div className="text">
                <p className='fz-18 col-lg-7'>Lava Digital es una agencia de <span className='gradient fw-500'><b>innovación digital</b></span> en Lanzarote especializada en la digitalización y desarrollo web que impulsa empresas y negocios en internet.</p>
              </div>
            </div>
          </div>
          </center>

        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="serv-item md-mb50 radius-5">
                  <div className="icon-img-50 mb-40">
                    {
                      lightMode ?
                        <img src={`/light/${item.image}`} alt="" />
                        :
                        <img src={`/dark/${item.image}`} alt="" />
                    }
                  </div>
                  
                  <h3 className="mb-15 fz-25">{item.title}</h3>
                  <p className="fz-14">{item.text}</p>
                  <div className="underline">
                    
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

export default Services