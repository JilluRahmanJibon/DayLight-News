import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Banner.css";
import { Link, NavLink } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import { useQuery } from "@tanstack/react-query";
import HomePageSnipper from "../HomePageStorySection/HomePageSnipper";

const Banner = () => {

  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=364e71159b584d7699ae753d6f7f9c0c`)
      .then(res => res.json())
      .then(data => setDatas(data.articles.slice(0, 15)))
    setIsLoading(false)
  }, [])

  console.log(datas)

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1  my-4 sm:my-10 md:my-10">
        <div className=" ">
          <Splide
            aria-label=""
            options={{
              autoplay: true,
              height: "486px",
              breakpoints: {
                500: {
                  height: "330px",
                },
              },
              rewind: true,
              arrows: true,
              pagination: true,
              speed: "2000",
            }}
          >
            {isLoading && <SkeletonLoading cards={6} />}
            {datas.length ? datas?.map((banner) => (
              <SplideSlide className="relative" key={banner._id}>
                <NavLink
                  id="RouterNavLink"
                  to={`/liveNewsApi/${banner?.title
                    .slice(0, 30)}`}
                  className="w-full h-[full] gradient"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={banner?.urlToImage}
                    alt=""
                  />
                  <div className=" absolute bottom-10 px-5 text-white z-50">
                    <div className="  ">
                      <Link
                        to={`/category/${banner?.category}`}
                        className="font-bold pb-1 px-2 bg-red-600 hover:bg-red-700 text-white"
                      >
                        {banner?.source?.name}
                      </Link>
                      <h3
                        title={banner?.title}
                        className="sm:text-2xl link-hover  text-md "
                      >
                        {banner?.title?.length > 50
                          ? banner?.title?.slice(0, 50) + "..."
                          : banner?.title}
                      </h3>
                      <p className="hidden sm:block">
                        {banner?.description?.slice(0, 190) + "..."}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </SplideSlide>
            )) : <SkeletonLoading />}
          </Splide>
        </div>
        <div className=" gap-1 grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {isLoading && <SkeletonLoading cards={2} />}
          {datas.length ? datas?.slice(11, 15,)?.map((banner) => (
            <Link to={`/liveNewsApi/${banner?.title
              .slice(0, 30)}`} key={banner._id}>
              <div className=" h-full sm:border-none  relative overflow-hidden text-white gradient1">
                <img
                  className="w-[100%] lg:h-[241px]  md:h-[200px] h-[230px] object-cover ease-in-out duration-500 transform hover:scale-125 "
                  src={banner?.urlToImage}
                  alt=""
                />
                <div className=" absolute bottom-10 px-5 text-white z-50">
                  <div className="  ">

                    <h3
                      title={banner?.title}
                      className="sm:text-2xl link-hover  text-md "
                    >
                      {banner?.title?.length > 30
                        ? banner?.title?.slice(0, 30) + "..."
                        : banner?.title}
                    </h3>
                    <p className="hidden sm:block">
                      {banner?.description?.slice(0, 40) + "..."}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )) : <SkeletonLoading />}
        </div>
      </div>
    </div>
  );
};

export default Banner;

// please  install in the main branch
// $ npm install @splidejs/react-splide
