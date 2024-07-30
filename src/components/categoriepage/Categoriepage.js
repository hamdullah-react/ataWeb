"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import bgimage from "../../../public/img/bgimages.jpg";
import AllProductCard from "../allproductcard/AllProductCard";
import { useCategoryContext } from "../context/CategoryContext";
import Skeleton from "react-loading-skeleton";

const page = ({ id }) => {
  const { categoryData, fetchCategoryById, loading } = useCategoryContext();
  useEffect(() => {
    if (id) {
      fetchCategoryById(id);
    }
  }, [id]);

  const skeletonItems = Array.from({ length: 5 }).map((_, index) => {
    return (
      <div className="" key={index}>
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
            {categoryData?.name}
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link href="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">{loading ?  <Skeleton width={50} />:categoryData?.name}</p>
          </div>
        </div>
      </div>
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <h1 className="section-title px-5">
          <span className="px-2">{loading ?  <Skeleton width={50} />:categoryData?.name}</span>
        </h1>

        <div>
          <div className="row px-xl-5 pb-3 mt-4">
            {loading ? (
              <div className="flex justify-around row px-xl-5 pb-3">
                {skeletonItems}
              </div>
            ) : (
              categoryData?.items.map((product, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-6 pb-1">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/productdetail/${product.id}`}
                  >
                    <AllProductCard data={product} />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
