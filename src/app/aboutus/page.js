import Link from "next/link";
import React from "react";

const Aboutus = () => {
  const images = [
    { src: "/img/4.jpeg", alt: "Image 1" },
    { src: "/img/3.jpeg", alt: "Image 2" },
    { src: "/img/5.jpeg", alt: "Image 3" },
    { src: "/img/1.jpeg", alt: "Image 4" },
  ];

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Contact Us
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link href="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">About Us</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flex justify-center">
          <div className="col-md-5">
            <div className="u-size-30 u-size-60-md">
              <div className="u-layout-col">
                <div className="u-align-left u-container-align-center-sm u-container-align-center-xs u-container-style u-layout-cell u-palette-1-base u-right-cell u-size-60 u-layout-cell-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-1">
                    <h2 className="text-[20px] u-align-center-sm u-align-center-xs u-text u-text-1">
                      About Our Company
                    </h2>
                    <p className="mt-4 u-align-center-sm u-align-center-xs u-text u-text-2">
                    <strong>Mohammad Ghulam Security Solution (MGSS)</strong> was founded in 2018 in Dubai, UAE. 
                      We specialize in providing security solutions including security camera accessories such as cables, connectors, devices, poles, adapters, and power supplies. 
                      At <strong>MGSS,</strong> our main goal is customer satisfaction, offering the best quality products at competitive prices. 
                      We believe in building long-term relationships with our customers and value their trust and loyalty.
                      Our commitment to innovation and excellence drives us to continuously improve and expand our product offerings.
                      At  <strong>MGSS,</strong> we prioritize safety and reliability in all our solutions, ensuring peace of mind for our customers.
                      As a customer-centric company, we actively seek feedback and suggestions to enhance our services and products.

                    </p>
                    <a
                      href="https://nicepage.one"
                      className="u-align-center-sm u-align-center-xs u-border-none u-btn u-button-style u-hover-palette-2-light-1 u-palette-2-base u-text-black u-btn-1"
                    >
                      view all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="container">
              <div className="row flex justify-center">
                {images.map((imag, index) => (
                  <div key={index} className="col-sm-5">
                    <div className="u-container-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                      <div className="u-container-layout u-valign-middle u-container-layout-2">
                        <img
                          className="u-image u-image-round u-radius u-image-1"
                          data-image-width={1600}
                          data-image-height={2000}
                          data-animation-name="customAnimationIn"
                          data-animation-duration={2000}
                          src={imag.src}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
