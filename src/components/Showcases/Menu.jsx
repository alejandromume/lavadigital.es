import React from 'react';
import Link from 'next/link';

function Menu({ lightMode }) {
  function handleMouseEnter(event) {
    document.querySelectorAll('ul.main-menu li').forEach(item => {
      item.classList.add('hoverd');
    });
    event.currentTarget.classList.remove('hoverd');
  }

  function handleMouseLeave() {
    document.querySelectorAll('ul.main-menu li').forEach(item => item.classList.remove('hoverd'));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector('.sub-menu');
    if (subMenu) {
      if (subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.remove('sub-open');
        subMenu.style.maxHeight = '0';
        subMenu.previousElementSibling.children[0].classList.remove('dopen');
      } else if (!subMenu.classList.contains('sub-open')) {
        document.querySelectorAll('.sub-menu').forEach(item => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '400px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }

  return (
    <div className="hamenu">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="menu-text">
              <div className="text">
                <h2>Menu</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Home">Home</span> <i></i></div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-corporate`} className="sub-link">Home Corporate</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-onepage`} className="sub-link">Home One page</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-digital-agency`} className="sub-link">Digital Agency</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-freelancer`} className="sub-link">Freelancer</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-marketing-agency`} className="sub-link">Marketing Agency</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-creative-agency`} className="sub-link">Creative Agency</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-startup`} className="sub-link">Startup Bussines</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/home-architecture`} className="sub-link">Architecture</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <Link href={`/${lightMode ? 'light' : 'dark'}/page-about`} className="link"><span className="fill-text" data-text="About Us">About Us</span></Link>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Pages">Pages</span> <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/page-services`} className="sub-link">Services</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/page-team`} className="sub-link">Our Team</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/page-contact`} className="sub-link">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Showcases">Showcases</span> <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-parallax-slider`} className="sub-link">Parallax Slider</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-frame-slider`} className="sub-link">Frame Slider</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-circle-slider`} className="sub-link">Circle Slider</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-carousel`} className="sub-link">Showcase Carousel</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center-horizontal`} className="sub-link">Interactive Links1</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center`} className="sub-link">Interactive Links2</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/showcase-parallax`} className="sub-link">Vertical Parallax</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Portfolio">Portfolio</span> <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/portfolio-classic-grid`} className="sub-link">Classic Grid</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/portfolio-grid`} className="sub-link">Modern Grid</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/portfolio-metro`} className="sub-link">Portfolio Metro</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/project-details1`} className="sub-link">Project Details 1</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/project-details2`} className="sub-link">Project Details 2</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSubMenu}>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Blogs">Blogs</span> <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/blog-classic`} className="sub-link">Blog Standerd</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/blog-list`} className="sub-link">Blog List</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/blog-half-img`} className="sub-link">Image Out Frame</Link>
                      </li>
                      <li>
                        <Link href={`/${lightMode ? 'light' : 'dark'}/blog-details`} className="sub-link">Blog Details</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <Link href={`/${lightMode ? 'light' : 'dark'}/page-contact`} className="link"><span className="fill-text" data-text="Contact">Contact</span></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end">
            <div className="cont-info full-width">
              <div className="item">
                <h5 className="mb-15">Get In Touch</h5>
                <p>541 Melville Geek, Palo Alto, CA 94301</p>
                <p className="underline main-color mt-5 mb-5"><a href="#0">+1 840 841 25 69</a></p>
                <p><a href="#0">GeekFolio_website@gmail.com</a></p>
              </div>
              <div className="search-form">
                <div className="form-group">
                  <input type="text" name="search" placeholder="Search" />
                  <button><span className="pe-7s-search"></span></button>
                </div>
              </div>
              <ul className="rest social-text d-flex mt-50 fz-13">
                <li className="mr-20">
                  <a href="#0" className="hover-this"><span className="hover-anim">Facebook</span></a>
                </li>
                <li className="mr-20">
                  <a href="#0" className="hover-this"><span className="hover-anim">Twitter</span></a>
                </li>
                <li className="mr-20">
                  <a href="#0" className="hover-this"><span className="hover-anim">LinkedIn</span></a>
                </li>
                <li>
                  <a href="#0" className="hover-this"><span className="hover-anim">Instagram</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu