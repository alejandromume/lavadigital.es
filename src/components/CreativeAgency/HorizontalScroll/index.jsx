import React, { useEffect } from 'react';
//= Components
import Intro from './Intro';
import Awards from './Awards';
import CallToAction from './CallToAction';

function HzScroll({ lightMode }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
        }
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth < 991 && document.querySelector('.thecontainer').style.maxHeight) {
      location.reload();
    } else if (window.innerWidth > 991 && !document.querySelector('.thecontainer').style.maxHeight) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
        }
      });
    }
  }

  return (
    <section className="thecontainer ontop">
      <Intro />
      <Awards lightMode={lightMode} />
      <CallToAction lightMode={lightMode} />
    </section>
  )
}

export default HzScroll