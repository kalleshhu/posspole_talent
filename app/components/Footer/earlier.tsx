import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Menu",
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        section: "Category",
        link: ['Design', 'Mockup', 'View all', 'Log In']
    },
    {
        id: 3,
        section: "Pages",
        link: ['404', 'Instructions', 'License']
    },
    {
        id: 4,
        section: "Others",
        link: ['Styleguide', 'Changelog']
    }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-20 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1: Logo + Social Icons */}
                    <div className='col-span-4'>
                        <Link href="/">
                            <Image src="/images/footer/logo.jpg" alt="Posspole Talent Logo" width={260} height={80} className="invert brightness-200 -ml-2"/>
                        </Link>

                        <div className='flex gap-4 mt-6'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com">
                                    <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com">
                                    <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                                </Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com">
                                    <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* COLUMN-2: Contact Us */}

                    <div className="group relative col-span-2">
                    <h2 className="text-2xl font-bold text-white">Contact Us</h2>

                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-white text-xl" />
                        <p className="text-white">123 Posspole Street, Bengaluru, India</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-white text-xl" />
                        <p className="text-white">contact@posspole.com</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-white text-xl" />
                        <p className="text-white">+91 98765 43210</p>
                    </div>
                </div>


                 <div className="rounded-lg overflow-hidden shadow-lg group relative col-span-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.784755407506!2d77.5945623!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670ff4f5071%3A0x6c4f75e48e95a4d8!2sPosspole!5e0!3m2!1sen!2sin!4v1694570000000!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Posspole Location"
                    ></iframe>
                </div>

                </div>
            </div>

            {/* All Rights Reserved */}
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>
                                © {currentYear} - All Rights Reserved by <Link href="https://www.posspole.com/" target="_blank">Posspole</Link>
                            </h3>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6">Privacy policy</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
