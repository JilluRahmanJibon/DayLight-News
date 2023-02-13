import React from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  const { data: breakingNews, isLoading } = useQuery({
    queryKey: ["breakingNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}breakingNews`).then((res) =>
        res.json()
      ),
  });

  // console.log(breakingNews)

  return (
    <div className="mb-4 sm:mb-10">
      <div className="my-3 flex items-center gap-2">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          BREAKING NEWS
        </h1>
        <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
      </div>

      <div>
        <Marquee
          className="overflow-hidden"
          pauseOnHover={true}
          gradient={false}
          speed={6}
        >
          {isLoading && <SkeletonLoading cards={6} />}
          {breakingNews?.map((breaking) => (
            <Link
              key={breaking?._id}
              to={`/detail/${breaking?._id}`}
              className=" h-32  w-96 flex border-2"
            >
              <div className="overflow-hidden w-56 h-32">
                <img
                  className="w-full h-full ease-in-out duration-500 transform hover:scale-125"
                  src={breaking?.picture}
                  alt=""
                />
              </div>
              <div className="mx-2">
                <h3 className="text-md link-hover  font-bold ">
                  {breaking?.title?.slice(0, 30)}
                </h3>
                <p className=" text-sm">
                  {breaking?.description.slice(0, 90) + "..."}
                </p>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
