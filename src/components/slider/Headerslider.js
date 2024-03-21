"use client";
import Image from "next/image";
import { useState } from "react";

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [
    { src: "/img/1-removebg-preview.png", alt: "First slide", height: 500 }, // Reduced height for responsiveness
    { src: "/img/4-removebg-preview.png", alt: "Second slide", height: 500 }, // Reduced height for responsiveness
    { src: "/img/3-removebg-preview.png", alt: "Second slide", height: 500 }, // Reduced height for responsiveness
  ];

  return (
    <>
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item${
                index === activeIndex ? " active" : ""
              }`}
              style={{ height: image.height }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                style={{ objectFit: "scale-down" }}
              />
            </div>
          ))}
        </div>
   
        <span
        
          className="carousel-control-prev"
          data-slide="prev"
          onClick={handlePrev}
        >
          <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
            <span className="carousel-control-prev-icon mb-n2" />
          </div>
        </span>
        <span
         onClick={handleNext}
          className="carousel-control-next"
          
          data-slide="next"
        >
          <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
            <span className="carousel-control-next-icon mb-n2" />
          </div>
        </span>
    
      </div>

    </>
  );
};

export default MyCarousel;
