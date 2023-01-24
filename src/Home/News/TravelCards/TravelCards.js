import React from "react";
import { HiUser } from "react-icons/hi2";
import { IoTimeSharp } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const TravelCards = ({ data }) => {
  const { title, picture, descrption, category, author, _id } = data;
  return (
    <div className="  border-2 hover:ml-5  transition-all">
      <Link to={`detail/${_id}`}>
        <div className="flex sm:flex-row p-1 flex-col items-center h-24 gap-4 ">
          <figure>
            <img className="sm:w-32 h-20" src={picture} alt="Album" />
          </figure>
          <div>
            <h2 className=" font-semibold md:text-start link-hover hover:text-red-500 text-center pb-2 pt-4">
              {title}
            </h2>
            <div className="flex justify-around pb-2  ">
              <div>
                <p className="flex items-center gap-1 text-gray-400">
                  <HiUser className="text-red-700 bg-gray-300 rounded-md text-lg p-px"></HiUser>{" "}
                  {author?.name}
                </p>
              </div>
              <p className="text-gray-400">|</p>
              <div>
                <p className="flex items-center  gap-1">
                  <span className=" rounded-full">
                    <RxCalendar></RxCalendar>
                  </span>
                  <span className="text-gray-400">
                    {author?.published_date}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  );
};

export default TravelCards;
