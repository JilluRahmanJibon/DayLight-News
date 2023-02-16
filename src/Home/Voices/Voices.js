import { useQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import VoicesCard from "./VoicesCard";

const Voices = () => {
  const { data: voicesNews, isLoading } = useQuery({
    queryKey: ["voicesNews"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}voicesNews`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="  mb-8">
      <div>
        <h1 className=" font-bold text-xl text-red-600  sm:text-2xl text-black-500 mb-5">
          Voices News
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="">
          <div className="">
            <div className="rounded-lg shadow-lg  border border-gray-200 dark:border-gray-700 md:max-w-sm w-full">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg h-[200px] w-[800px]"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div className="p-2">
                <h5 className="text-gray-900 dark:text-white text-lg font-medium mb-2">
                  The enduring message my grandfather took
                </h5>
                <p className="text-gray-700 text-base  mb-4">
                  Air pollution control devices are a series of devices that
                  work to prevent a variety of different pollutants, both
                  gaseous and solid,
                </p>
              </div>
              <div>
                <img
                  src="https://i.pinimg.com/originals/33/07/12/3307123c852b5364afa15de6267a30a5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:grid lg:grid-cols-2 gap-3  gap-y-5  hidden">
            {isLoading && <SkeletonLoading />}
            {voicesNews?.slice(0, 6).map((Voice) => (
              <VoicesCard key={Voice?._id} VoiceNews={Voice} />
            ))}
          </div>
          <div className="gap-3 gap-y-5 block lg:hidden">
            {isLoading && <SkeletonLoading />}
            {voicesNews?.slice(0, 3).map((Voice) => (
              <VoicesCard key={Voice?._id} VoiceNews={Voice} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voices;
