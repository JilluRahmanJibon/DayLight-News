import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  // console.log(data)
  const { description, picture, title, _id } = data;
  return (
    <div className=" transition-all 0 ">
      <Link to={`/detail/${_id}`} className="">
        <img className="  w-full" src={picture} alt="" />
        <h1 className="text-xl link-hover font-bold py-1">{title}</h1>
        <p className="text-sm pb-4">
          {description?.slice(0, 300) + "..."}
          <span className="text-red-500 link-hover">Read More</span>
        </p>
      </Link>
    </div>
  );
};

export default SingleCard;
