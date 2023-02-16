import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
const WorldinPicturesCard = ({
  WorldinPicture,
  relative,
  absolute,
  heroOverlay,
}) => {
  const { title, picture, _id, category, description, author, country } =
    WorldinPicture;
  return (
    <section className="">
      <Link
        className="font-bold text-lg hover:text-red-500"
        to={`news/${country}`}
      >
        <div
          className={`shadow hover:shadow-2xl border border-gray-200 dark:border-gray-700 h-full ease-in-out duration-300 hover:border-gray-200 ${relative}`}
        >
          <div className={` overflow-hidden h-full `}>
            <img
              className="transform ease-in-out duration-500 hover:scale-125 object-cover w-full h-full"
              src={picture}
              alt="/"
            />
          </div>
          <div className={`${heroOverlay} h-full `}>
            <div className={`mx-2 ${absolute} bottom-2 pb-5`}>
              <h1 className="link-hover ">{title?.slice(0, 30)}...</h1>
              <p className="leading-none text-lg link-hover">{country}</p>
            </div>
          </div>
        </div>
      </Link>
    </section >
  );
};

export default WorldinPicturesCard;
