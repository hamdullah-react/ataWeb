import React from "react";
import Image from "next/image";
import AllproductModal from "./AllproductModal";
import { categories } from "../../app/Data";
import Modalbutton from "./Modalbutton";
import Link from "next/link";
import bgimage from "../../../public/img/bgimages.jpg";

const AllProducts = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trendy Products</span>
          </h2>
        </div>
        {categories.map((cat, index) => (
          <div key={index}>
            <h1 className="text-[20px] font-bold px-5">{cat.name}</h1>

            <div className="row px-xl-5 pb-3 mt-4">
              {cat.data.map((product, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-6 pb-1">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={{
                      pathname: "/detail",
                      query: { data: JSON.stringify(product) },
                    }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${bgimage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "20px",
                        height:'auto'
                       
                      }}
                      className="card product-item border-0 mb-4"
                    >
                      <div  style={{ textDecoration: "none",borderRadius: "20px", }} className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <Image
                          src={`/${product.img}`}
                          alt={product.name}
                          width={500}
                          height={400}
                          layout="responsive"
                        />
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 className="text-truncate mb-3 uppercase">
                            {product.name}
                          </h6>
                          <p> {product.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Products End */}
    </>
  );
};

export default AllProducts;
