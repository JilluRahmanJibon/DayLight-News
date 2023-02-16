import { useQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import NewsSectionJustOneItemShow from "./NewsSectionJustOneItemshow/NewsSectionJustOneItemShow";
import TravelCards from "./TravelCards/TravelCards";

const News = () => {

  const { data: techNews = [] } = useQuery({
    queryKey: ['entertainment'],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}entertainment`)
      .then((res) => res.json())
  })

  const { data: lifeStyle = [] } = useQuery({
    queryKey: ['lifeStyle'],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}lifeStyle`)
      .then((res) => res.json())
  })

  const { data: cultureshNews = [] } = useQuery({
    queryKey: ['cultures'],
    queryFn: () => fetch(`${process.env.REACT_APP_API_URL}cultures`)
      .then((res) => res.json())
  })


  return (
    <div className="mx-auto mb-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <div className="">
          <div className=" border-b-2 border-dashed">
            <button className="bg-red-500 text-white rounded-t-xl py-2 px-5 ">
              {" "}
              Technology{" "}
            </button>
          </div>
          {techNews?.length === 0 && <SkeletonLoading cards={1} />}

          {techNews?.slice(0, 1).map((travel) => (
            <NewsSectionJustOneItemShow
              key={travel._id}
              data={travel}
            ></NewsSectionJustOneItemShow>
          ))}

          {techNews.map((travel) => (
            <TravelCards key={travel._id} data={travel}></TravelCards>
          ))}
        </div>
        <div>
          <div className=" border-b-2 border-dashed">
            <button className="bg-cyan-400 text-white rounded-t-xl py-2 px-5 ">
              Life Style
            </button>
          </div>
          {lifeStyle?.length === 0 && <SkeletonLoading cards={1} />}

          {lifeStyle?.slice(0, 1).map((travel) => (
            <NewsSectionJustOneItemShow
              key={travel._id}
              data={travel}
            ></NewsSectionJustOneItemShow>
          ))}

          {lifeStyle.map((life) => (
            <TravelCards key={life._id} data={life}></TravelCards>
          ))}
        </div>
        <div>
          <div className=" border-b-2 border-dashed">
            <button className="bg-black text-white rounded-t-xl py-2 px-5 ">
              Cultures
            </button>
          </div>
          {cultureshNews?.length === 0 && <SkeletonLoading cards={1} />}

          {cultureshNews?.slice(0, 1).map((travel) => (
            <NewsSectionJustOneItemShow
              key={travel._id}
              data={travel}
            ></NewsSectionJustOneItemShow>
          ))}
          {cultureshNews.map((health) => (
            <TravelCards key={health._id} data={health}></TravelCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
