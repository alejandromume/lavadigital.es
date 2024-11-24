import React, { useEffect } from 'react';

function Navbar({ lightMode }) {
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

  function scrollToSection(id) {
    setTimeout(() => document.querySelector(`[data-scroll-index="${id}"]`)?.scrollIntoView({ smooth: true }), 700);
  }

  return (
    <nav className="navbar navbar-expand-lg static main-bg">
      <div className="container">
        <a className="logo icon-img-100" href="#">
          {
            lightMode ?
              <img src="/dark/assets/imgs/logo-dark.png" alt="logo" />
              :
              <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
          }
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="0" onClick={() => scrollToSection(0)}><span className="rolling-text">Home</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="1" onClick={() => scrollToSection(1)}><span className="rolling-text">Services</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="2" onClick={() => scrollToSection(2)}><span className="rolling-text">About</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="3" onClick={() => scrollToSection(3)}><span className="rolling-text">Portfolio</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="4" onClick={() => scrollToSection(4)}><span className="rolling-text">Resume</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="6" onClick={() => scrollToSection(6)}><span className="rolling-text">Blog</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0" data-scroll-nav="7" onClick={() => scrollToSection(7)}><span className="rolling-text">Contact</span></a>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button><span className="pe-7s-search"></span></button>
          </div>
          <div className="search-icon" onClick={toggleSearch}>
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar