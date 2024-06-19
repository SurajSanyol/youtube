import React, { useEffect, useState } from 'react'
import {channelDetails1,channelDetails2} from "../utills/constant"
// import { json } from 'react-router-dom';
import ShimmerUi from '../utills/ShimmerUi';
import useChannelDetails from '../utills/useChannelDetails';

const VideoCard = (props) => {

    // console.log(props.info);

    

    const { snippet, statistics } = props.info;
    const { channelTitle, thumbnails, title ,channelId} = snippet;

     const viewCount = Math.ceil((statistics.viewCount) / 1000)


     const channelLogo = useChannelDetails(channelId)
   
      if(channelLogo==null)
        {
            return <div className=' gap-3'> <ShimmerUi/></div>
        }

    
       
    return (
        <div className=' w-80 cursor-pointer'>
            <img className=' rounded-xl' src={thumbnails.high.url} alt='thumnail' />

            <div className='flex flex-row gap-x-3'> 
                 <img  className = 'w-12 h-12 rounded-full mt-1'   src= { channelLogo?.medium?.url} alt='channel'/>

                <ul>
                    <li className='font-semibold'> {title}</li>
                    <li className=' font-normal '> {channelTitle}</li>
                    <li className=' font-mono'>{viewCount}k views </li>
                </ul>
            </div>

        </div>
    )
}

export default VideoCard