
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toOffMenu } from '../utills/SideBarSlice';
import { useSearchParams } from 'react-router-dom';
import { VIDEO_COMMENT_API1, VIDEO_COMMENT_API2 } from '../utills/constant'
import useVideoDetails from '../utills/useVideoDetails'
import useChannelDetails from '../utills/useChannelDetails';
import CommentContainer from './CommentContainer';
import ChatContainer from './ChatContainer';

const WatchVideo = () => {

  const [searchpram] = useSearchParams();
  // console.log(searchpram.get("v"));


  const videos = useVideoDetails();
  // console.log(videos);

  const video = videos.filter((v) => {
    return v.id === searchpram.get("v");
  })

  // console.log(video[0]);

  const { snippet, statistics } = video[0] || {};

  const { title, channelTitle, thumbnails, channelId } = snippet || {};

  // const channelLogo = useChannelDetails(channelId)

  //  const {url}=channelLogo?.items[0]?.snippet?.thumbnails?.medium;

  // console.log(url);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toOffMenu())
  }, [dispatch]);




  return (
    <div>

      <div className=' flex  gap-x-6  '>

        <div className='flex flex-col'>
          <iframe className=' rounded-xl  ml-16 mt-10 ' width="640" height="360" src={"https://www.youtube.com/embed/" + searchpram.get("v") + "?si=jIFOkQ3JUygr_gsH"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <div className='flex flex-col ml-16 py-3'>
            <h3 className='font-semibold'>{title}</h3>
            <div className='flex flex-row mt-1 gap-x-4'>
              {/* <img className='w-12 h-12 rounded-full ' src={channelLogo?.medium?.url} alt='channel' /> */}
              <h3 className='font-normal py-1'>{channelTitle}</h3>
            </div>

          </div>

        </div>

        <div className=' drop-shadow-lg border border-gray-200 w-[90%] rounded-lg  mt-10 px-4 mr-16 h-[380px]  '>
                {/* <h4> this is comment section</h4> */}
                <ChatContainer/>
        </div>

      </div>

      <CommentContainer Videoid={searchpram.get("v")} />

    </div>
  )
}

export default WatchVideo