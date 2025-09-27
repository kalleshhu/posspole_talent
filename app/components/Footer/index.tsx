// import Image from "next/image";
// import Link from "next/link";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <div className="bg-black -mt-40" id="first-section">
//             <div className="mx-auto max-w-2xl pt-20 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

//                     {/* COLUMN-1: Logo + Social Icons */}
//                     <div className="col-span-4">
//                         <Link href="/">
//                             <Image
//                                 src="/images/footer/logo.jpg"
//                                 alt="Posspole Talent Logo"
//                                 width={260}
//                                 height={80}
//                                 className="invert brightness-200 -ml-2"
//                             />
//                         </Link>

//                         <div className="flex gap-4 mt-6">
//                             <div className="footer-icons">
//                                 <Link href="https://facebook.com">
//                                     <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
//                                 </Link>
//                             </div>
//                             <div className="footer-icons">
//                                 <Link href="https://twitter.com">
//                                     <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
//                                 </Link>
//                             </div>
//                             <div className="footer-icons">
//                                 <Link href="https://www.instagram.com/posspole?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
//                                     <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

                    
//                     {/* COLUMN-2: Contact Us */}
// {/* COLUMN-2: Contact Us */}
// <div className="col-span-4 space-y-4">
//   {/* <h2 className="text-2xl font-bold text-white">Contact Us</h2> */}

//   {/* Location */}
//   <a
//     href="https://maps.google.com/?q=POSSPOLE+PVT+LTD,+Bengaluru"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center space-x-4 group mb-7"
//   >
//     <div className="p-3 rounded-full bg-transparent group-hover:bg-[#5e5e5e] transition-colors">
//       <FaMapMarkerAlt className="text-white text-3xl -ml-0.5"/>
//     </div>
//     <p className="text-white transition-colors">
//       POSSPOLE PVT LTD, Krishi Bhavan, Entrance of Cubbon Park Rd, Nunegundlapalli, Ambedkar Veedhi, Bengaluru, Karnataka 560001
//     </p>
//   </a>

//   {/* Email */}
//   <a
//     href="mailto:letmein@posspole.com"
//     className="flex items-center space-x-4 group mb-7"
//   >
//     <div className="p-3 rounded-full bg-transparent group-hover:bg-[#5e5e5e] transition-colors">
//       <FaEnvelope className="text-white text-2xl" />
//     </div>
//     <p className="text-white transition-colors">
//     letmein@posspole.com
//     </p>
//   </a>

//   {/* Phone */}
//   <a
//     href="tel:+916361588219"
//     className="flex items-center space-x-4 group"
//   >
//     <div className="p-3 rounded-full bg-transparent group-hover:bg-[#5e5e5e] transition-colors">
//       <FaPhone className="text-white text-2xl" />
//     </div>
//     <p className="text-white transition-colors">
//     +91 6361588219
//     </p>
//   </a>
// </div>


//                     {/* COLUMN-3: Google Map */}
// <div className="col-span-4">
//   <div className="rounded-lg overflow-hidden shadow-lg h-full">
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.430824409344!2d77.5856743!3d12.9681475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1739d40ce5c9%3A0xec1860d98ab0d356!2sPOSSPOLE!5e0!3m2!1sen!2sin!4v1694570000000!5m2!1sen!2sin"
//     width="100%"
//     height="250"
//     style={{ border: 0 }}
//     allowFullScreen
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//     title="Posspole Location"
//   ></iframe>
// </div>

// </div>



//                 </div>
//             </div>

//             {/* All Rights Reserved */}
//             <div className="mx-auto max-w-2xl lg:max-w-7xl">
//                 <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
//                     <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
//                         <div>
//                             <h3 className='text-center md:text-start text-offwhite text-lg'>
//                                 © {currentYear} - All Rights Reserved by <Link href="https://www.posspole.com/" target="_blank">Posspole</Link>
//                             </h3>
//                         </div>
//                         <div className="flex justify-center md:justify-end">
//                             <Link href="/">
//                                 <h3 className="text-offwhite pr-6">Privacy policy</h3>
//                             </Link>
//                             <Link href="/">
//                                 <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;





import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-20 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* ↓↓↓ changed gap-x-16 → gap-x-8 ↓↓↓ */}
                <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1: Logo + Social Icons */}
                    <div className="col-span-3">
                        <Link href="/">
                            <Image
                                src="/images/footer/logo.jpg"
                                alt="Posspole Talent Logo"
                                width={260}
                                height={80}
                                className="invert brightness-200 -ml-2"
                            />
                        </Link>

                        <div className="flex gap-4 mt-6">
                            <div className="footer-icons">
                                <Link href="https://facebook.com">
                                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                                </Link>
                            </div>
                            <div className="footer-icons">
                                <Link href="https://twitter.com">
                                    <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                                </Link>
                            </div>
                            <div className="footer-icons">
                                <Link href="https://www.instagram.com/posspole?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2: Contact Us */}
                    <div className="col-span-5 space-y-4">
                        <a
                            href="https://maps.google.com/?q=POSSPOLE+PVT+LTD,+Bengaluru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 group mb-7"
                        >
                            <div className="p-3 rounded-full bg-transparent group-hover:bg-[#5e5e5e] transition-colors">
                                <FaMapMarkerAlt className="text-white text-3xl -ml-0.5" />
                            </div>
                            <p className="text-white transition-colors">
                                POSSPOLE PVT LTD, Krishi Bhavan, Entrance of Cubbon Park Rd, Nunegundlapalli, Ambedkar Veedhi, Bengaluru, Karnataka 560001
                            </p>
                        </a>

                        <a
                            href="mailto:letmein@posspole.com"
                            className="flex items-center space-x-4 group mb-7"
                        >
                            <div className="p-3 rounded-full bg-transparent group-hover:bg-[#5e5e5e] transition-colors">
                                <FaEnvelope className="text-white text-2xl" />
                            </div>
                            <p className="text-white transition-colors">letmein@posspole.com</p>
                        </a>

                        <a
                            href="tel:+916361588219"
                            className="flex items-center space-x-4 group"
                        >
                            <div className="p-3 rounded-full bg-transparent group-hover:bg-[#5e5e5e] transition-colors">
                                <FaPhone className="text-white text-2xl" />
                            </div>
                            <p className="text-white transition-colors">+91 6361588219</p>
                        </a>
                    </div>

                    {/* COLUMN-3: Google Map */}
                    <div className="col-span-4">
                        <div className="rounded-lg overflow-hidden shadow-lg h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.430824409344!2d77.5856743!3d12.9681475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1739d40ce5c9%3A0xec1860d98ab0d356!2sPOSSPOLE!5e0!3m2!1sen!2sin!4v1694570000000!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Posspole Location"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>
                                © {currentYear} - All Rights Reserved by <Link href="/" target="_blank">Posspole Talent</Link>
                            </h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/"><h3 className="text-offwhite pr-6">Privacy policy</h3></Link>
                            <Link href="/"><h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
