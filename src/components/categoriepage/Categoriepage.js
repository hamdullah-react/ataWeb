"use client";
import AllproductModal from "@/components/allproducts/AllproductModal";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import bgimage from "../../../public/img/bgimages.jpg";

const page = () => {
  const searchParams = useSearchParams();
  const dataString = searchParams.get("data");
  const receivedObject = dataString ? JSON.parse(dataString) : {};
  console.log("first data", receivedObject);
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
            {receivedObject.data.map((product,index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <Link
               style={{textDecoration:'none'}}
               href={{
                pathname: "/detail",
                query: { data: JSON.stringify(product) },
              }}
            >
            <div
                  style={{
                    backgroundImage: `url(${bgimage.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    height:'auto'
                  }}
              className="card product-item border-0 mb-4"
            >
              <div style={{borderRadius: "20px", }}  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <Image
                  src={`/${product.img}`}
                  alt={product.name}
                  width={500}
                  height={400}
                  layout="responsive"
                />
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3 uppercase">
                  {product.name}
                </h6>
              </div>
              </div>
          

            </div>
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
