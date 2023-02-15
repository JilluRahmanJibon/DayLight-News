import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=364e71159b584d7699ae753d6f7f9c0c`)
      .then(res => res.json())
      .then(data => setDatas(data.articles.slice(15, 35)))
    setIsLoading(false)
  }, [])


  return (
    <div className="mb-4 sm:mb-10">
      <div className="my-3 flex items-center gap-2">
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500">
          BREAKING NEWS
        </h1>
        <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
      </div>

      <div>
        <Marquee pauseOnHover className="overflow-hidden"  >
          {isLoading && <SkeletonLoading cards={6} />}
          {datas.length ? datas?.map((breaking) => (

            <Link key={breaking?.title}
              to={`/liveNewsApi/${breaking?.title
                .slice(0, 30)}`}
              className=" h-32 hover:text-red-500 flex border-2"
            >
              <div className="overflow-hidden w-40 h-32">
                <img
                  className="w-full h-full ease-in-out duration-500 transform hover:scale-125"
                  src={breaking?.urlToImage}
                  alt=""
                />
              </div>
              <div className="mx-2">
                <h3 className="sm:text-md link-hover hover:text-red-500  text-xl font-bold mb-1">
                  {breaking?.title?.slice(0, 20)}
                </h3>
                <p>{breaking?.description.slice(0, 30) + "..."}</p>
                <div className="flex gap-1 items-center font-bold text-gray-400">
                  <BiTime></BiTime>
                  <p className=" font-bold text-gray-400">two minutes ago</p>
                </div>
              </div>
            </Link>
          )) : <SkeletonLoading />}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
