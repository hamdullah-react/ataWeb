import Image from "next/image";
import Link from "next/link";
import React from "react";

function SearchDropDown({ categories, onProductClick }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {categories.map((category) => (
        <div key={category.id} className="mb-4 last:mb-0">
          {/* Category Header */}
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700">
              {category.name}
            </h4>
          </div>

          {/* Products */}
          <div className="divide-y divide-gray-100">
            {category.data.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={onProductClick}
                className="flex items-center gap-3 p-3 hover:bg-green-50 transition-colors duration-200 no-underline"
              >
                {/* Product Image */}
                <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={`/${product.img}`}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow min-w-0">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product.name}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <i className="fa fa-arrow-right text-gray-400 text-xs"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchDropDown;
