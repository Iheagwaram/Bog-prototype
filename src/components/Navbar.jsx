import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className='h-[50px] shadow flex justify-between items-center px-10'>
        <div className='flex items-center'>
            <div className='w-[100px]'>
            <img src="logo 1.png" alt="" className='logo' />
            </div>
            <div className='flex items-center bg-gray-100 rounded p-1 ms-4'>
                <CiSearch />
                <input type="search" 
                name="" id="" 
                placeholder='Search...' 
                className='focus:outline-none'/>
            </div>
        </div>
        <div className='flex items-center px-10'>
         <div className='me-3'>
            <FaRegBell className='text-2xl relative'/>
            <p className='h-4 w-4 bg-black text-white rounded-full text-xs flex items-center justify-center absolute top-2 right-30'>2</p>
         </div>
         <div className='text-3xl'>
            <RxAvatar />
         </div>
         
        </div>

    </nav>
  )
}

export default Navbar
