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
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">E</span>
                    <p>n Lava Digital, transformamos tus ideas en soluciones digitales innovadoras y efectivas. Ofrecemos un servicio integral de desarrollo web adaptado a las necesidades de cada cliente, asegurándonos de que tu presencia online no solo sea impactante, sino también funcional y escalable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Tiendas Online</h2>
                </div>
                <div className="text mt-20">
                  <p>
                  Creamos eCommerce robustos y personalizados para ayudarte a vender más. Desarrollamos tiendas online eficientes, seguras y con una experiencia de usuario optimizada para maximizar tus conversiones. Trabajamos con plataformas líderes como <span className='gradient'>PrestaShop, WooCommerce y Shopify</span>, integrando sistemas de pago y logística, asegurando que cada aspecto de tu tienda funcione a la perfección.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Webs multifunción</h2>
                </div>
                <div className="text mt-20">
                  <p>
                  Ya sea que necesites un sitio web para presentar tu negocio o un blog profesional, desarrollamos páginas web informativas que comunican tu mensaje de manera clara y atractiva. Utilizamos tecnologías como <span className='gradient'>WordPress, React.js...</span>, garantizando una interfaz moderna, fácil de navegar y completamente optimizada para dispositivos móviles.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h2 className="fw-600 fz-25">Desarrollos a medida</h2>
                </div>
                <div className="text mt-20">
                <p><b>¿Necesitas una solución más específica?</b> Creamos desarrollos web a medida como paneles de control, gestores de incidencias, sistemas de gestión de clientes (CRM) o cualquier otro sistema web personalizado que se ajuste a tus necesidades. Con nuestra experiencia en React.js, Node.js, y demas tecnologías, ofrecemos soluciones escalables y robustas que crecen junto con tu negocio.</p>

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