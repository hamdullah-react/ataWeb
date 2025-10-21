"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { categories } from "../../app/Data";
import SearchDropDown from "./SearchDropDown";
import Mobilenavebar from "./Mobilenavebar";
import Logo from "../logo/Logo";

function NaveBar() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Function to handle search input changes
  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    filterCategories(input);
  };

  // Function to filter categories and items based on search input
  const filterCategories = (input) => {
    const filtered = categories
      .map((category) => ({
        ...category,
        data: category.data.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        ),
      }))
      .filter((category) => category.data.length > 0);
    setFilteredCategories(filtered);
  };

  // Open search modal
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
    setSearchInput("");
    setFilteredCategories(categories);
  };

  // Close search modal
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchInput("");
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 d-none d-lg-block ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container-fluid px-xl-5">
          {/* Single Row Navigation */}
          <div className="flex items-center gap-4 py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="px-2.5 py-1.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium no-underline whitespace-nowrap"
              >
                <i className="fa fa-home mr-1 text-xs"></i>Home
              </Link>
              <Link
                href="/categories"
                className="px-2.5 py-1.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium no-underline whitespace-nowrap"
              >
                <i className="fa fa-list mr-1 text-xs"></i>Categories
              </Link>
              <Link
                href="/products"
                className="px-2.5 py-1.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium no-underline whitespace-nowrap"
              >
                <i className="fa fa-th mr-1 text-xs"></i>Products
              </Link>
              <Link
                href="/aboutus"
                className="px-2.5 py-1.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium no-underline whitespace-nowrap"
              >
                <i className="fa fa-info-circle mr-1 text-xs"></i>About
              </Link>
              <Link
                href="/contactus"
                className="px-2.5 py-1.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 font-medium no-underline whitespace-nowrap"
              >
                <i className="fa fa-envelope mr-1 text-xs"></i>Contact
              </Link>
            </nav>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Search Icon */}
              <button
                onClick={openSearchModal}
                className="w-9 h-9 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Search"
              >
                <i className="fa fa-search text-sm"></i>
              </button>

              {/* Phone */}
              <a
                href="tel:+971562071106"
                className="flex items-center gap-1.5 text-xs no-underline whitespace-nowrap"
              >
                <i className="fa fa-phone text-green-600"></i>
                <span className="text-gray-800 font-semibold hover:text-green-600">
                  +971 56 2071 106
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971562071106"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-300 shadow-sm hover:shadow-md no-underline text-xs whitespace-nowrap"
              >
                <i className="fab fa-whatsapp text-sm"></i>
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4"
          onClick={closeSearchModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">
                Search Products
              </h3>
              <button
                onClick={closeSearchModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="Close"
              >
                <i className="fa fa-times text-gray-600"></i>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full py-3 px-5 pr-12 text-base rounded-full border-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300"
                    placeholder="Search for products..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    autoFocus
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center">
                      <i className="fa fa-search text-white text-sm"></i>
                    </div>
                  </div>
                </div>
              </form>

              {/* Search Results */}
              {searchInput && (
                <div className="mt-4 max-h-96 overflow-y-auto">
                  <SearchDropDown categories={filteredCategories} onProductClick={closeSearchModal} />
                </div>
              )}

              {/* No Results */}
              {searchInput && filteredCategories.length === 0 && (
                <div className="mt-8 text-center py-8">
                  <i className="fa fa-search text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-600 text-lg">
                    No products found for "{searchInput}"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Try searching with different keywords
                  </p>
                </div>
              )}

              {/* Initial State */}
              {!searchInput && (
                <div className="mt-8 text-center py-8">
                  <i className="fa fa-search text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-600 text-lg">
                    Start typing to search products
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Search from {categories.reduce((acc, cat) => acc + cat.data.length, 0)} products
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      <Mobilenavebar openSearchModal={openSearchModal} />
    </>
  );
}

export default NaveBar;
