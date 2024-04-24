import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgimage from "../../../public/img/bgimages.jpg";
import AllproductModal from "../allproducts/AllproductModal";

function SearchDropDown({ categories }) {
  return (
    <div className="dropdown-menu show overflow-y-scroll" style={{height:'20vh',width:'100%', display: "block" }}>
      {categories.map((category) => (
        <div key={category.id} className="dropdown-item">
          {category.data.map((product) => (
            <div key={product.id} className="py-1">
              <Link
                style={{ textDecoration: "none" }}
                href={{
                  pathname: "/detail",
                  query: { data: JSON.stringify(product) },
                }}
                className="text-[13px] md:text-[20px]"  
              >
    
                {product.name}
                
              </Link>
          
              <hr/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SearchDropDown;
