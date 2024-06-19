import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  
  return (
    <div className=' flex flex-row '>
          <Sidebar/>
          <Body/>

    </div>
  )
}

export default MainContainer