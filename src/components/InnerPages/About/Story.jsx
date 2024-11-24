import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-12">
            <div className="bg-img radius-10" data-background="/dark/assets/imgs/Portada.jpg"></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Sobre Nosotros.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              {/*<h4>En <span className='gradient'>Lava Creativa</span>, entendemos que cada marca es única, como los paisajes volcánicos de Lanzarote. Por eso creamos <span className='gradient'>soluciones a medida</span>, diseñadas específicamente para maximizar tu impacto digital. </h4>*/}
              <span className='fz-20'>
              Somos un equipo <span className='gradient'><b>joven</b></span> y <span className='gradient'><b>apasionado</b></span> de Lanzarote, comprometidos con llevar la creatividad y la tecnología a las empresas que buscan hacer crecer su presencia online. Nacidos en un entorno de inspiración natural y diversidad cultural, sabemos cómo adaptar las soluciones digitales a cada necesidad, con <span className='gradient'><b>estrategias modernas</b></span> y <span className='gradient'><b>personalizadas</b></span> para impulsar el éxito de cada proyecto.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story