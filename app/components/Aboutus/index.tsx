// import Image from "next/image";

// const Aboutus = () => {
//     return (
//         <div id="aboutus-section">
//         <div className="relative -mb-20">

//             <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
//                 <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

//                     {/* COLUMN-1 */}
//                     <div>
//                         {/* <Image src="/images/aboutus/about.png" alt="man-icon" width={416} height={600} className="mx-auto md:mx-0" /> */}
//                         <img
//                             src="/images/aboutus/about.png"
//                             alt="image"
//                             style={{
//                                 width: "450px",
//                                 height: "450px",
//                                 borderRadius: "24px",
//                                 boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
//                             }}
//                         />
//                     </div>

//                     {/* COLUMN-2 */}
//                     <div className="relative">
//                         <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />

//                         <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-12 text-center lg:text-start">About Us</h2>
//                         <p className="font-medium text-lightblack text-2xl mt-10 text-center lg:text-start"> Global Talent Sphere is an AI - generation high tech consulting and services company dedicated to empowering enterprises and industries with cutting-edge Digital Engineering and Solution Delivery capabilities. With a global talent network spanning 30+ countries across the US, EU, Australia, and India, we blend local market insight with world-class expertise to accelerate innovation and deliver measurable business outcomes.</p>
//                         {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Cathy Hills, CEO</p> */}
//                     </div>

//                 </div>
//             </div>

//         </div>
//         </div>
//     )
// }

// export default Aboutus;



import Image from "next/image";

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className="relative -mb-20">
                <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 my-16">

                        {/* COLUMN-1 */}
                        <div className="relative w-[450px] h-[400px] mx-auto md:mx-0 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] overflow-hidden mt-14">
                            <img
                                src="/images/aboutus/aboutus.jpg"
                                alt="image"
                                className="w-full h-full object-cover"
                            />
                            {/* Black overlay */}
                            {/* <div className="absolute inset-0 bg-black/10"></div> */}
                        </div>

                        {/* COLUMN-2 */}
                        <div className="relative">
                            <Image
                                src="images/dedicated/comma.svg"
                                alt="comma-image"
                                width={200}
                                height={106}
                                className="absolute comma-pos hidden lg:block"
                            />
                            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-12 text-center lg:text-start">
                                About Us
                            </h2>
                            <p className="font-medium text-lightblack text-xl mt-10 text-center lg:text-start">
                                Global Talent Sphere is an AI - generation high tech consulting and services company dedicated to empowering enterprises and industries with cutting-edge Digital Engineering and Solution Delivery capabilities. With a global talent network spanning 30+ countries across the US, EU, Australia, and India, we blend local market insight with world-class expertise to accelerate innovation and deliver measurable business outcomes.
                                {/* Posspole Talent concentrate on three core domains essential to digitizing fundamental business operations: Customer Experience, Intelligent Industry, and Enterprise Management. This work is supported by the twin technological foundations of any successful digital transformation—data and cloud—all while rigorously upholding the principles of cybersecurity and sustainable development. */}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
