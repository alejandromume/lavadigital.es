import React from 'react';

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs full-width mb-80">
              <div className="img1 main-color2 wow fadeInUp">
                <img src="/dark/assets/imgs/img4.avif" alt="" />
              </div>
              <div className="img2 wow fadeInLeft">
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text fz-65">Preguntas <span className='gradient'>frecuentes</span> </span>
                  </span>
                </h2>
              </div>

              {/*<div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <div className="main-marq lrg section-padding pb-0">
                      <div className="slide-har st1">
                        <div className="box">
                          {
                            new Array(5).fill().map((_, i) => (
                              <div className="item" key={i}>
                                <h4>{"PREGUNTAS FRECUENTES"}</h4>
                              </div>
                            ))
                          }
                        </div>
                        <div className="box">
                          {
                            new Array(5).fill().map((_, i) => (
                              <div className="item" key={i}>
                                <h4>{"PREGUNTAS FRECUENTES"}</h4>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </span>
                </h2>
              </div>*/}
              <div className="accordion bord mt-40">

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h3 className="fz-16">¿Qué incluye el servicio de desarrollo web a medida?</h3>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                    Nuestro servicio de desarrollo web a medida incluye el diseño, desarrollo y optimización completa de tu sitio web para adaptarse a tus necesidades y objetivos. Desde la creación de un diseño atractivo hasta la implementación de funciones específicas para e-commerce o sitios corporativos, trabajamos en todos los aspectos necesarios para entregar una página profesional y funcional.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h3 className="fz-16">¿Puedo solicitar una consulta antes de contratar sus servicios?</h3>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                    Claro, ofrecemos una primera consulta gratuita para conocerte y entender mejor tus necesidades. Durante esta reunión, evaluaremos tu proyecto y te daremos una idea clara de cómo podemos ayudarte a alcanzar tus objetivos.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h3 className="fz-16">¿Cómo se realiza el asesoramiento para empresas?</h3>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                    Ofrecemos sesiones personalizadas de asesoramiento para ayudarte a optimizar tu sitio web y tus estrategias de marketing digital. Abarcamos desde la revisión de tu sitio y la mejora de la experiencia del usuario hasta recomendaciones para tus campañas de SEO/SEM y redes sociales. Todo está enfocado en maximizar tu presencia online y aumentar tus conversiones.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h3 className="fz-16">¿Ofrecen soporte después de la entrega del proyecto?</h3>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                    Sí, ofrecemos paquetes de soporte y mantenimiento para asegurarnos de que tu sitio web funcione de manera óptima a lo largo del tiempo. Esto incluye actualizaciones de seguridad, correcciones de errores y mejoras en la funcionalidad según sea necesario.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h3 className="fz-16">¿Qué garantías ofrecen sobre la calidad del trabajo?</h3>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                    Nos comprometemos a entregar un producto de alta calidad y optimizado para el rendimiento. Realizamos pruebas exhaustivas antes de la entrega para garantizar la funcionalidad, seguridad y velocidad del sitio. Además, ofrecemos un período de soporte posterior al lanzamiento para resolver cualquier detalle que pueda surgir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro