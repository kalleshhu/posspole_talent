"use client";

import { useState, useEffect } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); 
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("registration-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[700px] flex items-center justify-center text-center overflow-hidden">
      {/* Background with zoom animation */}
      <div
        key={currentIndex}
        className="absolute inset-0 bg-cover bg-center animate-bgZoom"
        style={{ backgroundImage: "url(/images/banner/main2.jpg)" }}
      ></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-6 mt-20 text-white">
        <h1
          key={currentIndex}
          className="text-4xl md:text-7xl font-bold leading-tight opacity-0 animate-fadeInUp whitespace-pre-line"
        >
          {currentIndex === 0 && "Where Talent meets Opportunity."}
          {currentIndex === 1 && "Shape the future of technology."}
          {currentIndex === 2 && (
            <>
              <span className="whitespace-nowrap">
                Join us in transforming
              </span>
              <br />
              industries.
            </>
          )}
        </h1>

        <div className="mt-8">
          <button
            onClick={handleScroll}
            className="text-sm md:text-lg font-semibold hover:shadow-xl bg-[#6ba4cf] text-white py-3 px-8 md:py-4 md:px-12 rounded-full hover:bg-[#67b9f7] transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
