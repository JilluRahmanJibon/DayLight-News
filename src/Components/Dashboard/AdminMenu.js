import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import { HiCircleStack } from "react-icons/hi2";

const AdminMenu = () => {
  return (
    <div className="">
      <NavLink
        to="admin/profile"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5  transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <HomeIcon className="w-6 h-6" />

        <span className="mx-4 font-medium">Profile</span>
      </NavLink>
      <NavLink
        to="/account/gadgets/profile"
        className={({ isActive }) =>
          `flex items-center px-6 py-4 mt-5 border rounded-lg   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <HiCircleStack className="w-6 h-6" />
        <span className="mx-4 font-medium">Gadgets</span>
      </NavLink>
      <NavLink
        to="/account/writers"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5 mx-0   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <UserGroupIcon className="w-6 h-6" />

        <span className="px-4 font-medium">All Writer</span>
      </NavLink>
      <NavLink
        to="/account/readers"
        className={({ isActive }) =>
          `flex items-center pl-6 py-4 border rounded-lg mt-5 mx-0   transition-colors duration-300 transform  hover:bg-[#3BB77E]   hover:text-white ${isActive ? "bg-[#3BB77E]  text-white" : "text-gray-600"
          }`
        }
      >
        <UserGroupIcon className="w-6 h-6" />

        <span className="px-4 font-medium">All Reader</span>
      </NavLink>
    </div>
  );
};

export default AdminMenu;
