// import Image from "next/image";

// interface datatype {
//     heading: string;
//     imgSrc: string;
//     paragraph: string;
// }

// const Aboutdata: datatype[] = [
//     {
//         heading: "Digital Engineering",
//         imgSrc: "/images/aboutus/imgOne.svg",
//         paragraph: 'Product engineering, software modernization, cloud-native platforms, and AI-driven solutions.',
//     },
//     {
//         heading: "Solution Delivery",
//         imgSrc: "/images/aboutus/imgTwo.svg",
//         paragraph: 'Accelerated program execution, agile transformation, and scalable delivery models for complex enterprise needs.',
//     },
//     {
//         heading: "High-Tech Consulting",
//         imgSrc: "/images/aboutus/imgThree.svg",
//         paragraph: 'Technology road-mapping, architecture strategy, and innovation advisory.',
//     },
// ]

// const WhatWeOffer = () => {
//     return (
//         <div>
//             <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
//                 <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
//                 {/* <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3> */}
//                 <h4 className='text-center text-4xl lg:text-65xl font-bold'>What We Offer</h4>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
//                     {Aboutdata.map((item, i) => (
//                         <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
//                             <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
//                             <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
//                             <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
//                             {/* Link removed */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WhatWeOffer;




"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Digital Engineering",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Product engineering, software modernization, cloud-native platforms, and AI-driven solutions.',
    },
    {
        heading: "Solution Delivery",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Accelerated program execution, agile transformation, and scalable delivery models for complex enterprise needs.',
    },
    {
        heading: "High-Tech Consulting",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Technology road-mapping, architecture strategy, and innovation advisory.',
    },
];

const WhatWeOffer = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>What We Offer</h4>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className='bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl'
                        >
                            <h4 className='text-4xl font-semibold text-black mb-5'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black mb-5'>{item.paragraph}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer;
