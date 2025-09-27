import { FaCogs, FaUsers, FaPuzzlePiece } from "react-icons/fa";

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
            <div
              key={idx}
              className="p-8 rounded-[24px] shadow-lg hover:shadow-2xl transition bg-white hover:bg-gradient-to-r hover:from-[#cbd9e5] hover:to-[#70a3ca] hover:text-white"
            >
              <div className="flex items-center justify-center w-14 h-14 text-[#6ba4cf] rounded-full mb-6 transition-colors duration-300">
                {item.icon}
              </div>
              <h3
                className="font-bold mb-6 transition-colors duration-300"
                style={{ fontSize: "20px" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 hover:text-white transition-colors duration-300 mb-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
