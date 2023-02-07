import React from "react";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-btn" onClick={scrollToTop}>
      <h1>top</h1>
    </div>
  );
};

export default GoToTop;
