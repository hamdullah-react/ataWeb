import * as React from 'react';
import Image from 'next/image';

export default function AllProductCard({ data }) {
  return (
    <>
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 h-100">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-50">
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={`/${data.img}`}
              alt={data.name}
              width={500}
              height={400}
              className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 text-white text-xs">
                <i className="fa fa-eye"></i>
                <span>View Details</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-4">
          <h6 className="font-bold text-xs md:text-sm text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
            {data.name}
          </h6>
          <p className="text-[10px] md:text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
            {data.description}
          </p>

          {/* View Button */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-green-600 font-semibold group-hover:gap-2 flex items-center transition-all duration-300">
              <span>Learn More</span>
              <i className="fa fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
