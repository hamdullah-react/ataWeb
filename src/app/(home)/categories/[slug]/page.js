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
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-4">
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center gap-2 text-xs text-gray-600">
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
        <div className="mb-5">
          <div className="bg-white rounded-xl shadow-md p-4 md:p-5 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                <i className="fa fa-box text-white text-lg"></i>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  {category.name}
                </h1>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                  {category.data.length} Products Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
          {category.data.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="no-underline"
              style={{ textDecoration: 'none' }}
            >
              <AllProductCard data={product} />
            </Link>
          ))}
        </div>

        {/* Back Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-semibold transition-all duration-300 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <i className="fa fa-arrow-left text-xs"></i>
            <span>All Categories</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 text-sm rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
            style={{ textDecoration: 'none' }}
          >
            <i className="fa fa-th text-xs"></i>
            <span>All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
