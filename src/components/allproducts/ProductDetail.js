"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const ProductDetail = () => {
    const searchParams = useSearchParams();


    const dataString = searchParams.get("data");
    const receivedObject = dataString ? JSON.parse(dataString) : {};
    console.log("first data dddd", receivedObject);
  return (
    <>
  {/* Page Header Start */}
  <div className="container-fluid  mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <Link href="/">Home</Link>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">{receivedObject.name}</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Shop Detail Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col-lg-5 pb-5">
  
          <div className="carousel-inner border">
            <div className="carousel-item active">
              <img
                className="w-100 h-100"
                src={receivedObject.img}
                alt="Image"
              />
            </div>
          
        
          </div>
   
       
      </div>
      <div className="col-lg-7 pb-5">
        <h3 className="font-weight-semi-bold">{receivedObject.name}</h3>   
      
  </div>
  </div>
  </div>
  {/* Shop Detail End */}
</>

  )
}

export default ProductDetail