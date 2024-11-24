import React, { useEffect } from 'react';

function Navigation({ lightMode, alwaysDark, darkOnScroll }) {
  useEffect(() => {
    if (darkOnScroll) {
      let nav = document.querySelector('#navi');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          nav.className = "topnav dark change nav-scroll";
          nav.querySelector('img').src = "/dark/assets/imgs/logo-dark.png";
        } else {
          nav.className = "topnav";
          nav.querySelector('img').src = "/dark/assets/imgs/logo-light.png";
        }
      })
    }
  }, [darkOnScroll]);

  function toggleMenu(event) {
    let menu = document.querySelector('.hamenu');
    let nav = document.querySelector('#navi');

    if (event.currentTarget.classList.contains('open')) {
      event.currentTarget.classList.remove('open')
      menu?.classList.remove('open');
      menu.style.left = `-100%`;
      if (lightMode && !alwaysDark) {
        nav.classList.remove('navlit');
        nav.querySelector('img').src = "/dark/assets/imgs/logo-light.png";
      }
    } else {
      event.currentTarget.classList.add('open')
      menu?.classList.add('open');
      menu.style.left = 0;
      if (lightMode && !alwaysDark) {
        nav.classList.add('navlit');
        nav.querySelector('img').src = "/dark/assets/imgs/logo-dark.png";
      }
    }
  }

  return (
    <div id="navi" className={`topnav ${alwaysDark && 'navlit'}`}>
      <div className="container">
        <div className="logo icon-img-120">
          <a href="#"><img src={`/dark/assets/imgs/logo-${alwaysDark ? 'dark' : 'light'}.png`} alt="" /></a>
        </div>
        <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
          <span className="icon"><i></i><i></i></span>
          <span className="text"><span className="word">Menu</span></span>
        </div>
      </div>
    </div>
  )
}

export default Navigation