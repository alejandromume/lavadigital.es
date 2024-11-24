import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-main-crev sub-bg">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption">
              <h1 className="fz-80">Alejandro Müller. <br /></h1><h2>Desarrollador <span className='gradient'>web</span> y <span className='gradient'>SEO/SEM</span></h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center">
            <div>
              <div className="text">
                <p className='fz-18'>Email: <Link href="mailto:alejandro@lavadigital.es" className='gradient'><b>alejandro@lavadigital.es</b></Link></p>
                <p className='fz-18'>Teléfono: <Link href="tel:+34636448112" className='gradient'><b>+34 636 44 81 12</b></Link></p>
                <br/>
                <Link href="/alejandro.vcf" style={{borderColor: "#fff", border: "2px solid white", padding: "14px 35px", borderRadius: "30px", background: "transparent", color: "#fff" }}>Agregar a contactos</Link>

              </div>
            </div>
          </div>
          <div className="col-lg-3 valign">
            <div className="md-hide">
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
    </header>
  )
}

export default Header