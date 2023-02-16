import React from "react";
import { RxCalendar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";

const ViralNews = () => {
  const { data: viralNews, isLoading } = useQuery({
    queryKey: ["viralNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}viralNews`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="mb-4 sm:my-10 md:my-16">
      <div className="font-bold text-xl sm:text-2xl text-red-500 my-3">
        <h1>VIRAL NEWS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
          <div className="font-bold border border-gray-200 dark:border-gray-700   text-red-500 text-center py-1">
            <h1>MOST POPULAR</h1>
          </div>
          <div>
            {isLoading && <SkeletonLoading />}
            {viralNews?.slice(0, 4).map((viral) => (
              <Link
                to={`/detail/${viral?._id}`}
                key={viral?._id}
                className=" h-full  w-full  "
              >
                <div className="flex w-full border border-gray-200 dark:border-gray-700   h-full items-center">
                  <div className="overflow-hidden  h-32 w-44">
                    <img
                      className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                      src={viral?.picture}
                      alt=""
                    />
                  </div>
                  <div className="mx-2 w-72 h-32">
                    <h4 className="font-semibold text-red-400">
                      {viral?.name}
                    </h4>
                    <h3 className="sm:text-md link-hover  text-md font-bold mb-1">
                      {viral?.title}
                    </h3>
                    <p className="">
                      {viral?.description?.slice(0, 50) + "..."}
                      <span className="text-red-500 link-hover">Read More</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <div className="font-bold border border-gray-200 dark:border-gray-700   text-red-500 text-center py-1">
            <h1>TALKED ABOUT</h1>
          </div>
          <div>
            {isLoading && <SkeletonLoading />}
            {viralNews?.slice(4, 8).map((viral) => (
              <Link
                to={`/detail/${viral?._id}`}
                key={viral?._id}
                className=" h-full  w-full  "
              >
                <div className="flex w-full border border-gray-200 dark:border-gray-700   h-full items-center">
                  <div className="overflow-hidden  h-32 w-44">
                    <img
                      className=" h-full w-full ease-in-out duration-500 transform hover:scale-125 object-cover"
                      src={viral?.picture}
                      alt=""
                    />
                  </div>
                  <div className="mx-2 w-72 h-32">
                    <h4 className="font-semibold text-red-400">
                      {viral?.name}
                    </h4>
                    <h3 className="sm:text-md link-hover  text-md font-bold mb-1">
                      {viral?.title}
                    </h3>
                    <p className="">
                      {viral?.description?.slice(0, 50) + "..."}
                      <span className="text-red-500 link-hover">Read More</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="font-bold border  border-gray-200 dark:border-gray-700   text-red-500 text-center py-1">
              <h1>VIDEO OF THE DAY</h1>
            </div>
            <div className="h-[60%]  mb-3 border border-gray-200 dark:border-gray-700  ">
              <iframe
                className=""
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ULIJrqzwMIY"
                title=" video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div >
              <button className="bg-black hover:bg-red-700 text-white  text-center py-2  font-bold border border-gray-200 dark:border-gray-700  mb-3 w-full">JOIN US</button>
            </div>
          </div>
          <div>
            <img className="md:h-[280px] w-full object-cover" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/20bc45131591483.6197c71c1e6e9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViralNews;
