import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import youTubeLogo from "../image/logo/youTubeLogo.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utills/SideBarSlice';
import { YOUTUBE_SUGG_API } from '../utills/constant'



const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);


  useEffect(() => {

    const timer = setTimeout(() => {
      suggestionApi()
    }, 170);


    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);


  const suggestionApi = async () => {
    const data = await fetch(`${YOUTUBE_SUGG_API}${searchQuery}`);

    const json = await data.json();
    setSuggestionData(json[1]);
    // console.log(json[1]);
  }


  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }


  return (
    <div className='grid grid-flow-col fixed w-full h-14  mx-auto   bg-slate-50 shadow-lg z-10'>

      <div className='flex flex-row p-3 gap-3 m-2 my-auto col-span-1'>

        <RxHamburgerMenu className='h-7 w-7 cursor-pointer' onClick={() => toggleMenuHandler()} />

        <img className='h-7 cursor-pointer w-[] select-none' src={youTubeLogo} alt='logo' />
      </div>
     
        {/* // search bar  */}
      <div className='my-auto col-span-10 flex flex-col justify-center '>

        <div className=' w-full flex flex-row justify-center '>

          <input className=' border-[1px] my-auto border-gray-400 p-2 w-2/4 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search' onFocus={() => setShowSuggestion(true)} />

          <button className='border-[1px] my-auto border-gray-400 p-2 rounded-r-full cursor-pointer bg-slate-100 hover:bg-gray-200 '><IoSearchOutline className='h-6 w-8 ' /></button>

        </div>

        {
          showSuggestion && <div className=' fixed w-[53rem] mt-[22.75rem] flex  justify-center  '>

            <ul className='w-[28rem] bg-gray-50 rounded-xl shadow-md   '>

              {
                suggestionData.map((s, index) => <li className=' px-3 mt-1 hover:bg-slate-200 select-none	flex items-baseline text-lg gap-x-3 shadow-sm' onClick={(e)=>setSearchQuery(e.target)} key={index}><IoSearchOutline />{s}</li>)
              }

            </ul>

          </div>

        }

      </div>

      <div className=' col-span-1 p-3 m-2 my-auto '>
        <FaCircleUser className=' h-7 w-7 cursor-pointer' />
      </div>

    </div>


  )
}

export default Head