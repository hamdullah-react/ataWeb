import React from 'react';
import Image from 'next/image';
import { CategoriesImage } from '../../app/Data';

const Catagorie = () => {
  return (
    <>
      {/* Categories Start */}
      <div className="w-full pt-3 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-2">
          {CategoriesImage &&
            CategoriesImage.map((item, index) => (
              <a key={index} href="" className="no-underline" style={{ textDecoration: 'none' }}>
                <div className="cat-item flex flex-col border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 p-4">
                  <p className="text-right text-xs text-gray-600 mb-2">15 Products</p>
                  <div className="cat-img relative overflow-hidden mb-2 rounded-lg">
                    <Image
                      src={'/' + item.img} // Add a leading slash to the relative path
                      alt={item.name}
                      width={1000} // Adjust width and height as needed
                      height={1000}
                      layout="responsive" // Set layout to responsive
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h5 className="font-semibold text-sm md:text-base text-gray-800 m-0">{item.name}</h5>
                </div>
              </a>
            ))}
        </div>
      </div>
      {/* Categories End */}
    </>
  );
};

export default Catagorie;
