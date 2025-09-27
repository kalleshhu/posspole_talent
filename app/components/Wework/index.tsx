"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  { name: "Space", imgSrc: "/images/wework/aerospace-logo.png" },
  { name: "Defense", imgSrc: "/images/wework/defence-logo.png" },
  { name: "Electronics", imgSrc: "/images/wework/electronics-logo.png" },
  { name: "Energy", imgSrc: "/images/wework/energy-logo.png" },
  { name: "Fashion", imgSrc: "/images/wework/fashion-logo.png" },
  { name: "Food", imgSrc: "/images/wework/food-logo.png" },
  { name: "Health", imgSrc: "/images/wework/health-logo.png" },
  { name: "Mobility", imgSrc: "/images/wework/Mobility-2.png" },
  { name: "People", imgSrc: "/images/wework/people-logo.png" },
  { name: "Sustainability", imgSrc: "/images/wework/sustainability-logo.png" },
  { name: "Telecom", imgSrc: "/images/wework/telecom-logo.png" },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 3000,   // faster (5s per slide movement)
  autoplaySpeed: 0, // continuous
  cssEase: "linear", // smooth motion
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false },
    },
    {
      breakpoint: 450,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false },
    },
  ],
};


    return (
      <div className="bg-wework py-24">
        
<div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mb-10 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We work in several verticals.</h3>
                    </div>

                </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
      <div
  className="bg-white w-[220px] h-[220px] m-3 text-center shadow-lg rounded-2xl 
             flex flex-col items-center justify-center 
             transform transition-transform duration-300 ease-in-out 
             hover:scale-115 hover:-translate-y-2 hover:shadow-2xl"
>
  <Image
    src={items.imgSrc}
    alt={items.name}
    width={90}
    height={90}
    className="mb-4 filter invert-[0.8] brightness-[0.5]"
  />
  <h4 className="text-lg font-semibold">{items.name}</h4>
</div>



            </div>
          ))}
        </Slider>
      </div>
    );
  }
}