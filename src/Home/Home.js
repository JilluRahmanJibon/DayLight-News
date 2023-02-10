import React, { useContext } from "react";
import Spinner from "../Components/Spinner/Spinner";
import useTitle from "../Hooks/useTitle";
import Banner from "./Banner/Banner";
import BreakingNews from "./BreakingNews/BreakingNews";
import Culture from "./Culture-Lifestyle/Culture-Lifestyle";
import HomePageArticalAndPost from "./HomepageArticalAndPost/HomePageArticalAndPost";
import HomePageLetestNews from "./HomePageLetestNews/HomePageLetestNews";
import News from "./News/News";
import TrendingNews from "./TrendingNews/TrendingNews";
import OnlineVatingSection from "./OnlineVatingSection/OnlineVatingSection";
import SearchData from "../Components/SearchData/SearchData";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import InternetionalTorism from "./InternetionalTorism/InternetionalTorism";
import EntertainmentNews from "./EntertainmentNews/EntertainmentNews";
import ViralNews from "./ViralNews/ViralNews";
import VideoSection from "./VideoSection/VideoSection";
import SportsNews from "./SportsNews/SportsNews";
import Voices from "./Voices/Voices";

import HomePageStorySection from "./HomePageStorySection/HomePageStorySection";
import EnvironmentNews from "./EnvironmentNews/EnvironmentNews";
import HomePageDivisionData from "./DistricNews/HomePageDivisionData";
import LiveStockMarketData from "./LiveStockMarketData/LiveStockMarketData";
import SpacialNews from "../Components/SpacialNews/SpacialNews";
import chatImage from "../assest/Chat/chat.png";
import "./Home.css";
import ChatModal from "../Pages/Shared/SocketIO/ChatModal";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
  useTitle("Home");
  const { searchContent } = useContext(AuthContext);

  const goToBtn = () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* <Category /> */}
      {/* <Spinner /> */}

      {searchContent ? (
        <SearchData />
      ) : (
        <div>

          <div className="">
            <div>
              <label htmlFor="chat-modal" className="btn chatImage"> <img src={chatImage} alt="" /></label>

            </div>
            {/* <div className="topbutton" >
              <button onClick={() => goToBtn()} className="text-xl bg-orange-400  text-white">Top</button>
            </div> */}

          </div>
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
          {/* <News/> */}
          <EnvironmentNews />
          <Voices />
        </div>
      )}
      <ChatModal />
    </div>
  );
};

export default Home;
