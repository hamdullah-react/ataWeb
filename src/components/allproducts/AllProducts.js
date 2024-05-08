import React from "react";
import Image from "next/image";

import { categories } from "../../app/Data";

import Link from "next/link";
import bgimage from "../../../public/img/bgimages.jpg";
import AllProductCard from "../allproductcard/AllProductCard";

const AllProducts = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trendy Products</span>
          </h2>
        </div>
        {categories.map((cat, index) => (
          <div key={index}>
            <h1 className="text-[20px] font-bold px-5">{cat.name}</h1>

            <div className="row px-xl-5 pb-3 mt-4">
              {cat.data.map((product, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-6 pb-1">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={{
                      pathname: "/detail",
                      query: { data: JSON.stringify(product) },
                    }}
                  >
                    <AllProductCard data={product}/>
                   
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Products End */}
    </>
  );
};

export default AllProducts;
