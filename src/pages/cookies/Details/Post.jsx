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
                    <p>
                    Utilizamos "cookies" para ayudarle a personalizar su experiencia en línea. Una cookie es un archivo de texto que un servidor web almacena en su disco duro. Las cookies no se utilizan para ejecutar programas o enviar virus a su ordenador. Las cookies se le asignan a usted de forma exclusiva y sólo pueden ser leídas por un servidor web del dominio que emitió la cookie para usted. Uno de los principales objetivos de las cookies es proporcionar una función práctica que le ahorre tiempo. El propósito de una cookie es indicar al servidor web que usted ha regresado a una página específica. Por ejemplo, si personaliza las páginas de nuestro sitio web o se registra en el servicio de suscripción, una cookie nos ayuda a recuperar su información específica en visitas posteriores. Cuando vuelva al mismo sitio web, podrá recuperar la información que nos proporcionó anteriormente, de modo que podrá utilizar fácilmente las funciones personalizadas.
                    <br/><br/>A continuación indicamos que tipo de cookies se utilizan en este dominio:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h5 className="fw-600">De analíticas</h5>
                </div>
                <div className="text mt-20">
                  <p>
                  Recopilan información sobre la experiencia de navegación del usuario en el sitio web, normalmente de forma anónima, aunque en ocasiones también permiten identificar de manera única e inequívoca al usuario con el fin de obtener informes sobre los intereses de los usuarios en los servicios que ofrece el sitio web.                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h5 className="fw-600">De geolocalización</h5>
                </div>
                <div className="text mt-20">
                  <p>
                  Estas Cookies se utilizan para averiguar en qué país o región se encuentra el usuario cuando accede a un servicio del sitio web con el fin de ofrecerle contenidos o servicios adecuados a su localización.                  </p>
                </div>
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