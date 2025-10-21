"use client";
import React from "react";
import { categories } from "../../app/Data";
import { useCategoryContext } from "../../components/context/CategoryContext";
import Link from "next/link";
import AllProductCard from "../allproductcard/AllProductCard";

const Catvoisepage = () => {
  const {
    selectedCategory,
    searchQuery,
    handleCategorySelect,
    handleSearchInputChange,
    filteredProducts,
  } = useCategoryContext();

  const totalProductsLength = categories.reduce((accumulator, category) => {
    return accumulator + category.data.length;
  }, 0);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-8">
      <div className="container-fluid px-xl-5">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">All Products</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Browse our complete collection of {totalProductsLength} security
            camera accessories
          </p>
        </div>

        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i className="fa fa-search text-green-600"></i>
                  Search Products
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full py-2 px-4 pr-10 text-sm rounded-full border-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <i className="fa fa-search text-gray-400 text-sm"></i>
                  </div>
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i className="fa fa-filter text-green-600"></i>
                  Filter by Category
                </h3>

                <div className="space-y-2">
                  {/* All Products */}
                  <label
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedCategory === null
                        ? "bg-green-50 border-2 border-green-500"
                        : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === null}
                        onChange={() => handleCategorySelect(null)}
                        className="w-4 h-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        All Products
                      </span>
                    </div>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full font-semibold">
                      {totalProductsLength}
                    </span>
                  </label>

                  {/* Category Options */}
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-green-50 border-2 border-green-500"
                          : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category.id}
                          onChange={() => handleCategorySelect(category.id)}
                          className="w-4 h-4 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm font-medium text-gray-800">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full font-semibold">
                        {category.data.length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-lg-9">
            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-800">
                  {filteredProducts.length}
                </span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
                {searchQuery && (
                  <span>
                    {" "}
                    for "<span className="text-green-600">{searchQuery}</span>"
                  </span>
                )}
              </p>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="row g-4">
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="col-6 col-sm-6 col-md-4 col-lg-4 mt-4"
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="no-underline"
                    >
                      <AllProductCard data={product} />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              // No Results
              <div className="text-center py-12">
                <div className="mb-6">
                  <i className="fa fa-search text-gray-300 text-6xl mb-4"></i>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    No Products Found
                  </h3>
                  <p className="text-gray-600">
                    {searchQuery
                      ? `No results found for "${searchQuery}"`
                      : "No products match your filter criteria"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleCategorySelect(null);
                    handleSearchInputChange({ target: { value: "" } });
                  }}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <i className="fa fa-refresh"></i>
                  <span>Clear Filters</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catvoisepage;
