import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function MainNavbar({ lightMode, mainBg, subBg, noStatic, curve }) {
  const [width, setWidth] = useState(992);

  useEffect(() => {
    setWidth(window.innerWidth)
  },[])

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");
    
    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.add('show');
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains('open')) closeBtn.style.display = 'block';
    else closeBtn.style.display = 'none';
  }

  return (
    <nav className={`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`}>
      <div className="container">
        <Link className="logo icon-img-100" href="/">
          {
            lightMode ?
              <img src="/dark/assets/imgs/logo-dark2.png" alt="logo" />
              :
              <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          }
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" href={`/sobre-nosotros`}><span className="rolling-text">Sobre Nosotros</span></Link>
            </li>
            {/*<li className="nav-item">
              <Link className="nav-link" href={`/contacto`}><span className="rolling-text">Proyectos</span></Link>
            </li>*/}
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Servicios</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={/*`/${lightMode ? 'light' : 'dark'}/desarrollo-web`*/ "desarrollo-web"}>Desarrollo web</Link>
                <Link className="dropdown-item" href={/*`/${lightMode ? 'light' : 'dark'}/blog-list`*/ "seo-sem"}>SEO/SEM</Link>
                <Link className="dropdown-item" href={/*`/${lightMode ? 'light' : 'dark'}/blog-half-img`*/ "asesorias"}>Asesorias a empresas</Link>
              </div>
            </li>
            
            { width < 991 ? (
                <li className="nav-item">
                <Link className="nav-link" href={`/contacto`}><span className="rolling-text">Contacto</span></Link>
              </li>
            ) : null }

            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Legal</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" href={/*`/${lightMode ? 'light' : 'dark'}/desarrollo-web`*/ "cookies"}>Política de cookies</Link>
                <Link className="dropdown-item" href={/*`/${lightMode ? 'light' : 'dark'}/blog-list`*/ "privacidad"}>Política de privacidad</Link>
              </div>
            </li>
          </ul>
        </div>
      
        { width > 991 ? (
            <a href="contacto" className="butn butn-md butn-bord radius-30" style={{justifyContent: "right"}}>
              <span className="text">Contacta</span>
            </a>
          ) : null }

        {/*<div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button><span className="pe-7s-search"></span></button>
          </div>
          <div className="search-icon" onClick={toggleSearch}>
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>*/}
      </div>
    </nav>
  )
}

export default MainNavbar