import React from 'react'
import { FaCircleUser } from "react-icons/fa6";

const Chat = ({name,message}) => {
  return (
    <div className='flex flex-row gap-3 mt-2  '>
            <FaCircleUser className=' h-5 w-7 cursor-pointer' />
            <div className='flex flex-col' >
                   <h4 className=' font-mono'>{name}</h4>
                   <p className=' font-normal px-3 '>
                   {message}
                   </p>
            </div>
    </div>
  )
}

export default Chat