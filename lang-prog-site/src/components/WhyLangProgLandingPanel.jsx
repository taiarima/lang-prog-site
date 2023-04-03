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
  // Why should you use Lang Prog?
  // 1. Tracking your language learning progress increases your motivation! It helps you see how far you've come and what areas you need to improve on.
  // 2. Lang Prog features built-in study reminders and gives you expert advice for how to study effectively at each stage of your language learning journey.
  // 3. Tracking your progress increases consistency! Consistency is one of the greatest factors in language learning success.
  // 4. It's quick, easy, and fun to use! Tracking your progress shouldn't take valuable time away from your language learning. With just a few clicks, you can track your progress and all the important data and analyses are generated for you.
  
  // How does it work?
  // 1. Pick the language(s) you're studying and your current level.
  // 2. Log your progress for the day by picking an activity and time spent.
  // 3. View your progress over time and get expert advice on how to study effectively.

  // Plenty of great features!
  // 1. Track as many languages as you want!
  // 2. Graphs which show trends, progress, and more!
  // 3. Study reminders and expert advice!

  
  return (
    <div className="landing-page-panel">
      <h2>{whyUseMyAppProps.heading}</h2>
      <div style={{ position: "relative" }}>
        <img className="py-24" src={whyUseMyAppProps.image} alt="panel" />
        <div className="related-content absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-20">
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
