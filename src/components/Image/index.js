import React, { useState } from 'react';
import './styles.scss';

export default function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(event) {
    setSkeleton(false);
    event.target.style.opacity = 1;
  }

  return (
    <div className='image-wrapper'>
      {skeleton && <div className='skeleton'></div>}
      <img onLoad={handleLoad} alt={alt} className='image' {...props} />
    </div>
  );
}
