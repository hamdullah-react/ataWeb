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
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-4">
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Product <span className="text-green-600">Categories</span>
          </h1>
          <div className="w-12 h-0.5 bg-green-600 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Explore our comprehensive range of security camera accessories
            organized by categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.slug}`}
              className="group block no-underline"
              style={{ textDecoration: 'none' }}
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
                {/* Category Image Grid */}
                <div className="relative h-32 sm:h-36 md:h-40 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="grid grid-cols-2 gap-1 p-1.5 sm:p-2 h-full">
                    {category.data.slice(0, 4).map((product, idx) => (
                      <div
                        key={idx}
                        className="relative bg-white rounded-sm overflow-hidden shadow-sm"
                      >
                        <Image
                          src={`/${product.img}`}
                          alt={product.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-2.5 sm:p-3">
                  <h2 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 mb-0.5 line-clamp-1">
                    {category.name}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {category.data.length} Products
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Products Button */}
        <div className="text-center mt-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
          >
            <i className="fa fa-th text-xs"></i>
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
