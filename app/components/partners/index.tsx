"use client";
import { FaCogs, FaUsers, FaPuzzlePiece } from "react-icons/fa";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Driving Digital Transformation",
      desc: "Leaders in fast-paced industries who need predictable, measurable outcomes to stay ahead. We help you build the products, platforms, and processes to not just adapt, but to lead.",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Seeking True Partnership",
      desc: "Forward-thinking enterprises, from Fortune 500s to high-growth scale-ups, who want a collaborative partner, not just a vendor, to turn their visions into reality with speed and quality.",
    },
    {
      icon: <FaPuzzlePiece className="text-4xl" />,
      title: "Solving Complex Challenges",
      desc: "Corporate clients are facing hurdles in talent, infrastructure, and delivery. We provide digital engineering and solution capabilities to empower your team and ensure project success.",
    },
  ];

  return (
    <div id="partners-section" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          We partner with ambitious leaders and organizations who are:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
          {partners.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-8 rounded-[24px] shadow-xl bg-white"
            >
              <div className="flex items-center justify-center w-14 h-14 text-[#6ba4cf] rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold mb-6 text-[#387289] " style={{ fontSize: "20px" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
