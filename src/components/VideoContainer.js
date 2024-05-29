import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from "../utills/constant"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, [])


  const fetchVideo = async () => {

    const data = await fetch(YOUTUBE_API);

    const json = await data.json();

    setvideos(json.items)
    // console.log(json);
  }

  return (
    <div className='flex flex-wrap gap-6 justify-center mt-10'>
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