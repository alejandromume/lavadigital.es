import React from 'react';
//= Components
import Process from './Process';
import Services from './Services';

function ServicesTab({ lightMode }) {
  return (
    <section className="services section-padding pb-0 bg-gray1 position-re o-hidden radius-30">
      <Services lightMode={lightMode} />
      <Process lightMode={lightMode} />
      <div className="bg-pattern bg-img bg-repeat" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/bg-pattern.png`}></div>
    </section>
  )
}

export default ServicesTab