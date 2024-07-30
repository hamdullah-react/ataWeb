"use client";
import Link from "next/link";
import { useCategoryContext } from "@/components/context/CategoryContext";
import AllProductCard from "@/components/allproductcard/AllProductCard";
import Skeleton from "react-loading-skeleton";

const ProductsPage = () => {
  const {
    categories,
    selectedCategory,
    searchQuery,
    handleCategorySelect,
    handleSearchInputChange,
    filteredProducts,
    loading,
    error,
    products,
  } = useCategoryContext();

  // Calculate the total number of products based on the filtered list
  const totalProductsLength = filteredProducts.length;

  const skeletonItems = Array.from({ length: 5 }).map((_, index) => {
    return (
      <div className="" key={index}>
        <span>
          <Skeleton height={200} width={300} />
        </span>
        <span>
          <Skeleton width={200} />
        </span>
        <span>
          <Skeleton width={250} />
        </span>
        <span>
          <Skeleton width={300} />
        </span>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link href="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Categories</h5>
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-all"
                    onChange={() => handleCategorySelect(null)}
                    checked={selectedCategory === null}
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Products
                  </label>
                  <span className="badge border font-weight-normal">
                    {totalProductsLength}
                  </span>
                </div>

                {products.map((category) => (
                  <div
                    key={category.id}
                    className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                  >
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`price-${category.id}`}
                      onChange={() => handleCategorySelect(category.id)}
                      checked={selectedCategory === category.id}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`price-${category.id}`}
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      {category.name}
                    </label>
                    <span className="badge border font-weight-normal">
                      {
                        products
                          .filter((product) =>
                            product.items.some(
                              (item) => item.categoryId === category.id
                            )
                          )
                          .flatMap((product) => product.items).length
                      }
                    </span>
                  </div>
                ))}
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-around row px-xl-5 pb-3">
                  {skeletonItems}
                </div>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <div key={index} className="col-6 col-lg-4 col-md-4 pb-1">
                    <Link
                      href={`/productdetail/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <AllProductCard data={item} />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p>No products found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
