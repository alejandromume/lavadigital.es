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
                <div className="title mt-30">
                  <h3 className="fw-600">I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
                </div>
                <div className="text mt-20">
                  <p>
                  Respetando lo establecido en la legislación vigente, Lava Digital (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h5 className="fw-600">Leyes que incorpora esta política de privacidad</h5>
                </div>
                <div className="text mt-20">
                  <p>
                  Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:                  </p>
                    <br/>
                    <ul>
                      <li>· El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
                      <br/><li>· La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
                      <br/><li>· El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
                      <br/><li>· La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h5 className="fw-600">Identidad del responsable del tratamiento de los datos personales</h5>
                </div>
                <div className="text mt-20">
                  <p>
                  El responsable del tratamiento de los datos personales recogidos en Lava Digital es: Alejandro Müller Medina, con NIF: 78845183X (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes:
                  </p>
                  <ul>
                  <br/><li>· Dirección: Avenida de la Palmera, 17. Sevilla</li>
                  <br/><li>· Teléfono de contacto: 636448112</li>
                  <br/><li>· Email de contacto: contacto@lavadigital.es</li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h5 className="fw-600">Control de su información personal</h5>
                </div>
                <div className="text mt-20">
                  <p>
                  En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.

Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h3 className="fw-600">II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h3>
                </div>
                <div className="text mt-20">
                  <p>
                  Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.
                  <br/><br/>Lava Digital se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.
                  <br/><br/>Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
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