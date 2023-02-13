import React, { useContext } from "react";
import useTitle from "../Hooks/useTitle";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import Banner from "./Banner/Banner";
import BreakingNews from "./BreakingNews/BreakingNews";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import TrendingNews from "./TrendingNews/TrendingNews";
import OnlineVatingSection from "./OnlineVatingSection/OnlineVatingSection";
import SearchData from "../Components/SearchData/SearchData";
import SportsNews from "./SportsNews/SportsNews";
import HomePageDivisionData from "./DistricNews/HomePageDivisionData";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import HomePageStorySection from "./HomePageStorySection/HomePageStorySection";
import EnvironmentNews from "./EnvironmentNews/EnvironmentNews";
import Voices from "./Voices/Voices";
import ViralNews from "./ViralNews/ViralNews";
import VideoSection from "./VideoSection/VideoSection";
import News from "./News/News";
import { useSelector } from "react-redux";

const Home = () => {
  useTitle("Home");
  const { searchContent } = useContext(AuthContext);


  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className="max-w-[1440px] mx-auto">
      {searchContent ? (
        <SearchData />
      ) : (
        <>
          <Banner />
          <BreakingNews />
          <TrendingNews />
          <HomePageDivisionData />
          <HomePageLetestNews />
          <HomePageArticalAndPost />
          <OnlineVatingSection />
          <SportsNews />
          <HomePageStorySection />
          <VideoSection />
          <ViralNews />
          <News />
          <EnvironmentNews />
          <Voices />
        </>
      )}
    </div>
  );

};

export default Home;
