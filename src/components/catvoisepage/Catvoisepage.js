"use client";
import Image from "next/image";
import React, { useState } from "react";
import {categories} from '../../app/Data'
import { useCategoryContext } from "../../components/context/CategoryContext";
import Link from "next/link";
import bgimage from "../../../public/img/bgimages.jpg";

const Catvoisepage = () => {
    const {
        selectedCategory,
        searchQuery,
        handleCategorySelect, 
        handleSearchInputChange,
        filteredProducts} = useCategoryContext();


        const totalProductsLength = categories.reduce((accumulator, category) => {

          return accumulator + category.data.length;
        }, 0);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid  mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link href="/products">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Shop Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-12">
            {/* Price Start */}
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Categories</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-all"
                    onChange={() => handleCategorySelect(null)}
                    checked={selectedCategory === null}
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Products
                  </label>
                  <span className="badge border font-weight-normal">{totalProductsLength}</span>
                </div>

                {categories.map((category,index) => (
                  <div
                    key={index}
                    className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                  >
                  
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`price-${category.id}`}
                      onChange={() => handleCategorySelect(category.id)}
                      checked={selectedCategory === category.id}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`price-${category.id}`}
                    >
                      {category.name}
                    </label>
                    <span className="badge border font-weight-normal">{category.data.length}</span>
                  </div>
                ))}
              </form>
            </div>
            {/* Price End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {filteredProducts.map((product,index) => (
                 <div key={index} className="col-6 col-lg-3 col-md-6  pb-1">
              <Link
                    style={{ textDecoration: "none" }}
                    href={{
                      pathname: "/detail",
                      query: { data: JSON.stringify(product) },
                    }}
                  >
                    <div
                      style={{
                        // backgroundImage: `url(${bgimage.src})`,
                        // backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        borderRadius: "20px",
                        height:'auto'
                      }}
                      className="card product-item border-0 mb-4"
                    >
                      <div  style={{ textDecoration: "none",borderRadius: "20px", }} className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <Image
                          src={`/${product.img}`}
                          alt={product.name}
                          width={500}
                          height={400}
                          layout="responsive"
                        />
                        <div className="card-body border-left border-right text-center ">
                          <h6 className="text-truncate mb-3 uppercase">
                            {product.name}
                          </h6>
                        <p> {product.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
               </div>
              ))}
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}
    </>
  );
};

export default Catvoisepage;
