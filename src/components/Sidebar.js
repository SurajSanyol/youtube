import React from 'react'
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { SiTrendmicro } from "react-icons/si";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Sidebar = () => {

   const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    
   if(!isMenuOpen)
    {
        return null;
    }


  return (
    <div className='  bg-gray-50 w-56 overflow-y-scroll h-screen '>
        
        <div className=' m-3  '>
             
             <ul className='m-1 '>

              <Link to={"/"} >  <li className='flex flex-row my-auto gap-x-3 p-1 font-semibold cursor-pointer'> <IoHome className="my-auto"/>Home</li> </Link>

                 <li className='flex flex-row my-auto gap-x-3 p-1 font-semibold cursor-pointer'> <SiYoutubeshorts className="my-auto" /> Shorts</li>

                 <li className='flex flex-row my-auto gap-x-3 p-1 font-semibold cursor-pointer'> <MdSubscriptions className="my-auto" /> Subscriptions</li>
                 
             </ul>
         </div>

         <div className='m-3'>
             <h3 className='font-semibold text-[17px] font-mono'>Watch later</h3>
             <ul  className='m-1'>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <BiSolidUserAccount className="my-auto" />Your channel</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <BiLike className="my-auto" />Your likes</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <MdDownload  className="my-auto" />Downloads</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer '> <MdPlaylistPlay className="my-auto" />Playlists</li>
             </ul>
         </div>

          
         <div className='m-3'>
             <h3 className='font-semibold text-[17px] font-mono'>Explore</h3>
             <ul  className='m-1'>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <SiTrendmicro className="my-auto" />Trending</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <MdOutlineShoppingBag className="my-auto"/>Shoping</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <MdLibraryMusic  className="my-auto"/>Your Music</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <CiStreamOn className="my-auto" />Live</li>
             </ul>
         </div>

         <div className='m-3'>
             <h3 className='font-semibold text-[17px] font-mono'>Explore</h3>
             <ul  className='m-1'>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <SiTrendmicro className="my-auto" />Trending</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <MdOutlineShoppingBag className="my-auto"/>Shoping</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <MdLibraryMusic  className="my-auto"/>Your Music</li>
                 <li className='flex flex-row my-auto gap-x-3 p-1  font-semibold cursor-pointer'> <CiStreamOn className="my-auto" />Live</li>
             </ul>
         </div>


    </div>
  )
}

export default Sidebar