import React, { useEffect } from "react";
import { useState } from "react";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
import DistricModal from "./DistricModal";
import DivisionHorizontalData from "./DivisionHorizontalData ";
import DivisionTitleData from "./DivisionTitleData ";
import HomePageDivisionSingleCard from "./HomePageDivisionSingleCard ";

const HomePageDivisionData = () => {
  const [datas, setDatas] = useState([]);
  const [city, setCity] = useState({});
  const [districtData, setDistrictData] = useState([]);
  const [preData, setPreData] = useState([]);
  const [dis, setDis] = useState("off");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}district`)
      .then((res) => res.json())
      .then((result) => {
        setDatas(result);
      });
  }, []);
  //unique district
  const uniqueDistrict = [...new Set(datas?.map((data) => data?.district))];

  const handleUpdateDistrict = (e) => {
    e.preventDefault();
    const form = e.target;
    const radio = document.querySelectorAll("input[type=radio]:checked");
    const district = radio[0]?.id;

    if (dis === "on") {
      setCity({ district: district });
    }
    fetch(
      `${process.env.REACT_APP_API_URL}district/${
        city?.district ? city?.district : "Dhaka"
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        setDistrictData(result);
        form.reset();
        setDis("off");
      });
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}district/Dhaka
      `
    )
      .then((res) => res.json())
      .then((result) => {
        setPreData(result);
      });
  }, []);

  return (
    <div>
      <div className="flex  flex-col-reverse xl:flex-row">
        <div className="w-full xl:w-[1400px]">
          <h1 className="font-bold text-xl sm:text-2xl text-red-500 ">
            Division{" "}
          </h1>
          <div className="flex flex-col lg:flex-row ">
            <div>
              {city?.district ? (
                <>
                  {districtData.length ? districtData?.slice(1, 2)?.map((data) => (
                    <HomePageDivisionSingleCard data={data} key={data?._id} />
                  )) : <SkeletonLoading cards={3} />}
                </>
              ) : (
                <>
                  {preData.length ? preData.slice(1, 2).map((data) => (
                    <HomePageDivisionSingleCard data={data} key={data?._id} />
                  )) : <SkeletonLoading cards={3} />}
                </>
              )}
            </div>
            <div className="p-5 ">
              {city?.district ? (
                <>
                  {districtData.length ? districtData?.slice(0, 6).map((data) => (
                    <DivisionTitleData data={data} key={data?._id} />
                  )) : <SkeletonLoading cards={3} />}
                </>
              ) : (
                <>
                  {preData.length ? preData?.slice(0, 6).map((data) => (
                    <DivisionTitleData data={data} key={data?._id} />
                  )) : <SkeletonLoading cards={3} />}
                </>
              )}
            </div>
          </div>
          <div className=" gap-5 mt-2  pb-5 grid grid-flow-cols-1 md:grid-cols-2 sm-flex xl:grid-cols-4 lg:grid-cols-3">
            {city?.district ? (
              <>
                {districtData.length ? districtData?.slice(1, 5).map((data) => (
                  <DivisionHorizontalData data={data} key={data?._id} />
                )) : <SkeletonLoading cards={3} />}
              </>
            ) : (
              <>
                {datas.length ? datas?.slice(1, 5).map((data) => (
                  <DivisionHorizontalData data={data} key={data?._id} />
                )) : <SkeletonLoading cards={3} />}
              </>
            )}
          </div>
        </div>
        <div className="w-full sm:w-[800px]  mx-auto xl:w-[300px] ">
          <h1 className="font-bold text-xl sm:text-2xl text-red-500 text-center">
            Division Category
          </h1>
          <div className="pl-5 py-4">
            <label htmlFor="update-modal" className="text-lg font-semibold">
              {city?.district ? city?.district : "Dhaka"} ||{" "}
              <span className="bg-black text-white p-1 rounded-md  border">
                Change City
              </span>
            </label>
          </div>
          <div className="sm:p-2 mb-5">
            <img
              className="rounded-sm  w-[300px] h-[400px] sm:w-auto  mx-auto xl:w-[300px] xl:h-[450px]"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mtn-data-bundle-advert-design-template-086b970e7957e55a44ea4f181feb5a4b_screen.jpg?ts=1637022062"
              alt=""
            />
          </div>
        </div>
      </div>
      <DistricModal
        handleUpdateDistrict={handleUpdateDistrict}
        uniqueDistrict={uniqueDistrict.splice(1)}
        setCity={setCity}
        city={city}
        dis={dis}
        setDis={setDis}
      />
    </div>
  );
};

export default HomePageDivisionData;
