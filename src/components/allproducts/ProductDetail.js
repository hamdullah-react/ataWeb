"use client";
import Link from "next/link";

import React, { useEffect } from "react";
import { useCategoryContext } from "../context/CategoryContext";
import Skeleton from "react-loading-skeleton";

const ProductDetail = ({ id }) => {
  const { fetchProductDetail, productDetail, productDetailLoading } =
    useCategoryContext();
  useEffect(() => {
    if (id) {
      fetchProductDetail(id);
    }
  }, [id]);

  // const searchParams = useSearchParams();

  // const dataString = searchParams.get("data");
  // const receivedObject = dataString ? JSON.parse(dataString) : {};

  const skeletonItems = Array.from({ length: 5 }).map((_, index) => {
    return (
      <div  key={index}>
        <span>
          <Skeleton height={200} width={300} />
        </span>
        <span>
          <Skeleton width={200} />
        </span>
        <span>
          <Skeleton width={250} />
        </span>
        <span>
          <Skeleton width={300} />
        </span>
      </div>
    );
  });
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
            <h2 className="m-0 text-center">{productDetail?.name}</h2>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Shop Detail Start */}
 
      {

        productDetailLoading?(
          <div className="container">

          <div className="row justify-center">

        <div className="flex  gap-5">
          <span>
            <Skeleton height={400} width={500} />
          </span>
          <div>
          <span>
            <Skeleton width={500} />
          </span>
          <span>
            <Skeleton width={350} />
          </span>
          <span>
            <Skeleton width={250} />
          </span>
          <span>
            <Skeleton width={500} />
          </span>
          <span>
            <Skeleton width={350} />
          </span>
          <span>
            <Skeleton width={250} />
          </span>
          </div>
       
        </div>
          </div>
          </div>
      ):( <div className="container-fluid py-5">
        <div className="row px-xl-5 flex justify-center items-center">
          <div className="col-lg-5 pb-5">
            <div className="carousel-inner border">
              <div className="carousel-item active bg-white rounded-[10px]">
                <img
                  className="w-100 h-100"
                  src={productDetail?.img}
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{productDetail?.name}</h3>
            <p className="mb-4 mt-8">{productDetail?.description}</p>
          </div>
        </div>
      </div>)
      }
     
      {/* Shop Detail End */}
    </>
  );
};

export default ProductDetail;
