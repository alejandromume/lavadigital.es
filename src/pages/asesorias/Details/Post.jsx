import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Post() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="container">
      <div className="main-post">
        <div className="item pb-60">
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <div className="d-flex align-items-center">
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">I</span>
                    <p>
                    mpulsa el crecimiento de tu negocio con nuestro servicio de asesoramiento <span className='gradient'><b>especializado en páginas web y SEO/SEM.</b></span> Te ofrecemos estrategias personalizadas para mejorar tu presencia digital, optimizar tu sitio web y maximizar tu visibilidad en los motores de búsqueda, asegurando un retorno de inversión claro y medible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Análisis exhaustivo de tu sitio web</h2>
                </div>
                <div className="text mt-20">
                  <p>
                  Auditoría completa de tu página web para identificar <span className='gradient'><b>oportunidades de mejora en rendimiento, diseño y estructura,</b></span> asegurando que esté alineada con los estándares técnicos y de usabilidad más recientes.                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Competencia y benchmarking</h2>
                </div>
                <div className="text mt-20">
                  <p>
                  Realizamos un análisis competitivo detallado para identificar las <span className='gradient'><b>fortalezas y debilidades</b></span> de tus principales competidores en el ámbito digital. Esto nos permite ajustar tu estrategia SEO/SEM y aprovechar oportunidades que otros en tu sector están dejando pasar.                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Optimización para motores de búsqueda (SEO)</h2>
                </div>
                <div className="text mt-20">
                <p>
                Desarrollamos una estrategia SEO personalizada para mejorar tu posicionamiento orgánico en Google. Desde la optimización de palabras clave hasta la creación de contenido relevante y la mejora de backlinks, nos aseguramos de que tu sitio esté diseñado para <span className='gradient'><b>atraer más tráfico</b></span> cualificado.                </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Estrategia de conversión y embudo de ventas</h2>
                </div>
                <div className="text mt-20">
                <p>
                Te ayudamos a optimizar las llamadas a la acción (CTAs), formularios y otros elementos clave del embudo de ventas de tu web para <span className='gradient'><b>maximizar las conversiones.</b></span> Nos enfocamos en convertir más visitantes en clientes a través de tácticas de conversión efectivas.
                </p>
                </div>
              </div>
            </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600"></h5>
              </div>

              <div className="text mb-20">
              </div>

              {/*<div className="unorder-list mb-30">
                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                <ul className="rest">
                  <li>Yet this above sewed flirted opened ouch</li>
                  <li>Goldfinch realistic sporadic ingenuous</li>
                  <li>Abominable this abidin far successfully then like piquan</li>
                </ul>
              </div>*/}

            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Post