import React from "react";
import { RxCalendar } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const AllCard = ({ data, i }) => {
  const { author, category, description, picture, title, _id } = data;
  return (
    <NavLink
      to={`/detail/${_id}`}
      className=" w-4/5 md:h-[800px] h-full mx-auto border-2  rounded-t-lg  relative overflow-hidden my-5 gradient1"
    >
      <img
        className="h-[100%] w-full ease-in-out duration-500 transform hover:scale-125  "
        src={picture}
        alt=""
      />
      <Link className=" absolute top-4 left-5  font-semibold sm:text-xl text-sm  sm:px-8  sm:py-2 py-1 px-4 bg-red-600 hover:bg-red-700 hover:text-black translate rounded-md text-white font-mono ">
        {category}
      </Link>
      <div className=" absolute bottom-2 sm:pl-8 pl-3  text-cyan-500  z-40">
        <div className="flex flex-col justify-center">
          <h3 className="  lg:text-3xl md:text-xl text-md font-semibold sm:space-y-3 space-y-0  mt-3 sm:py-4 p-0  rounded-lg text-white hover:underline font-sans  ">
            {title?.length > 80 ? title.slice(0, 80) + "..." : title}
          </h3>
          <p className="text-md text-white hidden md:block">
            {description?.slice(0, 250)}
          </p>
          <p className="text-sm text-white block md:hidden">
            {description?.slice(0, 40)}
          </p>
        </div>
        <div className="sm:flex gap-3 text-white items-center hidden">
          <RxCalendar></RxCalendar>
          <p className="text-[14px] text-white  sm:py-4 p-0 ">
            {author?.published_date}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default AllCard;
