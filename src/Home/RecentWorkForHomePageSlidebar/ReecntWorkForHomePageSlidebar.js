import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const ReecntWorkForHomePageSlidebar = ({ data }) => {
  const { author, description, picture, _id, title } = data;
  return (
    <Link
      to={`/detail/${_id}`}
      className="flex  border  border-gray-300    lg:justify-start md:text-left  transition-all mb-1 mx-1 shadow overflow-hidden object-cover hover:ml-3"
    >
      <div className="">
        <img className="w-36 h-20 " src={picture} alt="" />
      </div>
      <div className="pl-3 text-left ">
        <h3 className="text-md link-hover font-semibold">
          {title?.slice(0, 30) + "..."}
        </h3>
        <p className="text-sm">{description?.slice(0, 30) + "..."}</p>
      </div>
    </Link>
  );
};

export default ReecntWorkForHomePageSlidebar;
