import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='w-full'>
          <ButtonList/>
          <Outlet/>
    </div>
  )
}

export default Body