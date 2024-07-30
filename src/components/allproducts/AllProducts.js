"use client";
import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import AllProductCard from "../allproductcard/AllProductCard";
import { useCategoryContext } from "../context/CategoryContext";

const AllProducts = () => {
  const { products, loading, error } = useCategoryContext();

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

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trendy Products</span>
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-around row px-xl-5 pb-3">
          {skeletonItems}
        </div>
      ) : (
        products.map((cata, index) => (
          <div key={index}>
            <h1 className="text-[20px] font-bold px-5">{cata.name}</h1>
            <div className="row px-xl-5 pb-3 mt-4">
              {cata.items.map((product, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-6 pb-1">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/productdetail/${product.id}`}
                  >
                    <AllProductCard data={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllProducts;
