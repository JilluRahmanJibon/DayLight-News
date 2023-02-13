import React from "react";
import { Link } from "react-router-dom";

const HorizontalThreeImage = ({ data }) => {
  const { author, category, description, picture, title, _id } = data;
  return (
    <Link
      to={`/detail/${_id}`}
      className=" h-80 transition-all   overflow-hidden shadow border  border-gray-300 hover:shadow-2xl mb-4"
    >
      <div className="overflow-hidden">
        <img
          className="transition transform ease-in-out duration-500 hover:scale-125 object-cover w-full h-48"
          src={picture}
          alt="/"
        />
      </div>
      <div>
        <div className=" mx-2">
          <h3 className="text-md link-hover font-bold">
            {title?.slice(0, 30) + "..."}
          </h3>
          <p className="text-sm">
            {description?.slice(0, 70) + "..."}
            <span className="text-red-500 link-hover">Read More</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalThreeImage;
