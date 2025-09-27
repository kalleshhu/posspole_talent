"use client";

import React from "react";
import { FaBolt, FaBrain, FaGlobe, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  {
    title: "Accelerated Solution Delivery",
    desc: "Proven frameworks to shorten time-to-market without compromising quality.",
    icon: <FaBolt className="text-3xl" />,
    headingColor: "#448dc6",
  },
  {
    title: "Deep Domain Expertise",
    desc: "Leaders and specialists who understand industry inside-out.",
    icon: <FaBrain className="text-3xl" />,
    headingColor: "#448dc6",
  },
  {
    title: "Global Reach, Local Impact",
    desc: "Talent in 30+ countries delivering culturally and contextually relevant solutions.",
    icon: <FaGlobe className="text-3xl" />,
    headingColor: "#448dc6",
  },
  {
    title: "Trusted by Enterprises",
    desc: "A partner for corporate clients seeking innovation with predictable results.",
    icon: <FaHandshake className="text-4xl" />,
    headingColor: "#448dc6",
  },
];

const WhyUsCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}      // start slightly lower & transparent
      animate={inView ? { y: 0, opacity: 20  } : {}}
      transition={{
        duration: 0.2,                     // smooth duration
        ease: "easeIn",                    // smooth slide-up easing
        delay: index * 0.2,                // optional stagger
      }}
      className="flex items-start gap-5 relative group transition-all duration-500 p-4 rounded-xl"
    >
      <div className="flex-shrink-0 p-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#eff2f4] text-[#6ba4cf] group-hover:bg-[#448dc6] group-hover:text-white transition-all duration-300">
          {item.icon}
        </div>
      </div>

      <div className="pt-6 pr-4">
        <h3 className="text-2xl font-bold mb-4" style={{ color: item.headingColor }}>
          {item.title}
        </h3>
        <p className="text-gray-600 text-lg">{item.desc}</p>
        <div className="mt-3 w-10 h-[2px] bg-red-500"></div>
      </div>
    </motion.div>
  );
};

const Whyus = () => {
  return (
    <>
      <div className="-mt-30">
        <h4 className="text-center text-5xl lg:text-6xl font-bold mb-20">
          Why Us
        </h4>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
        {data.map((item, index) => (
          <WhyUsCard key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Whyus;
