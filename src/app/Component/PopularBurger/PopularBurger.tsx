
"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from './BurgerCard';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const PopularBurger = () => {
  return (
    <div>
      <div className="py-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Papular <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <BurgerCard 
          title="Beefy Bite"
          image="/images/b1.png"
          reviews="(6)"
          price="10.99$"/>
          <BurgerCard
            title="Beefy Bite"
            image="/images/b1.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b2.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b3.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b4.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b5.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b6.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b7.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b8.png"
            reviews="(6)"
            price="10.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b9.png"
            reviews="(6)"
            price="10.99$"
          />
        </Carousel>
        
      </div>
    </div>
  
    </div>
  )
};
export default PopularBurger;
