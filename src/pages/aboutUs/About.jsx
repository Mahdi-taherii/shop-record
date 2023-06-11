import React from "react";
import MainLayout from "layout/mainLayout/main.layout";
import header from "assets/images/website/about.jpg";
const About = () => {
  return (
    <MainLayout>
      <div className="relative text-3xl md:text-5xl h-32 md:h-44 font-extrabold text-white border-b-8 border-salmon">
        <img src={header} alt="header" className="w-full h-full" />
        <div className="absolute top-1/3 w-full"> درباره ما</div>
      </div>
    </MainLayout>
  );
};

export default About;
