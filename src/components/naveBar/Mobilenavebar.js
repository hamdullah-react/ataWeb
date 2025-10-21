import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Logo from "../logo/Logo";

const Mobilenavebar = ({ openSearchModal }) => {
  const navItems = [
    { name: "Home", url: "/", icon: "fa-home" },
    { name: "Categories", url: "/categories", icon: "fa-list" },
    { name: "Products", url: "/products", icon: "fa-th" },
    { name: "About", url: "/aboutus", icon: "fa-info-circle" },
    { name: "Contact", url: "/contactus", icon: "fa-envelope" },
  ];

  const [isToggled, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!isToggled);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="d-lg-none sticky top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-2">
          <Logo />

          <div className="flex items-center gap-2">
            {/* Search Icon */}
            <button
              onClick={openSearchModal}
              className="w-9 h-9 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Search"
            >
              <i className="fa fa-search text-sm"></i>
            </button>

            {/* Menu Toggle */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={toggleNavbar}
              aria-label="Toggle menu"
            >
              {isToggled ? (
                <RiCloseLine size={24} className="text-gray-700" />
              ) : (
                <RiMenuLine size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isToggled && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-3">
                {/* WhatsApp Button */}
                <motion.div variants={itemVariants} className="mb-3">
                  <a
                    href="https://wa.me/971562071106"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md no-underline text-sm font-medium"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                    <span>WhatsApp Us</span>
                  </a>
                </motion.div>

                {/* Navigation Items */}
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Link
                        href={item.url}
                        onClick={toggleNavbar}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 no-underline"
                      >
                        <i className={`fa ${item.icon} text-sm`}></i>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  variants={itemVariants}
                  className="mt-4 pt-3 border-t border-gray-200"
                >
                  <a
                    href="tel:+971562071106"
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 transition-colors no-underline"
                  >
                    <i className="fa fa-phone text-green-600"></i>
                    <span className="text-xs font-semibold">+971 56 2071 106</span>
                  </a>
                  <a
                    href="mailto:haider@mgssuae.com"
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 transition-colors no-underline"
                  >
                    <i className="fa fa-envelope text-green-600"></i>
                    <span className="text-xs">haider@mgssuae.com</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Mobilenavebar;
