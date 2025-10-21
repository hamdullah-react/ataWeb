import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center px-4">
        <div className="mb-8">
          <i className="fa fa-exclamation-triangle text-yellow-500 text-6xl mb-4"></i>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Product Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
          >
            <i className="fa fa-th"></i>
            <span>Browse All Products</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 no-underline"
          >
            <i className="fa fa-home"></i>
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
