import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Importing menu and close icons
import { IconContext } from "react-icons"; // Importing the IconContext for customizing icon styles
import Link from "next/link";
import Dropdown from "./Dropdown";
import Whatsapp from "../whatsapp/Whatsapp";

const Mobilenavebar = () => {
  const navItems = [
    { name: "Home", url: "/" },
    { name: " All Products", url: "/products" },
    { name: "  About Us", url: "/aboutus" },
    { name: "Contact", url: "/contactus" },
    { name: "Dropdown", dropdown: true }, // Indicate dropdown item
  ];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const [isToggled, setToggle] = useState(false);

  const toggleNavbar = () => {
    setToggle(!isToggled);
  };

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="d-lg-none">
        <div className="d-flex justify-end bg-white pr-4 py-3">
          <button className="btn " onClick={toggleNavbar}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              {isToggled ? <RiCloseLine /> : <RiMenuLine />}
            </IconContext.Provider>
          </button>
        </div>
      </div>

      <div className="d-lg-none w-[100%] z-50 bg-white px-3">
        <AnimatePresence>
          {isToggled && (
            <>
              <motion.div
                className="navbar"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={navContainer}
              >
                <motion.ul
                  className="navList"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={navList}
                >
                  <span className=" border-2 border-white p-2 bg-[#9af09a] text-black rounded-[20px]">
                    <Whatsapp />
                  </span>
                  {navItems.map((item) => (
                    <motion.li
                      className="nav-item py-2"
                      variants={navItem}
                      key={item.name}
                    >
                      {item.dropdown ? (
                        <>
                          <Dropdown toggleNavbar={toggleNavbar} />
                        </>
                      ) : (
                        <Link onClick={toggleNavbar} href={item.url}>
                          <p>{item.name}</p>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Mobilenavebar;
