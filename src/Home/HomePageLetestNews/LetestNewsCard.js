import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";

const LetestNewsCard = ({ news }) => {
  const { title, picture, description, category, _id } = news;
  return (
    <section>
      <Link className="font-bold " to={`detail/${_id}`}>
        <div className="h-80 mb-4 shadow hover:shadow-2xl border  ease-in-out duration-300 border-gray-300">
          <div className="overflow-hidden h-36">
            <img
              className="transform ease-in-out duration-500 hover:scale-125 object-cover w-full  h-full"
              src={picture}
              alt="/"
            />
          </div>
          <div className="flex mx-2 items-center gap-2 justify-between my-2">
            <Link
              to={`/category/${category}`}
              className="bg-red-200 text-red-600 font-semibold  transition-all  px-2 "
            >
              {category}{" "}
            </Link>
            <div className="flex items-center gap-1 ">
              <RxCalendar />
              <p className="text-[14px] text-slate-400"> 14th February 2020</p>
            </div>
          </div>
          <div className="mx-2">
            <h1 className="link-hover">
              {title?.length > 22 ? title.slice(0, 30) + "..." : title}
            </h1>
            <p className="text-sm font-normal">
              {description?.slice(0, 50) + "..."}
              <span className="text-red-500">Read More</span>
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default LetestNewsCard;
