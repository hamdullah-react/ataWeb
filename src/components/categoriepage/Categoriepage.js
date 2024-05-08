import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgimage from "../../../public/img/bgimages.jpg";
import AllProductCard from "../allproductcard/AllProductCard";

const page = ({ receivedObject }) => {
  // const searchParams = useSearchParams();
  // const dataString = searchParams.get("data");
  // const receivedObject = dataString ? JSON.parse(dataString) : {};
  // console.log("first data dddddddddddddd", receivedObject);
  return (
    <>
      <div className="container-fluid  mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            {receivedObject.name}
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link href="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">{receivedObject.name}</p>
          </div>
        </div>
      </div>
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <h1 className="section-title px-5">
          <span className="px-2">{receivedObject.name}</span>
        </h1>

        <div>
          <div className="row px-xl-5 pb-3 mt-4">
            {receivedObject.data.map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-6 pb-1">
                <Link
                  style={{ textDecoration: "none" }}
                  href={{
                    pathname: "/detail",
                    query: { data: JSON.stringify(product) },
                  }}
                >
                  <AllProductCard data={product} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
