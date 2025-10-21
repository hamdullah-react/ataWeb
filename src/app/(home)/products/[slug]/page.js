import React from "react";
import { categories } from "../../../Data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all products
export async function generateStaticParams() {
  const allProducts = [];

  categories.forEach((category) => {
    category.data.forEach((product) => {
      allProducts.push({
        slug: product.slug,
      });
    });
  });

  return allProducts;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;

  // Find the product by slug
  let product = null;
  let category = null;

  for (const cat of categories) {
    const foundProduct = cat.data.find((item) => item.slug === slug);
    if (foundProduct) {
      product = foundProduct;
      category = cat;
      break;
    }
  }

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | MGSS - Security Solutions`,
    description: product.description.substring(0, 160),
    keywords: `${product.name}, ${category.name}, CCTV, Security Camera, Dubai, UAE`,
  };
}

// Get product data by slug
function getProductBySlug(slug) {
  for (const category of categories) {
    const product = category.data.find((item) => item.slug === slug);
    if (product) {
      return { product, category };
    }
  }
  return null;
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const result = getProductBySlug(slug);

  if (!result) {
    notFound();
  }

  const { product, category } = result;

  // Get related products from the same category
  const relatedProducts = category.data
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

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
            <li>
              <Link href="/products" className="hover:text-green-600 transition-colors">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{category.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="row g-5">
          {/* Product Image */}
          <div className="col-lg-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
                <Image
                  src={`/${product.img}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <i className="fa fa-tag mr-2"></i>
                  {category.name}
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i className="fa fa-info-circle text-green-600"></i>
                  Product Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 p-5 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-1"></i>
                    <span>High-quality materials and construction</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-1"></i>
                    <span>Easy installation and setup</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-1"></i>
                    <span>Durable and weather-resistant</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-1"></i>
                    <span>Compatible with various systems</span>
                  </li>
                </ul>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/971562071106"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>WhatsApp Inquiry</span>
                </a>
                <a
                  href="tel:+971562071106"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                >
                  <i className="fa fa-phone text-lg"></i>
                  <span>Call Us Now</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 p-5 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <i className="fa fa-phone text-green-600"></i>
                    <span>+971 56 2071 106 / +971 43 32 7424</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <i className="fa fa-envelope text-green-600"></i>
                    <span>haider@mgssuae.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <i className="fa fa-map-marker-alt text-green-600"></i>
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Related Products
              </h2>
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>

            <div className="row g-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 no-underline"
                  >
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={`/${relatedProduct.img}`}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm text-gray-800 line-clamp-2 min-h-[2.5rem]">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-2">
                        {relatedProduct.description}
                      </p>
                      <span className="text-xs text-green-600 font-semibold mt-3 flex items-center gap-1">
                        View Details
                        <i className="fa fa-arrow-right text-[10px]"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-semibold transition-all duration-300 no-underline"
          >
            <i className="fa fa-arrow-left"></i>
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
