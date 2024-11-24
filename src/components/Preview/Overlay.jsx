import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Overlay() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="overlay bg-img" data-background="/landing-preview/img/header/overlay.webp"></div>
  )
}

export default Overlay