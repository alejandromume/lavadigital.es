import React from 'react';
//= Components
import Values from './Values';
import Video from './Video';

function Block({ lightMode }) {
  return (
    <section className="block-sec section-padding">
      <div className="container">
        <Video lightMode={lightMode} />
        <Values />
      </div>
    </section>
  )
}

export default Block