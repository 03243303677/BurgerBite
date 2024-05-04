import React from 'react'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

interface props {
  showNav:boolean;
  closeNav: () => void;
}
const Mobile = ({closeNav,showNav}:props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className= {`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-black z-[1002]`}
    >
      <ImCross
      onClick={closeNav} className=' absolute top-[2rem] right-[2rem] w-[rem] h-[rem] text-white'/>

      {/* Nav Div */}

    <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
      {/* NavLinks */}
      <ul className='space-y-10'
      >
               <li className='text-[35px] front-meduim  hover:text-yellow-400 text-white'>
               <Link href="/">Home</Link>
               </li>

               <li className='text-[35px] front-meduim hover:text-yellow-400 text-white'>
               <Link href="/">Shop</Link>
               </li>
               <li className='text-[35px] front-meduim hover:text-yellow-400 text-white'>
               <Link href="/">Menu</Link>
               </li>

               <li className='text-[35px] front-meduim hover:text-yellow-400 text-white'>
               <Link href="/">Vlog</Link>
               </li>

               <li className='text-[35px] front-meduim hover:text-yellow-400 text-white'>
               <Link href="/">Contact</Link>
               </li>
           </ul>

    </div>
    </div>
  )
}

export default Mobile