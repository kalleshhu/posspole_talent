// "use client";

// import Image from "next/image";

// const Banner = () => {
//     const handleScroll = () => {
//         const section = document.getElementById('registration-section');
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//     };



//     return (
//         <div
//             className="relative bg-cover bg-center h-[700px] flex items-center justify-center text-center"
//             style={{ backgroundImage: "url('/images/banner/main2.jpg')" }}
//         >
//             {/* Overlay for readability */}
//             {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

//             {/* Content */}
//             <div className="relative z-10 max-w-3xl px-6 mt-40">
//                 <h1 className="text-4xl md:text-8xl lg:text-7xl font-bold text-white leading-tight">
//                     Where <br /> Talent meets <br /> Opportunity.
//                 </h1>
//                 <div className="mt-8">
//                     <button
//                         onClick={handleScroll}
//                         className="text-sm md:text-lg font-semibold hover:shadow-xl bg-[#6ba4cf] text-white py-3 px-8 md:py-4 md:px-12 rounded-full hover:bg-[#67b9f7] transition"
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;




// "use client";

// import { useState, useEffect } from "react";

// const slides = [
//     {
//         image: "/images/banner/main.jpg",
//         text: "Empower your career with the right skills.",
//     },
//     {
//         image: "/images/banner/main2.jpg",
//         text: "Where Talent meets Opportunity.",
//     },
//     {
//         image: "/images/banner/main.jpg",
//         text: "Shape the future of technology.",
//     },
//     {
//         image: "/images/banner/main2.jpg",
//         text: "Join us in transforming industries.",
//     },
// ];

// const Banner = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, []);

//     const handleScroll = () => {
//         const section = document.getElementById("registration-section");
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <div className="relative h-[700px] flex items-center justify-center text-center overflow-hidden">
//             {/* Background Images */}
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//                         index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//                     }`}
//                     style={{ backgroundImage: `url(${slide.image})` }}
//                 ></div>
//             ))}

//             {/* Overlay (optional for readability) */}
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//             {/* Text and Button */}
//             <div className="relative z-20 max-w-3xl px-6 mt-40 text-white transition-all duration-1000">
//                 <h1 className="text-4xl md:text-7xl font-bold leading-tight">
//                     {slides[currentIndex].text}
//                 </h1>
//                 <div className="mt-8">
//                     <button
//                         onClick={handleScroll}
//                         className="text-sm md:text-lg font-semibold hover:shadow-xl bg-[#6ba4cf] text-white py-3 px-8 md:py-4 md:px-12 rounded-full hover:bg-[#67b9f7] transition"
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;




"use client";

import { useState, useEffect } from "react";

const slides = [
    {
        image: "/images/banner/main.jpg",
        text: "Empower your career with the right skills.",
    },
    {
        image: "/images/banner/main2.jpg",
        text: "Where Talent meets Opportunity.",
    },
    {
        image: "/images/banner/main.jpg",
        text: "Shape the future of technology.",
    },
    {
        image: "/images/banner/main2.jpg",
        text: "Join us in transforming industries.",
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // 4 seconds per slide

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
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Animated Text */}
            <div className="relative z-20 max-w-3xl px-6 mt-40 text-white">
                <h1
                    key={currentIndex}
                    className="text-4xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-in"
                >
                    {slides[currentIndex].text}
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
