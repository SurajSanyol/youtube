import React, { useEffect, useState } from 'react'
// import { YOUTUBE_API } from "../utills/constant"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useVideoDetails from '../utills/useVideoDetails'
import { useSelector } from 'react-redux';



const VideoContainer = () => {
   

  // custom hook 
  const videos = useVideoDetails();
  
  // const isOpen = useSelector((store)=>store.app.isMenuOpen);





  return (
    <div className='flex flex-wrap gap-6 justify-center mt-10 '>
      {
        videos.map((video) =>
          <Link to={"/watch?v="+video.id}  key={video.id}>
            <VideoCard info={video}  />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer