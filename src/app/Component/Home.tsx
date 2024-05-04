"use client"
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import { Feature } from "@/app/Component/Features/Feature"
import { PopularBurger } from './PopularBurger/PopularBurger';
import { Delivery } from '@/./app/Component/Delivery/Delivery'
import { Team } from './Team/Team';
import { Reservation } from './Reservation/Reservation';
import { Newsletter } from './Newsletter/Newsletter';
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
    await import("aos");
    AOS.init({
      duration:1000,
      easing : "ease",
      once : true,
      anchorPlacement: "top-center",
    });
    };
    initAOS();

  },[])
  return (
    <div  className='overflow-hidden'>
     <Hero/>
     <Feature/>
     <PopularBurger/>
     <Delivery/>
     <Team/>
     <Reservation/>
     <Newsletter/>
     
     
    </div>
  );
};

export default Home;