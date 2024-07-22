import Link from "next/link";
import React from "react";
import { MdDashboard, MdOutlineProductionQuantityLimits, MdOutlineCategory } from "react-icons/md";

const routes = [
  {
    href: '/admin',
    label: 'Dashboard',
    icon: <MdDashboard />
  },
  {
    href: '/allData',
    label: 'All Products',
    icon: <MdOutlineProductionQuantityLimits />
  },
  {
    href: '/allCategories',
    label: 'Categories',
    icon: <MdOutlineCategory />
  }
];

const AdminRoutes = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <ul className="space-y-4">
        {routes.map((route, index) => (
          <li key={index} className="flex items-center gap-2 p-2 border-b border-gray-300 font-bold text-gray-700 hover:bg-gray-200 transition duration-200 ease-in-out mx-[-50px]">
            {route.icon}
            <Link href={route.href} className="text-gray-700 no-underline hover:text-gray-900">
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminRoutes;
