import React from "react";
import { Link } from "react-router-dom";

const HorizentalSection = ({ data }) => {
  const { picture, description, title, _id } = data;
  return (
    <div className="h-44 mb-3 w-full  transition-all  border  border-gray-300     ">
      <Link to={`detail/${_id}`} className="   ">
        <div className="overflow-hidden h-20 sm:h-24">
          <img
            className="w-full h-full ease-in-out duration-500 transform hover:scale-125 object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className="ml-1">
          <h1 className="link-hover text-md  font-bold">
            {title?.slice(0, 30)}
          </h1>
          <p className="text-sm block lg:hidden font-normal ">
            {description.slice(0, 30) + "..."}
            <span className="text-red-500 link-hover">Read More</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HorizentalSection;
