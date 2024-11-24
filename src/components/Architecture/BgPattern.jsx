import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function BgPattern({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/bg-lines-1.svg`}></div>
  )
}

export default BgPattern