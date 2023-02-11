import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Banner.css";
import { Link, NavLink } from "react-router-dom";
import { RxCalendar } from "react-icons/rx";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const { data: bannerData, isLoading } = useQuery({
    queryKey: ["bannerNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}bannerNews`).then((res) =>
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
                    src={banner?.picture}
                    alt=""
                  />
                  <div className=" absolute bottom-10 px-5 text-cyan-500  z-50">
                    <div className="  ">
                      <Link
                        to={`/category/${banner?.category}`}
                        className="font-bold py-1 mb-2 px-2 bg-red-600 hover:bg-red-700 text-white"
                      >
                        {banner?.category}
                      </Link>
                      <h3
                        title={banner?.title}
                        className="sm:text-2xl mt-1 link-hover text-md text-white"
                      >
                        {banner?.title?.length > 50
                          ? banner?.title?.slice(0, 50) + "..."
                          : banner?.title}
                      </h3>
                      <div className="sm:flex hidden gap-2 items-center mt-3">
                        <div className="flex items-center gap-1 font-bold py-1 justify-center px-2 bg-white text-red-500">
                          <img
                            className="w-4 h-4 rounded-xl"
                            src={banner?.author?.author_img}
                            alt=""
                          />
                          <button>{banner?.author?.author_name}</button>
                        </div>
                        <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                          <RxCalendar></RxCalendar>
                          <button>{banner?.author?.published_date}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className=" gap-1 grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {isLoading && <SkeletonLoading cards={2} />}
          {bannerData?.slice(-4)?.map((banner) => (
            <Link to={`/detail/${banner._id}`} key={banner._id}>
              <div className=" h-full border sm:border-none  relative overflow-hidden">
                <img
                  className="w-[100%] lg:h-[241px]  md:h-[200px] h-[230px] object-cover ease-in-out duration-500 transform hover:scale-125 "
                  src={banner?.picture}
                  alt=""
                />
                <div className=" absolute bottom-2 pl-3 text-cyan-500  z-40">
                  <div className="  ">
                    <Link
                      to={`/category/${banner?.category}`}
                      className="font-bold mb-2 px-2 bg-red-600 hover:bg-red-700 rounded-sm text-white"
                    >
                      {banner?.category}
                    </Link>

                    <h3 className="text-sm text-white link-hover   hover:underline mt-1 hero-overlay">
                      {banner?.title?.length > 50
                        ? banner?.title?.slice(0, 50) + "..."
                        : banner?.title}
                    </h3>
                    <div className="sm:flex hidden gap-2 items-center mt-3 text-xs flex-wrap">
                      <div className="flex items-center gap-1 font-bold  py-1  px-2 bg-white text-red-500">
                        <img
                          className="w-4 h-4 rounded-xl"
                          src={banner?.author?.author_img}
                          alt=""
                        />
                        <button>{banner?.author?.author_name}</button>
                      </div>
                      <div className="flex items-center gap-1 font-bold py-1  px-2 bg-white text-red-500">
                        <RxCalendar className=""></RxCalendar>
                        <button>{banner?.author?.published_date}</button>
                      </div>
                    </div>
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
