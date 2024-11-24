import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Pricing() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pricing section-padding sub-bg">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl colorbg-4 mb-10">Precios y Servicios</h6>
                <h2 className="fz-60 fw-700">Nuestros Precios</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>Los servicios y precios de Lava Creativa se ofrecen de forma transparente, para que te informes de forma clara y pidas presupuesto sin compromiso</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-4">
            <div className="item main-bg position-re o-hidden md-mb50">
              <div className="info-box pb-30 bord-thin-bottom mb-30">
                <h6 className="sub-title mb-15">Asesorias a empresas</h6>
                <div className="amount">
                  <div>
                  <span className="fz-20 fw-400">Desde &nbsp;</span>
                    <span className="gradient num-font fw-600 fz-50">45€</span>
                  </div>
                </div>
                <p className="fz-13">10% taxes will include after make price.</p>
              </div>
              <ul className="rest">
                <li>10 Hours of task work</li>
                <li>1 User included</li>
                <li>Advertising</li>
                <li>Web developments</li>
                <li>24 / 7 Support</li>
              </ul>
              <div className="bg-pattern bg-img opacity-1" data-background="/dark/assets/imgs/patterns/1.svg"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item main-bg position-re o-hidden md-mb50">
              <div className="info-box pb-30 bord-thin-bottom mb-30">
                <h6 className="sub-title mb-15">Desarrollo web</h6>
                <div className="amount">
                <div>
                  <span className="fz-20 fw-400">Desde &nbsp;</span>
                    <span className="gradient num-font fw-600 fz-50">650€</span>
                  </div>
                </div>
                <p className="fz-13">10% taxes will include after make price.</p>
              </div>
              <ul className="rest">
                <li>10 Hours of task work</li>
                <li>1 User included</li>
                <li>Advertising</li>
                <li>Web developments</li>
                <li>24 / 7 Support</li>
              </ul>
              <div className="bg-pattern bg-img opacity-3"
                data-background="/dark/assets/imgs/patterns/abstact-BG.png"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item main-bg position-re o-hidden">
              <div className="info-box pb-30 bord-thin-bottom mb-30">
                <h6 className="sub-title mb-15">SEO/SEM</h6>
                <div className="amount">
                <div>
                  <span className="fz-20 fw-400">Desde &nbsp;</span>
                    <span className="gradient num-font fw-600 fz-50">120€</span>
                  </div>
                </div>
                <p className="fz-13">IGIC no incluido</p>
              </div>
              <ul className="rest">
                <li>10 Hours of task work</li>
                <li>1 User included</li>
                <li>Advertising</li>
                <li>Web developments</li>
                <li>24 / 7 Support</li>
              </ul>
              <div className="bg-pattern bg-img opacity-1" data-background="/dark/assets/imgs/patterns/1.svg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing