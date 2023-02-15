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
  const { data: bannerData, isLoading } = useQuery({
    queryKey: ["bannerNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}bannerNews`).then((res) =>
        res.json()
      ),
  });
  const { data: sideBanner } = useQuery({
    queryKey: ["viralNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}viralNews`).then((res) =>
        res.json()
      ),
  });

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
            {bannerData?.map((banner) => (
              <SplideSlide className="relative" key={banner._id}>
                <NavLink
                  id="RouterNavLink"
                  to={`/detail/${banner._id}`}
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
            ))}
          </Splide>
        </div>
        <div className=" gap-1 grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {isLoading && <SkeletonLoading cards={2} />}
          {sideBanner?.slice(-4)?.map((banner) => (
            <Link to={`/detail/${banner._id}`} key={banner._id}>
              <div className=" h-full border sm:border-none  relative overflow-hidden">
                <img
                  className="w-[100%] lg:h-[241px]  md:h-[200px] h-[230px] object-cover ease-in-out duration-500 transform hover:scale-125 "
                  src={banner?.picture}
                  alt=""
                />
                <div className=" absolute bottom-1 pl-1 text-white  z-40">
                  <div className="  ">
                    <h3 className="text-md text-white link-hover font-semibold  hover:underline mt-1 hero-overlay">
                      {banner?.title?.length > 50
                        ? banner?.title?.slice(0, 50) + "..."
                        : banner?.title}
                    </h3>
                    <p className="hero-overlay text-sm">
                      {banner?.description?.slice(0, 70) + "..."}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

// please  install in the main branch
// $ npm install @splidejs/react-splide
