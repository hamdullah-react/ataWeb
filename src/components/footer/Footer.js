import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (

    <>
      {/* Footer Start */}
      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <Link href={'./'} className="text-decoration-none">
              <h1 className="mb-4 text-[15px]  display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  Ghulam Haider
                </span>
                General Manager
              </h1>
            </Link>
            <p className="mb-0">
              <i className="fa-solid fa-mobile text-primary mr-3"></i>
              +971 4 3327424
            </p>
            <p className="mb-0">

              <i className="fa fa-phone-alt text-primary mr-3" />
              +971 56 2071 106
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              haider@mgssuae.com
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3" />
              Mustafa Mohd.Abdul Noor Bldg.Behind Citi stay premium Hotel Nakheel
                Road,Deira,Dubai - U.A.E.
            </p>

          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-dark mb-2" href="/">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link className="text-dark mb-2" href="/products">
                    <i className="fa fa-angle-right mr-2" />
                    All Products
                  </Link>
                  
                  <Link className="text-dark mb-2" href="/aboutus">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </Link>
                  <Link className="text-dark mb-2" href="/contactus">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-dark mb-2" href="/">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link className="text-dark mb-2" href="/products">
                    <i className="fa fa-angle-right mr-2" />
                    All Products
                  </Link>
                  <Link className="text-dark mb-2" href="/aboutus">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </Link>
                  <Link className="text-dark mb-2" href="/contactus">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row border-top border-light mx-xl-5 py-4">
      <div className="col-md-6 px-xl-0">
        <p className="mb-md-0 text-center text-md-left text-dark">
          ©{" "}
          <a className="text-dark font-weight-semi-bold" href="#">
            Your Site Name
          </a>
          . All Rights Reserved. Designed by
          <a
            className="text-dark font-weight-semi-bold"
            href="https://htmlcodex.com"
          >
            HTML Codex
          </a>
          <br />
          Distributed By{" "}
          <a href="https://themewagon.com" target="_blank">
            ThemeWagon
          </a>
        </p>
      </div>
      <div className="col-md-6 px-xl-0 text-center text-md-right">
        <img className="img-fluid" src="img/payments.png" alt="" />
      </div>
    </div> */}
      </div>
      {/* Footer End */}
    </>

  )
}

export default Footer