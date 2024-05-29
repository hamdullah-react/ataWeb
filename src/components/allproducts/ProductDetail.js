import Link from "next/link";

import React from "react";

const ProductDetail = ({ receivedObject }) => {
  // const searchParams = useSearchParams();

  // const dataString = searchParams.get("data");
  // const receivedObject = dataString ? JSON.parse(dataString) : {};
  return (
    <>
      {/* Page Header Start */}

      <div className="container-fluid  mb-5">
      <p className="mt-2">
              <Link href="/">Home</Link>
            </p>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="text-center font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            
            <p className="m-0 text-center">{receivedObject.name}</p>
          </div>

          
          
        </div>
      </div>
      {/* Page Header End */}
      {/* Shop Detail Start */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5 flex justify-center items-center">
          <div className="col-lg-5 pb-5">
            <div className="carousel-inner border">
              <div className="carousel-item active bg-white rounded-[10px]">
                <img
                  className="w-100 h-100"
                  src={receivedObject.img}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{receivedObject.name}</h3>
            <p class="mb-4 mt-8">{receivedObject.description}</p>
          </div>
        </div>
      </div>
      {/* Shop Detail End */}
    </>
  );
};

export default ProductDetail;
