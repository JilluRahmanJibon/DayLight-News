import React from "react";

import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";

const TravelCards = ({ data }) => {
  const { title, picture, author, _id } = data;

  return (
    <div className=" border-2 border-gray-200 dark:border-gray-700   hover:ml-5  transition-all">
      <Link to={`detail/${_id}`}>
        <div className="flex items-center gap-2">
          <img className="w-32 h-24" src={picture} alt="Album" />
          <div >
            <h2 className=" font-semibold md:text-start link-hover hover:text-red-500 text-center pb-2 pt-4">
              {title.slice(0, 20) + "..."}
            </h2>
            <div className="flex justify-around pb-2  ">
              <div className="flex items-center gap-2 flex-wrap text-gray-400">

                <img className="w-lg w-7 h-7 rounded-full" src={author?.author_img} alt="" />
                <p className="text-sm">{author?.author_name}</p>
                <RxCalendar className="text-sm"></RxCalendar>
                <p className="text-gray-400 text-sm">
                  {author?.published_date}
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
