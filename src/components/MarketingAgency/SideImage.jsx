import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Components
import ModalVideo from '../Common/ModalVideo';
//= Scripts
import parallaxie from '@/common/parallaxie';

function SideImage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [sizeX, setSizeX] = useState()


  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <section className="sideimg-numbers section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cont">
              <div>
                <h2 className="fz-70">¿Por qué elegir a <span className='gradient'>Lava Digital</span>?</h2>
                <div className="underline">
                  <p className='fz-20'>Queremos lo mejor para ti, por ello, nuestra prioridad es la <span className='gradient'><b>confianza</b></span>. Nos gusta construir relaciones basadas en el compromiso y la transparencia, asi como comprometernos a ofrecer resultados medibles y un crecimiento sostenible para tu marca.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="container-fluid mt-100">
        <div className="row">
          <div className="col-12">
            <div className="main-marq xlrg">
              <div className="slide-har st1 strok">
                <div className="box">
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                </div>
                <div className="box">
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                  <div className="item">
                    <h4 className="stroke opacity-4">¿Por qué nosotros?</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </section>
  )
}

export default SideImage