import React from "react";
import { categories } from "../../../Data";
import Link from "next/link";
import AllProductCard from "@/components/allproductcard/AllProductCard";
import { notFound } from "next/navigation";

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} | MGSS - Security Solutions`,
    description: `Browse our complete range of ${category.name}. Find high-quality security camera accessories and equipment. ${category.data.length} products available.`,
    keywords: `${category.name}, CCTV accessories, security camera, Dubai, UAE`,
  };
}

// Get category data by slug
function getCategoryBySlug(slug) {
  return categories.find((cat) => cat.slug === slug);
}

export default function CategoryPage({ params }) {
  const { slug } = params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12">
      <div className="container-fluid px-xl-5">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-green-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/categories"
                className="hover:text-green-600 transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-md">
                <i className="fa fa-box text-white text-2xl"></i>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {category.name}
                </h1>
                <p className="text-gray-600 mt-1">
                  {category.data.length} Products Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {category.data.map((product, index) => (
            <div key={index} className="mt-4 col-lg-3 col-md-4 col-sm-6 col-6">
              <Link
                href={`/products/${product.slug}`}
                className="no-underline"
              >
                <AllProductCard data={product} />
              </Link>
            </div>
          ))}
        </div>

        {/* Back Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-semibold transition-all duration-300 no-underline"
          >
            <i className="fa fa-arrow-left"></i>
            <span>All Categories</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
          >
            <i className="fa fa-th"></i>
            <span>All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
