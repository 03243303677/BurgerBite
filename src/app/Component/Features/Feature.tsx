import React from "react";
import img1 from "@/../public/images/f1.jpg"
import img2 from "@/../public/images/f2.jpg";
import img3 from "@/../public/images/f3.jpg"
import Image from "next/image";

export const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/** Heading */}
      <h1 className="heading">
        burger made with <br /> love and
        <span className="text-red-600"> Care</span>
      </h1>
      {/**   Cards */}
      <div
        className="w-[90%] md:w-[80%]  md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 
      md:grid-cols-2 lg:grid-cols-3 gap-[3rem]"
      >
        {/**   1st card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-slate-200  rounded-lg transition-all duration-200">
            <Image src={img1} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Burgers are a timeless symbol of comfort and satisfaction. Ina
              Garten “The hamburger is a gastronomic icon of modern times.{" "}
            </p>
          </div>
        </div>

        {/** 2nd card */}

        <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-slate-200 lg:translate-y-[3.5rem]  rounded-lg transition-all duration-200">
            <Image src={img2} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              In every burger, there a bite of joy and a taste of comfort.
              Unknown 2 A burger without cheese is like a hug without a squeeze.
              Unknown{" "}
            </p>
          </div>
        </div>

        {/**  3rd card */}

        <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-slate-200 rounded-lg transition-all duration-200">
            <Image src={img3} alt="burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chicken Burgers
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Mix salty, savory Parmesan cheese into the ground chicken mixture
              for maximum flavor. Season each patty with salt just before
              cooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;