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
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">O</span>
                    <p>frecemos servicios profesionales de SEO (Optimización en Motores de Búsqueda) y SEM (Publicidad en Motores de Búsqueda) que impulsan el tráfico cualificado hacia tu sitio web y te ayudan a convertir visitas en clientes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Auditoría SEO Completa</h2>
                </div>
                <div className="text mt-20">
                  <p>
                  Antes de iniciar cualquier estrategia, realizamos una auditoría exhaustiva de tu sitio web para identificar áreas de mejora en términos de estructura, contenido, velocidad y usabilidad. Nuestro equipo analiza factores clave como el rendimiento en dispositivos móviles, la optimización <span className='gradient'>on-page y backlinks</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Publicidad en Google Ads y Meta Ads</h2>
                </div>
                <div className="text mt-20">
                  <p>
                  Desarrollamos y gestionamos campañas de Google Ads y Meta Ads altamente segmentadas para maximizar tu retorno de inversión. Creamos anuncios dirigidos a las palabras clave más relevantes para tu negocio y optimizamos continuamente las campañas para mejorar el <span className='gradient'>Coste por Clic (CPC)</span> y el <span className='gradient'>Quality Score.</span> A través de formatos como anuncios de búsqueda, display y shopping, logramos atraer tráfico cualificado y aumentar las conversiones.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Análisis y Reportes Detallados</h2>
                </div>
                <div className="text mt-20">
                <p>Medimos cada aspecto de nuestras campañas de SEO y SEM con herramientas como <span className='gradient'>Google Analytics, Search Console y Google Ads</span>, proporcionando informes detallados y fáciles de entender. Te mostramos el rendimiento de tus campañas, el tráfico obtenido, las palabras clave que están funcionando mejor y las oportunidades de mejora para maximizar tu inversión.</p>

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