import Image from "next/image";
import React from "react";

function SearchDropDown({ categories }) {


    console.log('first',categories)
  return (
    <div className="dropdown-menu show" style={{ display: "block" }}>
      {categories.map((category) => (
        <div key={category.id} className="dropdown-item">
          {/* <h6>{category.name}</h6> */}
          <div className="row">
            {category.data.map((item) => (
              <div key={item.id} className="">
                <Image width={100} height={100} src={`/${item.img}`} alt={item.name} className="img-fluid" />
                <li>{item.name}</li>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchDropDown;