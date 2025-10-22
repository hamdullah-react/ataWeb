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
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-4">
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center gap-2 text-xs text-gray-600">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden mb-3">
                <Image
                  src={`/${product.img}`}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  <i className="fa fa-tag mr-1.5 text-xs"></i>
                  {category.name}
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-4 md:p-5">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>

              {/* Description */}
              <div className="mb-4">
                <h2 className="text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <i className="fa fa-info-circle text-green-600 text-sm"></i>
                  Product Description
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-4 p-3 md:p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">
                  Key Features
                </h3>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-0.5 text-xs"></i>
                    <span>High-quality materials and construction</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-0.5 text-xs"></i>
                    <span>Easy installation and setup</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-0.5 text-xs"></i>
                    <span>Durable and weather-resistant</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                    <i className="fa fa-check-circle text-green-600 mt-0.5 text-xs"></i>
                    <span>Compatible with various systems</span>
                  </li>
                </ul>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <a
                  href="https://wa.me/971562071106"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fab fa-whatsapp text-base"></i>
                  <span>WhatsApp Inquiry</span>
                </a>
                <a
                  href="tel:+971562071106"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fa fa-phone text-sm"></i>
                  <span>Call Us Now</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">
                  Contact Information
                </h3>
                <div className="space-y-1.5 text-xs md:text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <i className="fa fa-phone text-green-600 text-xs"></i>
                    <span>+971 56 2071 106 / +971 43 32 7424</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <i className="fa fa-envelope text-green-600 text-xs"></i>
                    <span>haider@mgssuae.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <i className="fa fa-map-marker-alt text-green-600 text-xs"></i>
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-6">
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1.5">
                Related Products
              </h2>
              <div className="w-12 h-0.5 bg-green-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="relative h-32 md:h-40 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={`/${relatedProduct.img}`}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2.5 md:p-3">
                    <h3 className="font-bold text-xs md:text-sm text-gray-800 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-600 line-clamp-2 mt-1.5">
                      {relatedProduct.description}
                    </p>
                    <span className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1">
                      View Details
                      <i className="fa fa-arrow-right text-[10px]"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-semibold transition-all duration-300 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <i className="fa fa-arrow-left text-xs"></i>
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
