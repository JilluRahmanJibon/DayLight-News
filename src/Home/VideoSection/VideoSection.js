import React, { useEffect, useState } from "react";
import { RxCalendar } from "react-icons/rx";

const VideoSection = () => {
  const [VideoPost, setVideoPost] = useState([]);
  useEffect(() => {
    fetch("videosection.json")
      .then((res) => res.json())
      .then((data) => setVideoPost(data));
  }, []);
  return (
    <div className="mb-8">
      <div className="font-bold text-xl sm:text-2xl text-red-500 my-3">
        <h1>VIDEO POST NEWS</h1>
      </div>
      <div className="lg:flex  justify-between gap-4 ">
        <div>
          {VideoPost?.slice(0, 2).map((video) => (
            <div className="" key={video._id}>
              <div className="mb-4 ">
                <div className="h-72 ">
                  <iframe
                    className="rounded"
                    width="100%"
                    height="100%"
                    src={video.video}
                    title=" video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="  w-full lg:w-[50%]">
          {VideoPost?.slice(2, 3).map((video) => (
            <div key={video._id} className="  h-full">
              <div className="h-[100%]">
                <div className="lg:h-[593px] h-[300px] mb-3">
                  <iframe
                    className="rounded"
                    width="100%"
                    height="100%"
                    src={video.video}
                    title=" video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {VideoPost?.slice(3, 5).map((video) => (
            <div key={video._id} className=" ">
              <div className="mb-4 ">
                <div className="h-72">
                  <iframe
                    className="rounded"
                    width="100%"
                    height="100%"
                    src={video.video}
                    title=" video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
