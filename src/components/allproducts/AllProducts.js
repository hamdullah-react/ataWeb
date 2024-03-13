import React from 'react';
import Image from 'next/image';
import AllproductModal from './AllproductModal';

const products = [
  {
    id: 1,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-1.jpg",
    altText: "Product 1",
  },
  {
    id: 2,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-2.jpg",
    altText: "Product 2",
  },
  {
    id: 3,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-3.jpg",
    altText: "Product 3",
  },
  {
    id: 4,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-4.jpg",
    altText: "Product 4",
  },
  {
    id: 5,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-5.jpg",
    altText: "Product 5",
  },
  {
    id: 6,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-6.jpg",
    altText: "Product 6",
  },
  {
    id: 7,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-7.jpg",
    altText: "Product 7",
  },
  {
    id: 8,
    name: "Colorful Stylish Shirt",
    price: 123.00,
    imageUrl: "/img/product-8.jpg",
    altText: "Product 8",
  },
];

const AllProducts = () => {
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trendy Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {products.map(product => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.altText}
                    width={400}
                    height={600}
                    layout="responsive"
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">{product.name}</h6>
                </div>
                <div className="w-[100%] card-footer d-flex justify-content-between bg-light border">
                  <span className="btn btn-sm text-dark p-0 w-[100%]">
                    <AllproductModal product={product}/>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Products End */}
    </>
  );
};

export default AllProducts;
