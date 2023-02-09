import React from "react";
import "./GoToTop.css";

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };
  return (
    <div className="top-btn" onClick={goToBtn}>
      <h1 className="text-xl">Top</h1>
    </div>
  );
};

export default GoToTop;
