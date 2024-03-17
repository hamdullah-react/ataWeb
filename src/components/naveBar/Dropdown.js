
import React from "react";
import { categories } from "../../app/Data";
import Link from "next/link";

const Dropdown = () => {


  return (
    <>
      <div className="nav-item dropdown">
        <span
          className="hover:text-[black] nav-link shadow-none d-flex align-items-center justify-content-between bg-primary text-black w-100"
          data-toggle="dropdown"
          style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
        >
          Categories <i className="fa fa-angle-down float-right mt-1" />
        </span>
        <div className=" dropdown-menu position-absolute bg-secondary  rounded-0 w-100 m-0">
          {
            categories.map((menu,index)=>(
          <Link key={index} href={`${menu.id}`} className=" dropdown-item">
            {menu.name}
          </Link>
            ))
          }
          
        </div>
      </div>
    </>
  );
};

export default Dropdown;
