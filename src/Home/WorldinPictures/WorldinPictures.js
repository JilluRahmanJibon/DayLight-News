import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";

import WorldinPicturesCard from "./WorldinPicturesCard";

const WorldinPictures = () => {

  const [worldInPicture, setWorldInPicture] = useState([])
  useEffect(() => {
    fetch("worldInPicture.json").then(res => res.json()).then(result => {
      setWorldInPicture(result)
    })
  }, [])


  console.log(worldInPicture)

  return (
    <div className="h-full py-10">
      <div>
        <h1 className=" font-bold text-xl sm:text-2xl text-red-500 mb-5">
          World in pictures
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-10 mb-5">
        {/* {isLoading && <SkeletonLoading />} */}
        {worldInPicture?.slice(0, 2).map((inPicture) => (
          <WorldinPicturesCard key={inPicture?._id} WorldinPicture={inPicture} relative="relative" absolute="absolute bottom-0 text-white hover:text-red-100" heroOverlay="hero-overlay absolute top-0" />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-5 sm:gap-10 mb-5">
        {/* {isLoading && <SkeletonLoading />} */}
        {worldInPicture?.slice(2, 5).map((inPicture) => (

          <WorldinPicturesCard key={inPicture?._id} WorldinPicture={inPicture} relative="relative" absolute="absolute bottom-0 text-white hover:text-red-100" />
        ))}
      </div>
    </div>
  );
};

export default WorldinPictures;
