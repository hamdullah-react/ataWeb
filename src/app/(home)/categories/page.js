import React from "react";
import { categories } from "../../Data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Product Categories | MGSS - Security Camera Accessories",
  description:
    "Browse our complete range of security camera accessories by category. Find camera polls, cables, devices, adaptors, power supplies, and connectors for your surveillance needs.",
  keywords:
    "security camera categories, CCTV accessories, camera brackets, security cables, surveillance devices",
};

const CategoriesPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12">
      <div className="container-fluid px-xl-5">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Product <span className="text-green-600">Categories</span>
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of security camera accessories
            organized by categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-3 g-md-4">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
              <Link
                href={`/categories/${category.slug}`}
                className="group block no-underline"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
                  {/* Category Image Grid */}
                  <div className="relative h-40 sm:h-48 md:h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 p-2 sm:p-3 h-full">
                      {category.data.slice(0, 4).map((product, idx) => (
                        <div
                          key={idx}
                          className="relative bg-white rounded-md overflow-hidden shadow-sm"
                        >
                          <Image
                            src={`/${product.img}`}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-3 sm:p-4">
                    <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 mb-1 line-clamp-1">
                      {category.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {category.data.length} Products
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* All Products Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
          >
            <i className="fa fa-th"></i>
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
