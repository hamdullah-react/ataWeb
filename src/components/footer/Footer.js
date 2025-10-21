import Link from "next/link";
import React from "react";
import { categories } from "../../app/Data";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/", icon: "fa-home" },
    { name: "Categories", href: "/categories", icon: "fa-list" },
    { name: "All Products", href: "/products", icon: "fa-th" },
    { name: "About Us", href: "/aboutus", icon: "fa-info-circle" },
    { name: "Contact Us", href: "/contactus", icon: "fa-envelope" },
  ];

  const contactInfo = [
    {
      icon: "fa-phone",
      label: "Phone",
      value: "+971 43 32 7424",
      href: "tel:+97143327424",
    },
    {
      icon: "fa-mobile",
      label: "Mobile",
      value: "+971 56 2071 106",
      href: "tel:+971562071106",
    },
    {
      icon: "fa-envelope",
      label: "Email",
      value: "haider@mgssuae.com",
      href: "mailto:haider@mgssuae.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-12">
      <div className="container-fluid px-xl-5">
        {/* Main Footer Content */}
        <div className="row py-8 md:py-12 g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-green-500">MGSS</span>
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Mohammad Ghulam Security Solution
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Your trusted security solutions provider since 2018. We
                specialize in providing comprehensive security camera
                accessories and equipment.
              </p>
            </div>

            {/* General Manager */}
            <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-400 mb-1">General Manager</p>
              <h4 className="text-base font-bold text-green-400">
                Ghulam Haider
              </h4>
            </div>

            {/* Social Links / WhatsApp */}
            <a
              href="https://wa.me/971562071106"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold no-underline"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm no-underline group"
                  >
                    <i
                      className={`fa ${link.icon} text-xs text-gray-500 group-hover:text-green-400 transition-colors`}
                    ></i>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-lg font-bold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="flex items-center justify-between text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm no-underline group"
                  >
                    <span>{category.name}</span>
                    <span className="text-xs text-gray-500 group-hover:text-green-400">
                      ({category.data.length})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 no-underline group"
                >
                  <i
                    className={`fa ${info.icon} text-green-500 mt-1 text-sm`}
                  ></i>
                  <div>
                    <p className="text-xs text-gray-500 mb-0">{info.label}</p>
                    <p className="text-sm mb-0">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Address */}
              <div className="flex items-start gap-3 text-gray-300">
                <i className="fa fa-map-marker-alt text-green-500 mt-1 text-sm"></i>
                <div>
                  <p className="text-xs text-gray-500 mb-0">Address</p>
                  <p className="text-sm mb-0">
                    Mustafa Mohd. Abdul Noor Bldg. Behind Citi stay premium
                    Hotel Nakheel Road, Deira, Dubai - U.A.E.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-sm text-gray-400 mb-0">
                © {new Date().getFullYear()}{" "}
                <span className="text-green-400 font-semibold">MGSS</span> -
                Mohammad Ghulam Security Solution. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="text-sm text-gray-400 mb-0">
                Dubai, UAE • Since 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
