"use client";

import React from "react";
import { FaLightbulb, FaEye } from "react-icons/fa";

const data = [
  {
    title: "Our Expertise",
    desc: "We specialize in end-to-end digital transformation—helping organizations reimagine products, platforms, and processes through high-impact consulting, engineering excellence, and technology-driven solutions for specific business verticals. Our deep domain experts bring decades of industry knowledge, ensuring solutions are not only technically sound but also aligned with customer’s business vision & goal.",
    icon: <FaLightbulb className="text-4xl" />,
    headingColor: "#448dc6",
  },
  {
    title: "Our Vision",
    desc: "At Recruitment Services we believe our purpose is to fit qualified and deserving candidates to potential jobs. To be the global partner of choice for enterprises aiming to transform their business through technology, powered by global diverse talent and relentless commitment to excellence.",
    icon: <FaEye className="text-4xl" />,
    headingColor: "#448dc6",
  },
];

const Vision: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-10 text-center
                       shadow-xl transform transition-all duration-500 group bg-[#eff2f4]
                       hover:-translate-y-5 hover:scale-105 
                       hover:shadow-[0_10px_30px_rgba(68,141,198,0.4)] hover:bg-[#d0f1fc]"
          >
            {/* Icon + Title */}
            <div className="flex items-center justify-center mb-8 space-x-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#eff2f4] text-[#6ba4cf]
                              group-hover:bg-[#448dc6] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3
                className="text-3xl font-semibold"
                style={{ color: item.headingColor }}
              >
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
