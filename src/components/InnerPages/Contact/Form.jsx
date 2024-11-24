import React from 'react';

function Form() {
  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h2 className="fz-50">Preparado para ver <br /> tu negocio <span className='gradient'>crecer?</span></h2>
              <p className="fz-15 mt-10">Si te gustaria comenzar con nosotros, envíanos un mensaje a traves del siguiente formulario.</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="mailto:contacto@lavadigital.es">contacto@lavadigital.es</a>
              </div>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="tel:+34636448112">+34 636 44 81 12</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="https://www.linkedin.com/company/lava-creativa-es/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://instagram.com/lavadigital.es/">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Nombre"
                        required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Concepto" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Mensaje" rows="4" required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-md butn-bord radius-30">
                        <span className="text">Hablemos</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form