"use client";
import React, { useState } from "react";
import { categories } from "../../app/Data";
import Link from "next/link";

import { motion, Variants } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Dropdown = ({toggleNavbar}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu relative z-50"
      >
        <motion.button
        className="hover:text-[black] nav-link shadow-none d-flex align-items-center justify-content-between bg-[#28a745] text-black w-100"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
        >
         Categories
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
        className="bg-slate-50"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {categories.map((menu, index) => (
            <Link
            onClick={toggleNavbar}
              key={index}
              href={{
                pathname: "/categoriepage1",
                query: { data: JSON.stringify(menu) },
              }}
              className=" dropdown-item"
            >
              <motion.li variants={itemVariants}>{menu.name} </motion.li>
            </Link>
          ))}
        </motion.ul>
      </motion.nav>
      {/* <div className="nav-item dropdown">
        <span
          className="hover:text-[black] nav-link shadow-none d-flex align-items-center justify-content-between bg-primary text-black w-100"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
        >
          Categories <i className="fa fa-angle-down float-right mt-1" />
        </span>
        <div className=" dropdown-menu position-absolute bg-secondary  rounded-0 w-100 m-0">
          {categories.map((menu, index) => (
            <Link
              key={index}
              href={{
                pathname: "/categoriepage1",
                query: { data: JSON.stringify(menu) },
              }}
              className=" dropdown-item"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Dropdown;
