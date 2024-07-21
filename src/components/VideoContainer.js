import React, { useCallback, useEffect, useState } from 'react'
import { YOUTUBE_API } from "../utills/constant"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';




const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  useEffect(() => {
    fetchVideo();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight-100 && !isFetching) {
      fetchVideo();
    }
  }, [isFetching]);


  const fetchVideo = async () => {
    setIsFetching(true);
    const response = await fetch(YOUTUBE_API);
    const json = await response.json();
    setVideos((prevVideos) => [...prevVideos, ...json.items]);
    setIsFetching(false);
    
  }

  return (
    <div className='flex flex-wrap gap-6 justify-center mt-10 '>
      {
        videos.map((video) =>
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer