import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { IoDocumentsOutline } from "react-icons/io5";
import { ImBlog } from "react-icons/im";


const Sidebar = () => {
  return (
  // --------Sidebar-------
    <section className='w-[25%] min-h-screen'>
        <div className='rounded flex items-center justify-start gap-2 m-4 p-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-100 ease-in-out'>
            <IoHomeOutline />
            <p>Dashboard</p>
        </div>
        <div className='rounded flex items-center justify-start gap-2 m-4 p-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-100 ease-in-out'>
            <BsMicrosoftTeams />
            <p>Team</p>
        </div>
        <div className='rounded flex items-center justify-start gap-2 m-4 p-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-100 ease-in-out'>
            <GoProjectSymlink />
            <p>Projects</p>
        </div>
        <div className='rounded flex items-center justify-start gap-2 m-4 p-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-100 ease-in-out'>
            <CiCalendarDate />
            <p>Calendar</p>
        </div>
        <div className='rounded flex items-center justify-start gap-2 m-4 p-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-100 ease-in-out'>
            <IoDocumentsOutline />
            <p>Documents</p>
        </div>
        <div className='rounded flex items-center justify-start gap-2 m-4 p-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-100 ease-in-out'>
            <ImBlog />
            <p>Blogs</p>
        </div>
    </section>
  )
}

export default Sidebar
