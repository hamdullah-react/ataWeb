'use client'
import Image from 'next/image';
import { useState } from 'react';

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const images = [
    { src: '/img/1.jpeg', alt: 'First slide', height: 200 }, // Reduced height for responsiveness
    { src: '/img/4.jpeg', alt: 'Second slide', height: 200 } // Reduced height for responsiveness
  ];

  return (
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item${index === activeIndex ? ' active' : ''}`} style={{ height: image.height }}>
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev} style={{ color: 'black' }}>
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext} style={{ color: 'black' }}>
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
