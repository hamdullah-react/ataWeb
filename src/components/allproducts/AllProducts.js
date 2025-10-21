import React from "react";
import { categories } from "../../app/Data";
import Link from "next/link";
import AllProductCard from "../allproductcard/AllProductCard";

const AllProducts = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container-fluid px-xl-5">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our <span className="text-green-600">Products</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-2"></div>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Explore our comprehensive range of security camera accessories and equipment
            </p>
          </div>

          {/* Categories */}
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 px-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                  <i className="fa fa-box text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.data.length} Products Available</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="row g-4 px-3">
                {cat.data.map((product, productIndex) => (
                  <div key={productIndex} className="mt-5 col-lg-3 col-md-4 col-sm-6 col-6">
                    <Link
                      href={`/products/${product.slug}`}
                      className="no-underline"
                    >
                      <AllProductCard data={product} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
            >
              <span>View All Products</span>
              <i className="fa fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
