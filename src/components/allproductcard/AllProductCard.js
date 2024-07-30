import * as React from 'react';

import Image from 'next/image';

export default function AllProductCard({ data }) {

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          height: 'auto',
          boxShadow: "10px 4px 6px rgba(0, 0, 0, 0.1)"
        }}
        className=" card product-item border-0 mt-4"
      >
        <div style={{ textDecoration: "none", borderRadius: "10px" }} className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <Image
            src={`${data.img}`}
            alt={data.name}
            width={500}
            height={100}
            className=' md:h-[50vh]'
          />
          <div className=" h-[9.5vh] md:h-[16vh] px-2 border-left border-right text-center">
            <h6 className="font-weight-bold text-[13px] md:text-[15px] text-truncate mb-2  uppercase">
              {data.name}
            </h6>
            <p className="overflow-hidden text-[10px] md:text-[15px] line-clamp-3">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
