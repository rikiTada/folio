import React, { useEffect, useState } from 'react';

const Image = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    setSrc(`https://source.unsplash.com/random?white/800x600&${Date.now()}&sig=${Math.random()}`);
  }, []);

  return (
    <img
      className="randomImage h-auto max-w-full rounded-lg"
      src={src}
      alt="画像"
      draggable="false"
    />
  );
};

export default Image;
