import React from 'react'
import Link from 'next/link'
export default function MenuItems({title,address,Icon}) {
  return (
    <div>
        <Link href ={address} className='mx-4 lg:mx-6 hover:text-amber-600  '>  
        <Icon  className= "text-2xl mx-4 sm:hidden" />
        <p className='hidden  sm:inline text-sm my-2 '>{title}</p>
        </Link>
    </div>
  )
}
