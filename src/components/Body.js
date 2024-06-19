import React from 'react'
import ButtonList from './ButtonList'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='w-full mt-[70px] '>
          <ButtonList/>
          <Outlet/>
    </div>
  )
}

export default Body