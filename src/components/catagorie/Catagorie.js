import React from 'react';
import Image from 'next/image';
import { CategoriesImage } from '../../app/Data';

const Catagorie = () => {
  return (
    <>
      {/* Categories Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {CategoriesImage &&
            CategoriesImage.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 pb-1">
                <div
                  className=" cat-item d-flex flex-column border mb-4"
                  style={{ padding: 30 }}
                >
                  <p className="text-right">15 Products</p>
                  <a href="" className="cat-img position-relative overflow-hidden mb-3">
                    <Image
                      src={'/' + item.img} // Add a leading slash to the relative path
                      alt={item.name}
                      width={1000} // Adjust width and height as needed
                      height={1000}
                      layout="responsive" // Set layout to responsive
                    />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Categories End */}
    </>
  );
};

export default Catagorie;
