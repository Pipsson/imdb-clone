 import React from 'react'
import MenuItems from './MenuItems'
import { FaHome , } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import Link from 'next/link';
 export default function Header() {
   return (
     <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6' >
      <div className='flex'>
        <MenuItems  title="HOME" address="/" Icon={FaHome}  />
        <MenuItems  title="ABOUT" address="/about" Icon={IoInformationCircle}  />
      </div>
      <div className=''>
        <Link className="" href="/">
           <span className='bg-amber-500 px-2 py-1 font-bold rounded-lg mr-1' >IMDb</span> 
           <span className='sm:hidden'>Clone </span>
        </Link>

      </div>
     </div>
   )
 }
 