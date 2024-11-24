import React, { useEffect } from 'react';
//= Data
import data from '@/data/app-data.json';

function Footer({ lightMode }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer className="main-bg">
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Dirección</h6>
                </div>
                <div className="text">
                  <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Háblanos</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">hola@lavacreativa.es</a>
                  </p>
                  <h5>
                    <a href="#">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Redes Sociales</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Newsletter</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
            <p className="fz-13">© 2024 Lava Creativa</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer