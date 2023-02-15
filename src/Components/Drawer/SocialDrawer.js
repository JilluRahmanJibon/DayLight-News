import React from "react";
import { Link } from "react-router-dom";

const SocialDrawer = () => {
  return (
    <section>
      <div
        id="drawer-navigation"
        className=" h-screen p-4 sm:w-80 w-full  text-gray-600"
        tabIndex="-1"
        aria-labelledby="drawer-    navigation-label"
      >
        <div>
          <ul className=" gap-3 flex-col font-bold text-xl">
            <li className="w-full ">
              <Link
                to="/mySocialNews"
                className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-md  pl-2 "
              >
                My News
              </Link>
            </li>

            <li className="w-full ">
              <Link
                to="/socialVideos"
                className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-md  pl-2 "
              >
                Videos
              </Link>
            </li>

            <li className="w-full ">
              <Link
                to="/gadgets"
                className="block py-1 hover:bg-gray-200 duration-200 hover:pl-8 mt-1 shadow-md  pl-2 "
              >
                Marketplace
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialDrawer;
