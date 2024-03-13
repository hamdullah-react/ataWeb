"use client";
import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Initialize Bootstrap dropdown component when the component mounts
    const dropdownElement = document.querySelector(".dropdown-toggle");
    dropdownElement.addEventListener("click", toggleDropdown);

    // Clean up event listener when the component unmounts
    return () => {
      dropdownElement.removeEventListener("click", toggleDropdown);
    };
  }, []);

  return (
    <>
      <div className="nav-item dropdown">
        <a
          href="#"
          className="hover:text-[black] nav-link shadow-none d-flex align-items-center justify-content-between bg-primary text-black w-100"
          data-toggle="dropdown"
          style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
        >
          Categories <i className="fa fa-angle-down float-right mt-1" />
        </a>
        <div className=" dropdown-menu position-absolute bg-secondary  rounded-0 w-100 m-0">
          <a href="" className=" dropdown-item">
            Camera polls
          </a>
          <a href="" className="dropdown-item">
            Cables
          </a>
          <a href="" className="dropdown-item">
            Devices
          </a>
          <a href="" className="dropdown-item">
            Adaptor & Power supply
          </a>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
