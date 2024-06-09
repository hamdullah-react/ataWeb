"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const slides = [
  {
    src: "/img/slide/1.png",
    alt: "Universal plastic CCTV bracket holder",
    label: "First slide label",
    caption:
      "Sturdy wall-mounted bracket for CCTV cameras, offering reliable support.",
  },
  {
    src: "/img/slide/2.png",
    alt: "5.5 * 2.1mm DC plug for CCTV",
    label: "Second slide label",
    caption:
      "High-quality DC male plug connector ensuring power connectivity for CCTV.",
  },
  {
    src: "/img/slide/3.png",
    alt: "MG Link Cat5/6 network cable",
    label: "Third slide label",
    caption:
      "Premium Cat5/6 network cable, meeting high performance standards.",
  },
  {
    src: "/img/slide/4.png",
    alt: "12V 5AH/10AH power adapter",
    label: "Fourth slide label",
    caption:
      "Reliable 12V power adapters with 5AH and 10AH options for devices.",
  },
  {
    src: "/img/slide/5.png",
    alt: "MG Link Cat5/6 network cable",
    label: "Fifth slide label",
    caption:
      "Top-quality Cat5/6 network cable, ideal for high-speed data transmission.",
  },
];

function BootstrapSlider() {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min").then((bootstrap) => {
      const carouselElement = document.querySelector("#carouselExampleCaptions");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: "carousel",
        });
      }
    });
  }, []);
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative  carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.src}
              className="d-block w-100 md:h-[85vh] object-cover"
              alt={slide.alt}
            />
            <div className="absolute text-center top-[50px] right-[60px] sm:top-[100px] sm:right-[90px]  md:top-[190px] md:right-[170px] w-[50%] text-[12px] sm:text-[20px] md:text-[30px]">
              <h1 className=" font-bold ">{slide.alt}</h1>
              <p className=" mt-2 ">{slide.caption}</p>
              <div className="flex justify-center">

              <Link href={'/products'} className="mt-2 md:mt-5 uppercase hover:text-[black] nav-link shadow-none d-flex align-items-center justify-content-between bg-[#28a745] text-black">
                explore
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon border-2 p-3 border-green-500" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon border-2 p-3 border-green-500" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default BootstrapSlider;
