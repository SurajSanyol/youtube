import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import youTubeLogo from "../image/logo/youTubeLogo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utills/SideBarSlice';
import { RxCross1 } from "react-icons/rx";



const Head = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  // const [isOpen , setIsOpen] = useState(true);





  return (
    <div className='grid grid-flow-col   mx-auto m-1 '>

      <div className='flex flex-row p-3 gap-3 m-2 my-auto col-span-1'>

        <RxHamburgerMenu className='h-7 w-7 cursor-pointer' onClick={() => toggleMenuHandler()} />



        <img className='h-7 cursor-pointer w-[]' src={youTubeLogo} alt='logo' />
      </div>

      <div className='my-auto col-span-10 flex flex-row justify-center'>
        <input className=' border-[1px] border-gray-400 p-2 w-2/4 rounded-l-full' type='text' placeholder='Search' />
        <button className='border-[1px] border-gray-400 p-2 rounded-r-full cursor-pointer bg-slate-100 hover:bg-gray-200'><IoSearchOutline className='h-5 w-7 ' /></button>
      </div>

      <div className=' col-span-1 p-3 m-2 my-auto '>
        <FaCircleUser className=' h-7 w-7 cursor-pointer' />
      </div>

    </div>
  )
}

export default Head