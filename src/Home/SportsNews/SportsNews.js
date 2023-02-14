import React from "react";
import { Link } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import { useQuery } from "@tanstack/react-query";
const SportsNews = () => {
<<<<<<< HEAD
  const { data: sportsNews, isLoading } = useQuery({
    queryKey: ["sportsNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}sportsNews`).then((res) =>
        res.json()
      ),
  });
=======

  const { data: sportsNews, isLoading } = useQuery({
    queryKey: ['sportsNews'],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}sportsNews`)
      .then((res) => res.json())
  })
>>>>>>> e78ec21fabcec28fa18150d6339679ace8ef3614

  return (
    <div>
      <div className="my-3">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          LATEST SPORTS NEWS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        <div className="border w-full h-full">
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fu5a6ErmqoU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
        <div className="">
          {sportsNews?.slice(0, 5).map((sports) => (
            <Link
              to={`/detail/${sports?._id}`}
              key={sports._id}
              className=" h-full  w-full  "
            >
              <div className="flex w-full border border-gray-200 dark:border-gray-700   h-full items-center">
                <div className="overflow-hidden  h-32 w-60 md:w-44">
                  <img
                    className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                    src={sports?.picture}
                    alt=""
                  />
                </div>
                <div className="mx-2 w-72 h-32">
                  <h4 className="font-semibold text-red-400">{sports?.name}</h4>
                  <h3 className="sm:text-md link-hover  font-bold ">
                    {sports?.title?.slice(0, 30)}
                  </h3>
                  <p className="text-sm hidden sm:block">
                    {sports?.description?.slice(0, 60) + "..."}
                    <span className="link-hover text-red-500">Read More</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="">
          {sportsNews?.slice(5, 10).map((sports) => (
            <Link
              to={`/detail/${sports?._id}`}
              key={sports._id}
              className=" h-full w-full  "
            >
              <div className="flex   w-full h-full border border-gray-200 dark:border-gray-700  ">
                <div className="overflow-hidden h-32 w-60 md:w-44">
                  <img
                    className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                    src={sports?.picture}
                    alt=""
                  />
                </div>
                <div className="mx-2 w-72">
                  <h4 className="font-semibold text-red-400">{sports?.name}</h4>
                  <h3 className="text-md link-hover font-bold ">
                    {sports?.title?.slice(0, 25) + "..."}
                  </h3>
                  <p className="text-sm hidden sm:block">
                    {sports?.description?.slice(0, 70) + "..."}
                    <span className="link-hover text-red-500">Read More</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
