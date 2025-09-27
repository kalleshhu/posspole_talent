"use client";
import React from "react";

const WhyPartner = () => {
  const reasons = [
    {
      title: "Access to Expertise",
      desc: "Companies gain access to specialized knowledge they may not have in-house.",
    },
    {
      title: "Cost Savings",
      desc: "By optimizing technology, businesses can reduce operational costs.",
    },
    {
      title: "Competitive Advantage",
      desc: "Adopting new technologies helps businesses stay competitive in a rapidly changing digital landscape.",
    },
    {
      title: "Digital Transformation",
      desc: "Consultants provide the necessary guidance for a successful digital transformation journey.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Why Businesses Partner with Us
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6"
            >
              {/* Gradient Number Badge */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#448dc6] to-[#36d1dc] text-white text-lg font-bold mb-8">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="font-bold text-[#387289] mb-2" style={{ fontSize: '1.4rem'} }>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-m mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
