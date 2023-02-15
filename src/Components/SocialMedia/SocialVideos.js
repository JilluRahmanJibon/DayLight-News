import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SocialVideos = () => {
  const [socialVideo, setSocialVideo] = useState([]);
  useEffect(() => {
    fetch("videosection.json")
      .then((res) => res.json())
      .then((data) => setSocialVideo(data));
  }, []);
  return (
    <div>
      <div className="  w-full lg:w-[100%] my-10">
        {socialVideo?.map((video) => (
          <div key={video._id} className=" mb-6 h-full">
            <div className="h-[100%]">
              <div className="lg:h-[650px] h-[300px] mb-3">
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
  );
};

export default SocialVideos;
