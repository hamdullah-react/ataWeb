"use client";
import AllproductModal from "@/components/allproducts/AllproductModal";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const receivedObject = dataString ? JSON.parse(dataString) : {};
  console.log("first data", receivedObject);
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
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
            {receivedObject.data.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-6 col-sm-12 pb-1"
              >
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <Image
                      src={`/${product.img}`}
                      alt={product.name}
                      width={400}
                      height={600}
                      layout="responsive"
                    />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{product.name}</h6>
                  </div>
                  <div className="w-[100%] card-footer d-flex justify-content-between bg-light border">
                    <span className="btn btn-sm text-dark p-0 w-[100%]">
                      <AllproductModal product={product} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
