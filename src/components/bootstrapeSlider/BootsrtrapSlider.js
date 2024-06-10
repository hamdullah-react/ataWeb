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
      const carouselElement = document.querySelector(
        "#carouselExampleCaptions"
      );
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: "carousel",
        });
      }
    });
  }, []);
  return (
    <div
      id="carouselExampleCaptions"
      className=" inset-0 bg-center bg-cover bg-no-repeat z-0 py-2 glowing-border bg-white carousel slide carousel-fade bg-[url('/img/slide/bg.png')]"
    >
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
            className={`container py-3 carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="row flex justify-center">
              <div className="col-md-6">
                <div className="flex justify-center items-center">
                  <img
                    src={slide.src}
                    className="h-[40vh] md:h-[90vh] object-contain"
                    alt={slide.alt}
                  />
                </div>
              </div>
              <div className="col-md-6 flex justify-center items-center">
                <div className="text-center md:text-[25px] lg:text-[30px]">
                  <h1 className="font-bold">{slide.alt}</h1>
                  <p className="mt-3">{slide.caption}</p>
                  <div className="flex justify-center mt-2">
                    <Link
                      href="/products"
                      className=" uppercase hover:text-[black] nav-link  d-flex align-items-center justify-content-between text-[25px] py-0 rounded-sm shadow-md bg-[#267338] text-white hover:bg-[#0e551e]"
                    >
                      explore
                    </Link>
                  </div>
                </div>
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
        <span
          className="carousel-control-prev-icon border-2 p-3 border-green-500"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon border-2 p-3 border-green-500"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
}

export default BootstrapSlider;
