import React, { useState } from "react";
import whyUseImg from "../assets/why use image.png";
import dummy2 from "../assets/dummy2.png";
import dummy3 from "../assets/dummy3.png";
import dummy4 from "../assets/dummy4.png";

const WhyUseLangProgLandingPanel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [relatedText, setRelatedText] = useState("");

  const whyUseMyAppProps = {
    heading: "Why use <my app>?",
    image: whyUseImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    relatedImages: [dummy2, dummy3, dummy4],
    relatedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === whyUseMyAppProps.relatedImages.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? whyUseMyAppProps.relatedImages.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="landing-page-panel">
      <h2>{whyUseMyAppProps.heading}</h2>
      <div style={{ position: "relative" }}>
        <img className="py-24" src={whyUseMyAppProps.image} alt="panel" />
        <div
          className="related-content absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-20"
          //   style={{
          //     position: "absolute",
          //     top: 0,
          //     left: 0,
          //     right: 0,
          //     bottom: 0,
          //     display: "flex",
          //     alignItems: "center",
          //     justifyContent: "space-between",
          //     padding: "0 20px",
          //   }}
        >
          <button className="text-4xl" onClick={handlePrevious}>
            {"⬅️"}
          </button>
          <img
            src={whyUseMyAppProps.relatedImages[currentIndex]}
            alt={`related image ${currentIndex}`}
            key={`related-image-${currentIndex}`}
          />
          <button className="text-4xl" onClick={handleNext}>
            {"➡️"}
          </button>
        </div>
      </div>
      <p>{whyUseMyAppProps.text}</p>
      <p>{whyUseMyAppProps.relatedText}</p>
    </div>
  );
};

export default WhyUseLangProgLandingPanel;
