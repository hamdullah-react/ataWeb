import React from "react";
import Image from "next/image";
import AllproductModal from "./AllproductModal";
import { categories } from "../../app/Data";

const AllProducts = () => {
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trendy Products</span>
          </h2>
        </div>
        {categories.map((cat, index) => (
          <div key={index}>
            <h1 className="text-[20px] font-bold px-5">
              {cat.name}
            </h1>
           
            <div className="row px-xl-5 pb-3 mt-4">
              {cat.data.map((product,index) => (
                <div
                  key={index}
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
        ))}
      </div>
      {/* Products End */}
    </>
  );
};

export default AllProducts;
