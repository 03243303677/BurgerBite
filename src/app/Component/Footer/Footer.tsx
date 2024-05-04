import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div className='py-[5rem] pb-[3rem] bg-gray-900'>
        <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid
        grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'>
            <div>
                {/** logo */}
            <div className='flex items-center  text-white space-x-2'>
          <FaBurger className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem ] text-orange-500'/>
          <h1 className='text-[20px] sm:text-[30px] font-semibold'>BurgerHungry</h1>
        </div>
        <p className='text-white text-opacity-60 mt:[0.4rem]'>Lorem ipsum dolor sit amet cons Numquam sit blanditiis</p>
           <p className='mt-[1rem] text-white'>support@example.com</p>
            <p className='text-red-300 text-[19px] font-bold'>+(92) 1234 56789</p> 
            </div>
            {/** 2nd part */}
            <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Products</h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Beef Burger </p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Crispy Burger</p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Clasic Burger</p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Delight Burger</p>
            </div>
            {/** 3rd part */}
            <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Quickly Link</h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Home</p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Menu </p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>Product</p>
                 <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                duration-200 cursor-pointer w-fit'>NewsLetter</p>
            </div>
            {/** 4th Part */}
            <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] uppercase text-white'>Opening Hours</h1>
            <p className='text-white text-[18px]'>Monday - Friday : <span className=' text-yellow-300'>8am -2am</span></p>
            <p className='text-white text-[18px]'>Satureday  : <span className=' text-yellow-300'>8am -12am</span></p>
            {/** social icons */}
            <div className='flex mt-[2rem] items-center space-x-6'>
                <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
                <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400'/>
                <FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-300'/>
            </div>
            </div>
        </div>
        {/** copyright text */}
        <p className='text-center text-white opacity-50 mt:[1.5rem]'>
            Copyright © 2024 <span className= 'text-yellow-500'>WebDev Warriors.</span> All rights reserved</p>
    </div>
  )
}