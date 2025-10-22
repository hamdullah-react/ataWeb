import * as React from 'react';
import Image from 'next/image';

export default function AllProductCard({ data }) {
  return (
    <>
      <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-green-400 h-100 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={`/${data.img}`}
              alt={data.name}
              width={500}
              height={400}
              className="w-full h-32 md:h-40 object-contain group-hover:scale-105 transition-all duration-700 ease-out p-2"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                  <i className="fa fa-eye text-xs"></i>
                  <span>Quick View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Badge */}
          <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            NEW
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-3.5 bg-gradient-to-b from-white to-gray-50/30">
          <h6 className="font-bold text-xs md:text-sm text-gray-800 group-hover:text-green-600 mb-1.5 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem] transition-colors duration-300 leading-snug">
            {data.name}
          </h6>
          <p className="text-[10px] md:text-xs text-gray-600 line-clamp-2 leading-relaxed mb-2.5">
            {data.description}
          </p>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-xs text-green-600 font-bold group-hover:gap-2 flex items-center transition-all duration-300">
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Details</span>
              <i className="fa fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
            </span>
            <div className="w-6 h-6 rounded-full bg-green-50 group-hover:bg-green-600 flex items-center justify-center transition-all duration-300">
              <i className="fa fa-plus text-[10px] text-green-600 group-hover:text-white group-hover:rotate-90 transition-all duration-300"></i>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
}
