import React from "react";
import { categories } from "../../app/Data";
import Link from "next/link";
import AllProductCard from "../allproductcard/AllProductCard";

const AllProducts = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 py-6">
        <div className="w-full px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Our <span className="text-green-600">Products</span>
            </h2>
            <div className="w-12 h-0.5 bg-green-600 mx-auto rounded-full mb-1.5"></div>
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
              Explore our comprehensive range of security camera accessories and equipment
            </p>
          </div>

          {/* Categories */}
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="mb-6">
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                  <i className="fa fa-box text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.data.length} Products Available</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.data.map((product, productIndex) => (
                  <Link
                    key={productIndex}
                    href={`/products/${product.slug}`}
                    className="no-underline"
                    style={{ textDecoration: 'none' }}
                  >
                    <AllProductCard data={product} />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* View All Button */}
          <div className="text-center mt-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span>View All Products</span>
              <i className="fa fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
