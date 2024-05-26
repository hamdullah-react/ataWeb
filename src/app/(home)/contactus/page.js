import Link from "next/link";
import React from "react";


export const metadata = {
  title: "Contact Us - Mohammad Ghulam Security Solution (MGSS)",
  description: "Get in touch with MGSS - a leading provider of security solutions including security camera accessories such as cables, connectors, devices, poles, adapters, and power supplies. Contact Ghulam Haider, the General Manager, for any queries regarding our products or services.",
};


const page = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Contact Us
          </h1>
          <div className="d-inline-flex">
            
              <Link  href="/">Home</Link>
           
            <p className="m-0 px-2">-</p>
            <p className="m-0">Contact Us</p>
          </div>
        </div>
      </div>

      {/* Contact Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Contact For Any Queries</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group mt-2">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group mt-2">
                  <textarea
                    className="form-control"
                    rows={6}
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="mt-2">
                  <button
                    className="btn bg-[green] text-white py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
            <span className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  Ghulam Haider
                </span>
                General Manager
              </h1>
            </span>
            <div className="d-flex flex-column mb-3">
              <h5 className="font-weight-semi-bold mb-3">Contact</h5>

              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3" />
                haider@mgssuae.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3" />
                +971 4 33 27 424
              </p>
              <p className="mb-2">
                <i className="fa-solid fa-mobile text-primary mr-3"></i>
                00971562071106
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3" />
                Mustafa Mohd.Abdul Noor Bldg.Behind Golden Square Hotel Nakheel
                Road,Deira,Dubai - U.A.E.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      <div className="container" style={{height:'30vh',overflow:'scroll'}}>
        <div className="row">
          <div className="col-md-12 ">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.9332026577003!2d55.30652977538432!3d25.27283237766228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzIyLjIiTiA1NcKwMTgnMzIuOCJF!5e0!3m2!1sen!2s!4v1710309529056!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
