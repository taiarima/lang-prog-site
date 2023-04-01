import React, { useState } from "react";
import whyUseImg from "../assets/why use image.png";

const WhyUseLangProgLandingPanel = ({ heading, image, text }) => {
  const [relatedImages, setRelatedImages] = useState([]);
  const [relatedText, setRelatedText] = useState("");

  const whyUseMyAppProps = {
    heading: "Why use <my app>?",
    image: whyUseImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at ultrices elit, a lacinia nisi. Integer euismod tempor enim a lacinia nisi. Integer euismod tempor enim a lacinia nisi.",
    relatedImages: [
      "/images/related-image1.png",
      "/images/related-image2.png",
      "/images/related-image3.png",
    ],
    relatedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const handleNext = () => {
    // update relatedImages and relatedText to show the next set of related content
  };

  const handlePrevious = () => {
    // update relatedImages and relatedText to show the previous set of related content
  };

  return (
    <div className="landing-page-panel">
      <h2>{heading}</h2>
      <img src={image} alt="panel" />
      <p>{text}</p>
      <div className="related-content">
        <button onClick={handlePrevious}>{"<"}</button>
        {relatedImages.map((relatedImage, index) => (
          <img
            src={relatedImage}
            alt={`related image ${index}`}
            key={`related-image-${index}`}
          />
        ))}
        <p>{relatedText}</p>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
};

export default WhyUseLangProgLandingPanel;
