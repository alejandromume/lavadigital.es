import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function CallToAction({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="call-action-center section-padding position-re sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="sec-lg-head text-center">
              <h2 className="fz-70 fw-700">
                <span>Quieres que tu negocio triunfe en internet?</span> <br />
                <span className="underline">
                  <Link href="/contacto" className="main-color2">Háblanos.</Link>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </section>
  )
}

export default CallToAction