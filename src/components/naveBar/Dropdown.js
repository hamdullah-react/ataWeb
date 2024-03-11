"use client"
import React, { useState, useEffect } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Initialize Bootstrap dropdown component when the component mounts
    const dropdownElement = document.querySelector('.dropdown-toggle');
    dropdownElement.addEventListener('click', toggleDropdown);

    // Clean up event listener when the component unmounts
    return () => {
      dropdownElement.removeEventListener('click', toggleDropdown);
    };
  }, []);

  return (
    <div>
      <a
        className="dropdown btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
        aria-expanded={isOpen ? "true" : "false"}
        style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
      >
        <h6 className="m-0">Categories</h6>
        <i className={`fa fa-angle-${isOpen ? 'up' : 'down'} text-dark`} />
      </a>

      <nav
        className={`collapse ${isOpen ? 'show' : ''} navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0`}
        id="navbar-vertical"
      >
        <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
          <a href="" className="nav-item nav-link">
            Camera polls
          </a>
          <a href="" className="nav-item nav-link">
            Cables
          </a>
          <a href="" className="nav-item nav-link">
            Devices
          </a>
          <a href="" className="nav-item nav-link">
            Adaptor & Power supply
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Dropdown;
