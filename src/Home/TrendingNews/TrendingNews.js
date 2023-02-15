import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";

const TrendingNews = () => {
  const { data: trendingNews, isLoading } = useQuery({
    queryKey: ["trendingNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}trendingNews`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className=" mb-4 sm:mb-10 ">
      <div className="my-3 flex items-center gap-2">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          WHAT'S TRENDING
        </h1>
        <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
      </div>
      <div>
        <Splide
          className=" "
          aria-label=""
          options={{
            speed: "2000",
            autoplay: true,
            gap: "1rem",
            rewind: true,
            perPage: 4,
            perMove: 2,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              1024: {
                perPage: 2,
                perMove: 1,
              },
              640: {
                perPage: 1,
                perMove: 1,
              },
            },
            arrows: true,
            pagination: false,
          }}
        >
          {isLoading && <SkeletonLoading cards={6} />}
          {trendingNews?.map((trending) => (
            <SplideSlide key={trending?._id}>
              <div className=" h-80 shadow border border-gray-300 ease-in-out duration-300    ">
                <NavLink to={`/detail/${trending?._id}`}>
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-36 ease-in-out duration-500 transform hover:scale-125"
                      src={trending?.picture}
                      alt=""
                    />
                  </div>
                  <div className="mx-2">
                    <div className="flex gap-2 my-2 items-center flex-wrap  justify-between">
                      <Link to={`/category/${trending?.category}`}>
                        <button className="px-2 bg-red-600 hover:bg-red-700 rounded-sm text-white font-semibold">
                          {trending?.category}
                        </button>
                      </Link>
                      <div className="sm:flex gap-1 items-center hidden">
                        <RxCalendar></RxCalendar>
                        <p className="text-[14px] text-slate-400">
                          {trending?.author?.published_date}
                        </p>
                      </div>
                    </div>{" "}
                    <Link
                      to={`detail/${trending?._id}`}
                      className="text-md link-hover  font-bold"
                    >
                      {trending?.title?.length > 49
                        ? trending?.title?.slice(0, 49) + "..."
                        : trending?.title}
                    </Link>
                    <p className="text-sm ">
                      {trending?.description?.slice(0, 70) + "..."}
                      <span className="text-red-500 link-hover">Read More</span>
                    </p>
                  </div>
                </NavLink>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TrendingNews;
